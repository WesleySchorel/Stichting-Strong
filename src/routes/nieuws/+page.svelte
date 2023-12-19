<script>
  import Header from "$lib/components/header.svelte";

  export let data;
</script>

<div class="grid">
  <section class="text-container">
    <Header />
    <h1>Nieuws</h1>
  </section>
</div>

<div class="nieuws-container">
  <div class="categorieën">
    <h2>Categorieën</h2>
    <ul>
      <li>Algemeen</li>
      <li>Aankondigingen</li>
      <li>Overig</li>
    </ul>
  </div>

  <div class="articles">
    {#each data.nieuws as nieuws}
      <a href="/nieuws/{nieuws.uid}">
        <article>
          <h2>{nieuws.data.title}</h2>
          <p>
            {nieuws.data.description}
          </p>
          <span>{nieuws.data.date} · {nieuws.data.read_time} min leestijd</span>
        </article>
      </a>
    {/each}
  </div>
</div>

<style>
  .nieuws-container {
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "categorieën articles";
    margin: 0rem 8rem 4rem 8rem;
  }

  .categorieën {
    grid-area: categorieën;
  }

  .articles {
    grid-area: articles;
  }

  article {
    margin-bottom: 2rem;
  }

  article p {
    margin-bottom: 1rem;
  }

  p {
    margin-top: 1rem;
  }

  span {
    font-size: 1.2rem;
  }

  li {
    list-style: none;
    font-size: 1.5rem;
  }

  div.grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text";
    margin: auto;
    /* border: 3px solid red; */
  }

  .text-container {
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 10rem 8rem 4rem 8rem;
  }
</style>
