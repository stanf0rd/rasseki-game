<slot />

<style lang="scss">
  :global(body) {
    margin: 0;
  }

  :global(*, *:before, *:after) {
    box-sizing: border-box;
  }

  :global(#main) {
    width: 100vw;
    overflow: hidden;

    @media (prefers-color-scheme: dark) {
      background: #333;
      color: #333;
    }
  }
</style>
