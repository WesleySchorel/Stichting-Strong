<script>
  import Links from "$lib/components/links.svelte";

  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1><span>Over de stichting</span></h1>
    <br><br>
    <p>
      Door STRONG wordt jaarlijks voor en door studenten een
      Kinderrechtenconferentie, -debat en -mars georganiseerd. Studenten
      bezoeken basisscholen en gaan ze de wijk in voor Peer2Peereducatie over de
      Kinderrechten.
      <br><br>
      Zo vormt STRONG een verbindende schakel tussen jongeren, onderwijs en welzijnsorganisaties
      op het gebied van Kinderrechten. Bewustwordingsprocessen over de Kinderrechten
      worden gestimuleerd door awareness, empowerment en agency te laten ervaren
      over de Kinderrechten.
      <br><br>
      Onze activiteiten vallen binnen het kader van het landelijke Rijksoverheid
      programma van VWS &quot;Geweld hoort nergens thuis&quot; en &quot;Ieder Kind
      Geïnformeerd” waarin artikel 19 van het IVRK centraal staat: het Recht op bescherming
      tegen Geweld.
    </p>
  </section>
</div>

<section class="stichting-info-container">
  <h2>Belangrijke documenten</h2>
  <article>
    <div class="documents-container">
      <a href="/over-ons/rechten-van-het-kind">
        <div class="document">
          <h3>Rechten van het kind</h3>
          <p>
            Het Verdrag inzake de Rechten van het Kind, feiten en actuele cijfers.
          </p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/doelstelling-en-anbistatus">
        <div class="document">
          <h3>Doelstelling en ANBI status</h3>
          <p>
            Doelstelling van STRONG en hoe zij hun doel bereiken.
          </p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/jaarverslagen">
        <div class="document">
          <h3>Jaarverslagen</h3>
          <p>Financiële jaarverslagen STRONG.</p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/comité-van-aanbeveling">
        <div class="document">
          <h3>Comité van aanbeveling</h3>
          <p>
            Een samengestelde groep mensen die zich aansluiten bij de missie van STRONG.
          </p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/partners-strong">
        <div class="document">
          <h3>Partners STRONG</h3>
          <p>
            Bedrijven en organisaties die de doelstellingen van STRONG steunen.
          </p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/ambassadeurs">
        <div class="document">
          <h3>Ambassadeurs STRONG</h3>
          <p>
            De ambassadeurs die de boodschap en missie van STRONG uitdragen.
          </p>
          <p><b>Lees meer →</b></p>
        </div>
      </a>
      <a href="/over-ons/team-strong">
        <div class="document">
          <h3>Team STRONG</h3>
          <p>
            De mensen achter de projecten en initiatieven van STRONG.
          </p>
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
    box-shadow: 10px 10px 15px -15px rgba(0, 0, 0, 0.75);
  }

  .document:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
  }

  h2 {
    margin-bottom: 1rem;
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
    width: 100%;
    margin: 8rem;
    margin-top: 10rem;
  }

  .text-container p {
    margin-top: 1rem;
    width: 76%;
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
      margin: 2rem;
      margin-bottom: 3rem;
      width: 80%;
    }

    .text-container p {
      width: 100%;
    }

    .documents-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
