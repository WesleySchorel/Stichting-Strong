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
      Supporting The Rights Of New Generations (STONG) levert sinds 2008 een
      bijdrage aan de rechten van kinderen door samen met jongeren aandacht te
      vragen voor dit onderwerp.
    </p>
  </section>
</div>

<section class="stichting-info-container">
  <h2>Belangerijke documenten</h2>
  <article>
    <div class="documents-container">
<a href="/over-ons/doelstelling-en-anbistatus">
  <div class="document">
    <h3>Doelstelling en ANBI status</h3>
    <p>hoi</p>
  </div>
</a>
<a href="/over-ons/jaarverslagen">
  <div class="document">
    <h3>Jaarverslagen</h3>
    <p>hoi</p>
  </div>
</a>
<a href="/over-ons/comité-van-aanbeveling">
  <div class="document">
    <h3>Comité van aanbeveling</h3>
    <p>hoi</p>
  </div>
</a>
<a href="/over-ons/team-strong">
  <div class="document">
    <h3>Team STRONG</h3>
    <p>hoi</p>
  </div>
</a>
<a href="/over-ons/partners-strong">
  <div class="document">
    <h3>Partners STRONG</h3>
    <p>hoi</p>
  </div>
</a>
<a href="/over-ons/rechten-van-het-kind">
  <div class="document">
    <h3>Rechten van het kind</h3>
    <p>hoi</p>
  </div>
</a>
    </div>
  </article>
</section>

<!-- <div class="belangerijke-info">
  <h2>ANBI STATUS</h2>
  <hr />
  <p>De Stichting heeft ten doel:
    Alle kinderen en jongeren bekend en bewust te maken met het bestaan van hun rechten conform
    het IVRK (Internationale Verdrag Inzake de Rechten van het Kind) Waarom deze in het leven zijn
    geroepen? Waarom ze belangrijk zijn. Hoe je deze rechten actief kunt maken en betekenis kunt
    geven, zowel voor jezelf, als ook voor de medemensen om je heen. Versus het stoppen en
    voorkomen van het verwaarlozen, mishandelen en doden van kinderen. Conform Art.19: Recht op
    bescherming tegen alle vormen van geweld welke is ingebed binnen de 54 artikelen van het
    Internationale Kinderrechtenverdrag. www.kinderrechten.nl En al wat met een en ander rechtstreeks
    of zijdelings verband houdt of daartoe bevorderlijk kan zijn, alles in de ruimste zin des woord.</p>
</div> -->

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
    padding: 0.1rem 0 1rem 1rem;
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

  @media screen and (max-width: 480px) {
    .documents-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }





  h2 {
    margin-bottom: 1rem;
  }

  /* .belangerijke-info {
    padding: 8rem;
    border: 3px solid red;
  }

  hr {
    padding: 0.1rem;
    background-color: var(--hr);
    margin-bottom: 1rem;
  } */

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
  }
</style>
