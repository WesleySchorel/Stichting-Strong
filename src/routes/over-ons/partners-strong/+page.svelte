<script>
  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Partners van Stichting STRONG</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span>Over de partners van Stichting Strong:</span><br />
      Stichting Strong werkt graag samen met bedrijven en organisaties die onze doelen
      steunen. We vinden het belangrijk om samen met onze partners doelen te bereiken
      en positieve veranderingen te maken. We waarderen de betrokkenheid van onze
      partners en geloven dat samenwerken de sleutel is tot succes.
    </p>
  </div>
</div>

<div class="list-container">
  <p>
    <span>Onze partners:</span>
  </p>
  <ul>
    <li><b>Gemeentelijk stadsarchief</b></li>
    <li><b>Gemeente Amsterdam</b></li>
    <li><b>HVA</b></li>
    <li><b>NUT Fonds</b></li>
    <li><b>ROC Amsterdam</b></li>
    <li><b>Stichting Praat</b></li>
    <li><b>Vredesfonds</b></li>
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
