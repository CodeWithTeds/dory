<script lang="ts">
  import HeroSection from './HeroSection.svelte';
  import WhyDorySection from './WhyDorySection.svelte';
</script>

<div class="landing-page">
  <!-- Minimalist Hero matching design/image.png and design/ui.md -->
  <HeroSection />

  <!-- Why Dory? Section / Page 2 -->
  <WhyDorySection />
</div>

<style>
  .landing-page {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
