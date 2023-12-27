<script>
  import Header from "$lib/components/header.svelte";
  import anbi from "$lib/assets/anbi-logo.svg";

  export let data;
</script>

<div class="grid">
  <section class="text-container">
    <Header />
    <h1>Estafettemars</h1>
    <h2>{data.conferentie.data.title}</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span>De estafettemars van {data.conferentie.data.date}:</span><br />
      Alle kinderen en jongeren bekend en bewust te maken met het bestaan van hun
      rechten conform het IVRK (Internationale Verdrag Inzake de Rechten van het
      Kind) Waarom deze in het leven zijn geroepen? Waarom ze belangrijk zijn. Hoe
      je deze rechten actief kunt maken en betekenis kunt geven, zowel voor jezelf,
      als ook voor de medemensen om je heen. Versus het stoppen en voorkomen van
      het verwaarlozen, mishandelen en doden van kinderen. Conform Art.19: Recht
      op bescherming tegen alle vormen van geweld welke is ingebed binnen de 54 artikelen
      van het Internationale Kinderrechtenverdrag. www.kinderrechten.nl En al wat
      met een en ander rechtstreeks of zijdelings verband houdt of daartoe bevorderlijk
      kan zijn, alles in de ruimste zin des woord.
    </p>
  </div>
</div>



<style>
  .container {
    margin: 0rem 8rem 8rem 8rem;
    width: 70%;
  }

  .primary-text-container {
    width: 95%;
    margin-top: 1rem;
  }

  span {
    color: rgb(0, 130, 200);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  h2 {
    margin: 4rem 0rem 0rem 0rem;
    color: rgb(0, 130, 200);
    width: 76%;
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
    margin: 8rem 8rem 0rem 8rem;
    margin-top: 10rem;
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

    .container {
      margin: 2rem;
      width: 85%;
    }
  }
</style>
