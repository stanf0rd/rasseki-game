<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const wasmUrl = await import("asc:@/core/add.as");

    WebAssembly.instantiateStreaming(fetch(wasmUrl)).then(({ instance }) =>
      console.log(instance.exports.add(40, 2))
    );
  });
</script>
