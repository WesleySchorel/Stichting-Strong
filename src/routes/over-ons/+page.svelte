<script>
  import Header from "$lib/components/header.svelte";
  import Links from "$lib/components/links.svelte";

  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <Header />
    <h1><span>Over de stichting</span></h1>
    <p>
      Vindt aanvullende informatie over de stichting. Supporting The Rights Of New Generations (STONG).
    </p>
  </section>
</div>

<section class="stichting-info-container">
  <h2>Belangerijke documenten</h2>
  <article>
    <div class="documents-container">
      <a href="/over-ons/rechten-van-het-kind">
        <div class="document">
          <h3>Rechten van het kind</h3>
          <p>Het Verdrag inzake de rechten van het kind, feiten en acutele cijfers.</p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/doelstelling-en-anbistatus">
        <div class="document">
          <h3>Doelstelling en ANBI status</h3>
          <p>De doelstelling van de stichting en hij zij dit doel trachten te bereiken.</p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/jaarverslagen">
        <div class="document">
          <h3>Jaarverslagen</h3>
          <p>Inzichten in de financiële jaarverslagen van stichting strong.</p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/comité-van-aanbeveling">
        <div class="document">
          <h3>Comité van aanbeveling</h3>
          <p>Een samengestelde groep mensen die zich aansluiten bij de missie van de stichting.</p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/partners-strong">
        <div class="document">
          <h3>Partners STRONG</h3>
          <p>Bedrijven en organisaties die de doelstelling van de stichting steunen.</p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/team-strong">
        <div class="document">
          <h3>Team STRONG</h3>
          <p>De mensen achter de projecten en initiatieven van Stichting Strong.</p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
    </div>
  </article>
</section>

<Links />

<style>
  .stichting-info-container {
    background-color: var(--secondary-bg);
    padding: 6rem 0 8rem 0;
    /* border: 3px solid red; */
  }

  article {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  h3 {
    padding: 1rem 0 0 1rem;
  }

  .document p {
    padding: 1rem;
  }

  a {
    text-decoration: none;
  }

  .documents-container {
    color: var(--c-pink);
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .document {
    border-radius: 5px;
    background-color: white;
    transition: 0.2s;
  }

  .document:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .text-container p {
    width: 76%;
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
    width: 100%;
    margin: 8rem;
    margin-top: 10rem;
  }

  .text-container p {
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

    div {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }
    
    .documents-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
