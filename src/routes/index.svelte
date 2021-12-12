<script lang="ts">
  // import { onMount } from 'svelte';

  import Map from '@/components/Map.svelte';
</script>

<div class="app">
  <header class="app__header rounded-block">
    <h1>Rasseki</h1>
  </header>
  <div class="app__map rounded-block">
    <Map />
  </div>
  <div class="app__side rounded-block" />
  <footer class="app__footer rounded-block" />
</div>

<style lang="scss">
  .app {
    height: 100vh;
    width: 1000px;
    overflow: scroll;

    margin: auto;
    padding: 20px 0;

    display: grid;
    grid-template-areas:
      'head head'
      'map  side'
      'map  footer';
    grid-template-rows: 100px minmax(440px, 1fr) 100px;
    grid-template-columns: 2fr 1fr;
    gap: 20px;

    @media (min-width: 660px) and (max-width: 1100px) {
      width: 660px;
      grid-template-areas:
        'head'
        'map'
        'side';
      grid-template-columns: 1fr;
      grid-template-rows: 100px minmax(440px, 1fr) 100px;
    }

    @media (max-width: 660px) {
      width: 320px;
      grid-template-areas:
        'head'
        'map'
        'side';
      grid-template-columns: 1fr;
      grid-template-rows: 100px minmax(360px, 1fr) 100px;
    }

    &__header {
      grid-area: head;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__map {
      grid-area: map;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    &__side {
      grid-area: side;
    }

    &__footer {
      grid-area: footer;

      @media (max-width: 1100px) {
        display: none;
      }
    }
  }

  .rounded-block {
    border-radius: 10px;
    background-color: #fafafa;
  }
</style>
