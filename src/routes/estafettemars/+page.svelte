<script>
  export let data;
  import archief from "$lib/assets/archief-thumbnail.jpg";
</script>

<div class="grid">
  <section class="text-container">
    <h1><span>Kinderrechtenconferentie en Kinderrechtenmars</span></h1>
    <p>
      In ons scholenproject STRONG wordt jaarlijks voor en door studenten een
      Kinderrechtenconferentie, -debat en -mars georganiseerd. Deze producten zijn los van
      elkaar te organiseren en bekrachtigen elkaar wanneer zij gezamenlijk vorm krijgen.      
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
              <h3>{conferentie.data.title}</h3>
              <span>{conferentie.data.date}</span>
              <p><b>Lees meer →</b></p>
            </section>
          </div>
        </a>
      {/each}
      <a href="/archief">
        <div class="conferentie">
          <img
            src={archief}
            alt="archief thumbnail"
          />
          <section class="date">
            <h3>Bekijk het archief voor voorgaande Kinderrechtenconferenties.</h3>
            <p><b>Bekijk het archief →</b></p>
          </section>
        </div>
      </a>
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
    mask-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 100%),
      rgba(0, 0, 0, 0) 0%;
    box-shadow: 10px 10px 15px -15px rgba(0, 0, 0, 0.75);
  }

  .date {
    position: absolute;
    left: 0;
    bottom: 0;
    color: white;
  }

  section .date {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7142506660867471) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    padding: 1.5rem;
    padding-top: 5rem;
    width: 100%;
  }

  .date p {
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

  @media screen and (max-width: 961px) {
    .conferenties-container {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 2rem;
    }

    h2 {
      margin-top: 2rem;
    }

    .secondary-bg {
      background-color: var(--secondary-bg);
      padding: 2rem;
      /* border: 3px solid red; */
    }

    img {
      height: 12rem;
      width: 100%;
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

    .text-container {
      margin: 2rem;
      margin-bottom: 3rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
</style>
