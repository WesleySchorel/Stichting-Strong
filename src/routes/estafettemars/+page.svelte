<script>
  import Header from "$lib/components/header.svelte";

  export let data;
</script>

<div class="grid">
  <section class="text-container">
    <Header />
    <h1><span>Estafettemars</span></h1>
    <p>
      In ons scholenproject STRONG wordt jaarlijks voor en door studenten een
      conferentie, debat en protestmars georganiseerd.
    </p>
  </section>
</div>

<section class="secondary-bg">
  <h2>Uitgelicht:</h2>
  <article>
    <div class="conferenties-container">
      {#each data.estafettemars as conferentie}
        <a href="/estafettemars/{conferentie.uid}">
          <div class="conferentie">
            <img
              src={conferentie.data.image.url}
              alt={conferentie.data.title}
            />
            <section class="date">
              <span>{conferentie.data.date}</span>
              <h3>{conferentie.data.title}</h3>
            </section>
          </div>
        </a>
      {/each}
    </div>
  </article>
</section>

<style>
  .secondary-bg {
    background-color: var(--secondary-bg);
    padding: 6rem;
    /* border: 3px solid red; */
  }

  h2 {
    display: flex;
    justify-content: left;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
  }

  img {
    height: 26rem;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.65) 100%), rgba(0,0,0,0) 0%;
  }

  .date {
    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;
    color: white;
  }

  .conferenties-container {
    color: var(--c-pink);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .conferentie {
    position: relative;
    transition: 0.2s;
  }

  .conferentie:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
  }

  @media screen and (max-width: 480px) {
    .conferenties-container {
      grid-template-columns: repeat(1, 1fr);
    }

    img {
      height: 12rem;
      width: 100%;
    }
  }

  div.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    width: 76%;
    margin: 8rem;
    margin-top: 10rem;
  }

  p {
    margin-top: 1rem;
  }

  a {
    margin-top: 1rem;
  }

  @media screen and (max-width: 480px) {
    div.grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "text";
    }

    .text-container {
      margin: 1.5rem;
    }
  }
</style>
