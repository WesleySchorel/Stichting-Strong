<script>
  import Header from "$lib/components/header.svelte";

  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <Header />
    <h1>Over de stichting</h1>
    <h2>Comité van aanbeveling</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span>Over het comité van aanbeveling:</span><br />
      Stichting Strong heeft een comité van aanbeveling om prominente en invloedrijke
      personen te betrekken bij haar missie. Het comité fungeert als een belangrijk netwerk van
      steun en draagt bij aan het versterken van het maatschappelijk draagvlak voor
      de initiatieven van Stichting Strong.
    </p>
    <div class="list-container">
      <p>
        <span>Lijst comité van aanbeveling:</span>
      </p>
      <ul>
        <li>Anne Haak; Vertrouwensarts, docent huisartsenopleiding en kinderartsen.</li>
        <li>Lodewijk Asscher; Oud minister van Sociale Zaken en Werkgelegenheid en vicepremier.</li>
        <li>Frans Mom; Consultant AIDS and Sexual Rights, Amsterdam.</li>
        <li>Dr. E.M. van de Putte; Kinderarts, initiator/projectvoerder signalering kindermishandeling Wilhelmina Kinder Ziekenhuis/UMC.</li>
        <li>Drs. Ingrid van Russel; Kinderarts, voorzitter werkgroep kindermishandeling, Wilhelmina Kinderziekenhuis/UMC.</li>
        <li>Ben Rensen; Jeugdarts, docent /HAOIO/Cb artsen en publicist kindermishandeling.</li>
        <li>André Rouvoet; Oud minister van Jeugd en Gezin.</li>
        <li>Jolande Schoonenberg; Vertrouwensarts Advies en Meldpunt Kindermishandeling Bureau Jeugdzorg Amsterdam.</li>
        <li>Joost Schrickx; Filmmaker en scenarioschrijver.</li>
        <li>Rian Teeuw; Kinderarts Emma Kinderziekenhuis-AMC, voorzitter Team Kindermishandeling AMC Cuno.</li>
        <li>Jaap E. Doek; Voormalig voorzitter van het Internationaal Comité voor de rechten van het kind van de Verenigde Naties.</li>
        <li>Mw. M.L. van Kleef; Algemeen Directeur, Raad voor de Kinderbescherming Landelijk Bureau Utrecht.</li>
        <li>Wynie van den Berg; Gezondheidszorgpsychologe, psychosociale afd. Emma Kinder-ziekenhuis.</li>
        <li>Jacques Vriens; Kinderboekenschrijver van o.a. ‘Groep zeven slaat terug’.</li>
        <li>S.P.M. Uiterwaal; MD, PhD Associate Professor of clinical epidemiology Jules Center for Health Sciences and Primary Care University Medical Center.</li>
        <li>Prof.dr. J.C.M. Willems; Bijz. hoogleraar Rechten van het kind, Vrije Universiteit Amsterdam.</li>
      </ul>      
    </div>
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
    margin-top: 1rem;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text-container";
    margin: 0rem 8rem 8rem 8rem;
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
