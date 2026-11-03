<script lang="ts">
  import { navigationStore } from './stores/navigation';
  import Navbar from './components/common/Navbar.svelte';
  import Footer from './components/common/Footer.svelte';
  import Toast from './components/common/Toast.svelte';
  import LandingPage from './components/landing/LandingPage.svelte';
  import InstallerPage from './components/installer/InstallerPage.svelte';
</script>

<div class="app-shell">
  <!-- Top Navigation with 2-page switcher -->
  <Navbar currentRoute={$navigationStore} />

  <!-- Dynamic 2-Page Routing -->
  <main class="main-viewport">
    {#if $navigationStore === 'landing'}
      <LandingPage />
    {:else}
      <InstallerPage />
    {/if}
  </main>

  <!-- Global Footer -->
  <Footer />

  <!-- Global Toast Feedback System -->
  <Toast />
</div>

<style>
  .app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-canvas);
    color: var(--text-primary);
  }

  .main-viewport {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
