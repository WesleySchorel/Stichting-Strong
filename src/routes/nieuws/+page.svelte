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
    <h3>Blijf op de hoogte..</h3>
    <p>
      Welkom op onze nieuwspagina, waar we je op de hoogte houden van het
      laatste en meest relevante nieuws over Stichting Strong.
    </p>
  </div>

  <div class="articles">
    {#each data.nieuws as nieuws}
      <a href="/nieuws/{nieuws.uid}">
        <article>
          <h3>{nieuws.data.title}</h3>
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
    width: 90%;
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

  @media screen and (max-width: 480px) {
    .nieuws-container {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1.6fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "categorieën"
        "articles";
      margin: 2rem;
    }

    div.grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "text";
    }

    .categorieën {
      margin-top: -2rem;
    }

    .articles {
      margin-top: -8rem;
    }

    .text-container {
      margin: 2rem;
    }

    /* img {
          width: auto;
          height: 8rem;
          margin: 2rem 0rem 0rem 0rem;
          border-radius: 5px;
      } */
  }
</style>
