<script lang="ts">
  import { onMount } from 'svelte';
  import { loadImage } from '@/utils/image';

  import GameMap from '@/core/gamemap';
  import { map } from '@/stores/map';

  let gameMap: GameMap;

  // canvas
  let canvas: HTMLCanvasElement;
  $: context = canvas && (canvas.getContext('2d') as CanvasRenderingContext2D);
  let rect: DOMRect;
  let width: number, height: number, bgScale: number; //, surfaceScale: number;

  // images
  let background: HTMLImageElement, arrow: HTMLImageElement;

  function replacePlayer(event: MouseEvent): void {
    if (!rect) rect = canvas.getBoundingClientRect();
    const { left, top } = rect;
    const x = event.clientX - left;
    const y = event.clientY - top;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background, 0, 0, width, background.height * bgScale);
    context.drawImage(arrow, x - arrow.width / 2, y);
  }

  onMount(async () => {
    gameMap = new GameMap();

    [background, arrow] = await Promise.all([
      loadImage($map.imageSource),
      loadImage('/arrow.png'),
    ]);

    bgScale = width / background.width;

    // surfaceScale = width / $map.width;

    if (!context) throw new Error('Cannot find canvas context');
    context.imageSmoothingEnabled = false;
    context.drawImage(background, 0, 0, width, background.height * bgScale);
    context.drawImage(arrow, width / 2, height / 2);
  });
</script>

<div class="map" bind:offsetWidth={width} bind:offsetHeight={height}>
  <canvas
    bind:this={canvas}
    class="map__canvas"
    {height}
    {width}
    on:mousedown={replacePlayer}
  />
</div>

<style lang="scss">
  .map {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
