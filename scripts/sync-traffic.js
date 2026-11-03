import fs from 'node:fs';
import path from 'node:path';

const TRAFFIC_DIR = path.resolve(process.cwd(), 'traffic');

if (!fs.existsSync(TRAFFIC_DIR)) {
  fs.mkdirSync(TRAFFIC_DIR, { recursive: true });
}

function loadJson(filePath, defaultValue) {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn(`Could not read ${filePath}, using default.`, err);
  }
  return defaultValue;
}

function mergeRecords(existingRecords, newRecords) {
  const map = new Map();

  for (const item of existingRecords) {
    if (item && item.timestamp) {
      map.set(item.timestamp, {
        timestamp: item.timestamp,
        count: Number(item.count) || 0,
        uniques: Number(item.uniques) || 0,
      });
    }
  }

  for (const item of newRecords) {
    if (item && item.timestamp) {
      const prev = map.get(item.timestamp);
      map.set(item.timestamp, {
        timestamp: item.timestamp,
        count: Math.max(prev?.count || 0, Number(item.count) || 0),
        uniques: Math.max(prev?.uniques || 0, Number(item.uniques) || 0),
      });
    }
  }

  return Array.from(map.values()).sort((a, b) => a.timestamp.localeCompare(b.timestamp));
}

function toCsv(records) {
  const header = 'timestamp,count,uniques\n';
  const rows = records.map((r) => `${r.timestamp},${r.count},${r.uniques}`).join('\n');
  return header + rows;
}

export function syncTrafficData(clonesPayload, viewsPayload) {
  const clonesFile = path.join(TRAFFIC_DIR, 'clones.json');
  const viewsFile = path.join(TRAFFIC_DIR, 'views.json');
  const clonesCsvFile = path.join(TRAFFIC_DIR, 'clones.csv');
  const viewsCsvFile = path.join(TRAFFIC_DIR, 'views.csv');
  const summaryFile = path.join(TRAFFIC_DIR, 'summary.json');
  const badgeFile = path.join(TRAFFIC_DIR, 'badge.json');

  const existingClones = loadJson(clonesFile, []);
  const existingViews = loadJson(viewsFile, []);

  const mergedClones = mergeRecords(existingClones, clonesPayload?.clones || []);
  const mergedViews = mergeRecords(existingViews, viewsPayload?.views || []);

  const totalClones = mergedClones.reduce((acc, r) => acc + r.count, 0);
  const totalUniqueClones = mergedClones.reduce((acc, r) => acc + r.uniques, 0);
  const totalViews = mergedViews.reduce((acc, r) => acc + r.count, 0);
  const totalUniqueViews = mergedViews.reduce((acc, r) => acc + r.uniques, 0);

  const summary = {
    total_clones: totalClones,
    total_unique_cloners: totalUniqueClones,
    total_views: totalViews,
    total_unique_visitors: totalUniqueViews,
    latest_clones_14d: clonesPayload?.count || 0,
    latest_views_14d: viewsPayload?.count || 0,
    last_updated: new Date().toISOString(),
  };

  const badge = {
    schemaVersion: 1,
    label: 'skill installs',
    message: `${totalClones}`,
    color: '0333ff',
    style: 'flat',
  };

  fs.writeFileSync(clonesFile, JSON.stringify(mergedClones, null, 2) + '\n');
  fs.writeFileSync(viewsFile, JSON.stringify(mergedViews, null, 2) + '\n');
  fs.writeFileSync(clonesCsvFile, toCsv(mergedClones) + '\n');
  fs.writeFileSync(viewsCsvFile, toCsv(mergedViews) + '\n');
  fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2) + '\n');
  fs.writeFileSync(badgeFile, JSON.stringify(badge, null, 2) + '\n');

  console.log('Traffic data synchronized successfully.');
  console.log(`Total clones recorded: ${totalClones} (${totalUniqueClones} unique)`);
  console.log(`Total views recorded: ${totalViews} (${totalUniqueViews} unique)`);
}

// Standalone runner via CLI
if (process.argv[1]?.endsWith('sync-traffic.js')) {
  const clonesRaw = process.env.CLONES_PAYLOAD || '{}';
  const viewsRaw = process.env.VIEWS_PAYLOAD || '{}';

  try {
    const clonesPayload = JSON.parse(clonesRaw);
    const viewsPayload = JSON.parse(viewsRaw);
    syncTrafficData(clonesPayload, viewsPayload);
  } catch (err) {
    console.error('Failed to parse traffic payload', err);
    process.exit(1);
  }
}
