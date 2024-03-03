<script>
  // export let data;
  import Pauline from "$lib/assets/pauline.jpeg";
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Pauline’s verhaal</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <img src={Pauline} alt="Foto van Pauline" />
      <br />

      Mijn gedrevenheid voor het werken bij Stichting STRONG komt vanuit mijn
      persoonlijke missie “Ieder kind duurzaam veilig tot talentontwikkeling
      laten komen en zo vanuit democratisch wereldburgerschap de plek in de
      ‘Civil Society’ kan innemen.” Dus gewoon jongeren laten weten, voelen en
      ervaren dat zij met al hun talent nodig zijn in de democratische
      samenleving met wie ze zijn, wat ze te brengen hebben, waar zij beginnen
      en waar zij stoppen. Dit zodat ieder kind zich met vertrouwen gezond en
      veilig kan ontwikkelen. De basis hiervoor ligt gewaarborgd in het IVRK en
      de Kinderrechten.
      <br /><br />
      <span>Get up &amp; stand up for your Rights!</span>
      <br />
      Kinderrechten moeten daarvoor beter bekend zijn bij jongeren. Want hoe kom
      je voor je Kinderrechten op als je niet weet wat ze inhouden? Het is aan verantwoordelijke
      volwassenen als opvoeders maar ook binnen het politiek-, juridisch- en sociaalzorgdomein
      de Kinderrechten te monitoren, voor- en naleven en deze te bewaken. De praktijk
      wijst echter uit dat dit helaas nog onvoldoende navolging krijgt. Sterker nog
      Nederland is in 2023 gezakt van de vierde naar de twintigste plek als het aankomt
      op het naleven van de Kinderrechten. Dus is het belangrijk dat jongeren van
      zich kunnen laten horen over hun Kinderrechten en de ruimte krijgen zelf mee
      vorm te geven aan hun leer- en leefomgeving en daarmee hun toekomst!
      <br /><br />
      <span>STRONG Academie – Practice what you Preach!</span>
      <br />
      Voor de educatielijn binnen de Academie van STRONG ontwikkel ik trainingen
      en workshops die jongeren mee vormgeven en op scholen kunnen geven tijdens
      hun stage. Hier werk ik volgens het recht op participatie binnen het onderwijs!
      Daar word ik blij van. Ik blijf mezelf scholen om de STRONG Academie en het
      onderwijs passend te maken aan de kerndoelen van burgerschapsonderwijs waar
      Kinderrechten ook als kapstok kunnen dienen!
      <br /><br />
      <span>Doe mee!</span>
      <br />
      Naast mijn werk bij STRONG doe ik heel leuk werk als (kinder-)osteopaat in
      een praktijk in Amsterdam. In mijn vrije tijd zing ik al jaren met veel plezier
      in een band en ensemble. Waar ik helemaal van uit m’n bol ga is op avontuur
      gaan. Daar is STRONG onderdeel van! En ben ik dus dankbaar dat ik onderdeel
      ben van STRONG! Ga jij mee op avontuur? Je bent van harte welkom!
      <br /><br />
      Neem contact op met Pauline:
      <a href="mailto:paulienhoogland@stichtingstrong.nl"
        >paulinehoogland@stichtingstrong.nl</a
      >
    </p>
  </div>
</div>

<div class="list-container">
  <p>
    <span>Verhalen:</span>
    <br />
    Lees de andere verhalen van de mensen achter de projecten en initiatieven van
    STRONG.
  </p>
  <ul>
    <a href="/verhalen/sjieka">
      <li>
        <b>Sjieka van Rooijen</b>
        <p>Initiatiefnemer en voorzitter</p>
        <br />
        <p>Het verhaal van Sjieka →</p>
      </li>
    </a>
    <a href="/verhalen/pauline">
      <li>
        <b>Pauline Hoogland</b>
        <p>Ontwikkelaar Strong Education</p>
        <br />
        <p>Het verhaal van Pauline →</p>
      </li>
    </a>
    <a href="/verhalen/trudie">
      <li>
        <b>Trudie Groen</b>
        <p>Onderwijskundige</p>
        <br />
        <p>Het verhaal van Trudie →</p>
      </li>
    </a>
    <a href="/verhalen/wesley">
      <li>
        <b>Wesley Schorel</b>
        <p>Frontend designer & developer</p>
        <br />
        <p>Het verhaal van Wesley →</p>
      </li>
    </a>
  </ul>
</div>

<style>
  .list-container {
    margin-top: 2rem;
    font-size: 22px;
    width: 83%;
    margin: 0 auto;
    margin-bottom: 8rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .list-container li {
    list-style-position: inside;
    list-style: none;
    padding: 2rem;
    background-color: var(--banner-bg);
    border-radius: 10px;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text-container";
    margin: 0rem 8rem 6rem 8rem;
    width: 70%;
  }

  .primary-text-container {
    grid-area: text-container;
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

  img {
    height: 16rem;
    width: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  a:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
    cursor: pointer;
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

    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
      margin-top: 1rem;
      margin-right: 0.5rem;
    }
  }
</style>
