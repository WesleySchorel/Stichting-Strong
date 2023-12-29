<script>
  import anbi from "$lib/assets/anbi-logo.svg";
  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Doelstelling en ANBI status</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span>De Stichting heeft ten doel:</span><br />
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

    <div class="list-container">
      <p>
        <span>De stichting tracht dit doel onder meer te bereiken door:</span>
      </p>
      <ul>
        <li>Kinderen en Jongeren te bereiken via de scholen.</li>
        <li>
          Het organiseren van de STRONG Kinderrechtenconferentie (Supporting The
          Rights Of New Generations) voor en door jongeren.
        </li>
        <li>Debat manifestatie.</li>
        <li>Kinderrechten-mars-manifestatie.</li>
        <li>
          STRONG Kinderrechten educatie. Peer tot peer education.
          Voorlichting/presentaties aan opvoeders, instanties in de wijk, en
          personen die (beroepsmatig) met kinderen te maken hebben.
        </li>
      </ul>
    </div>

    <div class="list-container">
      <p>
        <span>Stichting Estafettemars voor de Rechten van het Kind (STERK)</span><br />
      </p>
      <ul>
        <li>Kramatweg 14F, 1095JN Amsterdam</li>
        <li>Mobiel: 0626466912</li>
        <li>Email: info@stichtingstrong.nl</li>
        <li>RSIN: 8185.60.216</li>
      </ul>
    </div>

    <img src={anbi} alt="Logo Algemeen Nut Beogende Instelling (ANBI)" />
  </div>
</div>

<style>
  .list-container {
    margin-top: 2rem;
    font-size: 22px;
  }

  .list-container li {
    list-style-position: inside;
    list-style-type: "◆ ";
    margin-top: 0.5rem;
  }

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

  img {
    width: auto;
    height: 8em;
    margin: 2rem 0rem 0rem 0rem;
    border-radius: 5px;
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

  @media screen and (max-width: 961px) {
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
      margin: 2rem 2rem 0rem 2rem;
      width: 70%;
    }

    h2 {
      margin-top: 1rem;
    }

    span {
      margin: 1rem 0rem 1rem 0rem;
    }

    .container {
      margin: 0 2rem 1rem 2rem;
      width: 85%;
    }

    .list-container li {
      font-size: 18px;
    }

    img {
      width: auto;
      height: 12rem;
      margin: 2rem 0rem 2rem 0rem;
      border-radius: 5px;
    }
  }
</style>
