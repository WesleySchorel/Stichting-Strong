<script>
  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Team STRONG</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span>Over de mensen achter de stichting:</span><br />
      Om de doelen van STRONG efficiënt en effectief te kunnen bewerkstelligen, zijn
      er vele mensen actief. Vrijwilligers, studenten en stagiaires helpen met veel
      verschillende onderdelen van het werk om de doelen te halen. Om dit allemaal
      in goede banen te leiden, is er een bestuur gekozen, die sterke affiniteit
      heeft met het onderwerp en inhoudelijk, dan wel procedureel waarde toevoegt.
    </p>
  </div>
</div>

<div class="list-container">
  <p>
    <span>Ons team:</span>
  </p>
  <ul>
    <li>
      <b>Sjieka van Rooijen</b>
      <p>Initiatiefnemer en voorzitter</p>
      <br />
      <p>
        <a href="mailto:sjiekavanrooijen@stichtingstrong.nl">Stuur een mail →</a
        >
      </p>
    </li>
    <li>
      <b>Hannah Freud</b>
      <p>Bestuurslid</p>
      <br />
    </li>
    <li>
      <b>Leo Dijkman</b>
      <p>Bestuur ondersteuner/adviseur</p>
      <br />
    </li>
    <li>
      <b>Pauline Hoogland</b>
      <p>Ontwikkelaar Strong Education</p>
      <br />
      <p>
        <a href="mailto:paulinehoogland@stichtingstrong.nl">Stuur een mail →</a>
      </p>
    </li>
    <li>
      <b>Wesley Schorel</b>
      <p>Frontend Developer</p>
      <br />
      <p><a href="mailto:wesleyschorel@gmail.com">Stuur een mail →</a></p>
    </li>
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
    }
  }
</style>
