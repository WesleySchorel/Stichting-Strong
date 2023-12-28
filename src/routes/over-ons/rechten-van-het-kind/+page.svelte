<script>
  import kinderrechten_verdrag from "$lib/assets/universele-verklaring-van-de-rechten-van-het-kind.pdf";

  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Rechten van het kind</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span>De Stichting heeft ten doel:</span><br />
      Het Verdrag inzake de rechten van het kind is gebaseerd op de Universele verklaring
      van de rechten van de mens. Het wordt meestal het Kinderrechtenverdrag genoemd.
      Het Kinderrechtenverdrag werd op 20 november 1989 aangenomen door de Verenigde
      Naties. Daarom is 20 november benoemd tot internationale kinderrechtendag.
    </p>
    <p class="lees-meer">Lees het verdrag: <a href={kinderrechten_verdrag}>Universele verklaring van de rechten van het kind</a></p>
    
  </div>
</div>

<style>
  .lees-meer {
    margin-top: 1rem;
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
      width: 80%;
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

    .lees-meer {
      margin-bottom: 6rem;
    }
  }
</style>
