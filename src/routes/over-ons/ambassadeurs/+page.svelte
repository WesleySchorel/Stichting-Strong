<script>
  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Ambassadeurs</h2>
    <p>De ambassadeurs die onze boodschap en missie uitdragen.</p>
  </section>
</div>

<!-- <div class="container">
  <div class="primary-text-container">
    <p>
      <span>Over het comité van aanbeveling:</span><br />
      Stichting Strong heeft een comité van aanbeveling om prominente en invloedrijke
      personen te betrekken bij haar missie. Het comité fungeert als een belangrijk netwerk van
      steun en draagt bij aan het versterken van het maatschappelijk draagvlak voor
      de initiatieven van Stichting Strong.
    </p>
  </div>
</div> -->

<div class="list-container">
  <p>
    <span>Lijst ambassadeurs:</span>
  </p>
  <ul>
    <li><b>Danny Dijkhuizen</b></li>
    <li><b>Jefren Mesa</b></li>
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

  /* .container {
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
  } */

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
    margin: 8rem 8rem 3rem 8rem;
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

    /* .container {
      margin: 0 2rem 1rem 2rem;
      width: 85%;
    } */

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
