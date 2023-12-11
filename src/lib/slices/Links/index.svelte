<script>
  /** @type {import("@prismicio/client").Content.LinksSlice} */
  export let slice;
</script>

<div>
  <h2>{slice.primary.title}</h2>
  <hr />
  <ul>
    {#each slice.items as item}
      <li>
        <a href={item.link.url} target="_blank">{item.link}</a>
      </li>
      {/each}
  </ul>
</div>

<style>
  h2 {
    margin-bottom: 1rem;
  }

  div {
    padding: 8rem;
    /* border: 3px solid red; */
  }

  hr {
    padding: 0.1rem;
    background-color: var(--hr);
    margin-bottom: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.1rem;
  }

  li {
    width: 95%;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }

  @media screen and (max-width: 480px) {
    div {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }

    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
