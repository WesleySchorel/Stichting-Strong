<script>
  import jaarverslag_2022 from "$lib/jaarverslagen/jaarverslag_2022.pdf";
  import jaarverslag_2019 from "$lib/jaarverslagen/jaarverslag_2019.pdf";
  import jaarverslag_2018 from "$lib/jaarverslagen/jaarverslag_2018.pdf";
  import jaarverslag_2017 from "$lib/jaarverslagen/jaarverslag_2017.pdf";

  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Jaarverslagen</h2>
  </section>
</div>

<div class="container">
  <div class="list-container">
    <ul>
      <li>
        <a href={jaarverslag_2022}>financieel-verslag-2022-stichting-sterk</a>
      </li>
      <li>
        <a href={jaarverslag_2019}>financieel-verslag-2019-stichting-sterk</a>
      </li>
      <li>
        <a href={jaarverslag_2018}>financieel-verslag-2018-stichting-sterk</a>
      </li>
      <li>
        <a href={jaarverslag_2017}>financieel-verslag-2017-stichting-sterk</a>
      </li>
    </ul>
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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text-container";
    margin: 0rem 8rem 8rem 8rem;
    width: 76%;
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

    .container {
      margin: 0 2rem 1rem 2rem;
      width: 85%;
    }

    .list-container li {
      font-size: 18px;
    }

    .list-container ul {
      margin-top: -2rem;
      margin-bottom: 6rem;
    }
  }
</style>
