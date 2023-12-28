<script>
  // export let data;
</script>

<div class="grid">
  <section class="text-container">
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
  </div>
</div>

<div class="list-container">
  <p>
    <span>Lijst comité van aanbeveling:</span>
  </p>
  <ul>
    <li><b>Anne Haak</b>;<br> Vertrouwensarts, docent huisartsenopleiding en kinderartsen.</li>
    <li><b>Lodewijk Asscher</b>;<br> Oud minister van Sociale Zaken en Werkgelegenheid en vicepremier.</li>
    <li><b>Frans Mom</b>;<br> Consultant AIDS and Sexual Rights, Amsterdam.</li>
    <li><b>Dr. E.M. van de Putte</b>;<br> Kinderarts, initiator/projectvoerder signalering kindermishandeling Wilhelmina Kinder Ziekenhuis/UMC.</li>
    <li><b>Drs. Ingrid van Russel</b>;<br> Kinderarts, voorzitter werkgroep kindermishandeling, Wilhelmina Kinderziekenhuis/UMC.</li>
    <li><b>Ben Rensen</b>;<br> Jeugdarts, docent /HAOIO/Cb artsen en publicist kindermishandeling.</li>
    <li><b>André Rouvoet</b>;<br> Oud minister van Jeugd en Gezin.</li>
    <li><b>Jolande Schoonenberg</b>;<br> Vertrouwensarts Advies en Meldpunt Kindermishandeling Bureau Jeugdzorg Amsterdam.</li>
    <li><b>Joost Schrickx</b>;<br> Filmmaker en scenarioschrijver.</li>
    <li><b>Rian Teeuw</b>;<br> Kinderarts Emma Kinderziekenhuis-AMC, voorzitter Team Kindermishandeling AMC Cuno.</li>
    <li><b>Jaap E. Doek</b>;<br> Voormalig voorzitter van het Internationaal Comité voor de rechten van het kind van de Verenigde Naties.</li>
    <li><b>Mw. M.L. van Kleef</b>;<br> Algemeen Directeur, Raad voor de Kinderbescherming Landelijk Bureau Utrecht.</li>
    <li><b>Wynie van den Berg</b>;<br> Gezondheidszorgpsychologe, psychosociale afd. Emma Kinder-ziekenhuis.</li>
    <li><b>Jacques Vriens</b>;<br> Kinderboekenschrijver van o.a. ‘Groep zeven slaat terug’.</li>
    <li><b>S.P.M. Uiterwaal</b>;<br> MD, PhD Associate Professor of clinical epidemiology Jules Center for Health Sciences and Primary Care University Medical Center.</li>
    <li><b>Prof.dr. J.C.M. Willems</b>;<br> Bijz. hoogleraar Rechten van het kind, Vrije Universiteit Amsterdam.</li>
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
      margin-right: 1rem;
    }
  }
</style>
