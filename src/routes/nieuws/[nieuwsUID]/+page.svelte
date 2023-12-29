<script>
  export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Nieuws</h1>
    <h2>{data.nieuws.data.title}</h2>
    <span
      >{data.nieuws.data.date} · {data.nieuws.data.read_time} min leestijd</span
    >
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>{@html data.nieuws.data.text}</p>
    <img src={data.nieuws.data.image.url} alt={data.nieuws.data.title} />
  </div>
</div>

<style>
  .container {
    margin: 0rem 8rem 8rem 8rem;
    width: 76%;
  }

  .primary-text-container {
    width: 95%;
  }

  h2 {
    margin: 4rem 0rem 0rem 0rem;
    color: rgb(0, 130, 200);
    width: 76%;
  }

  span {
    margin: 1rem 0rem 2rem 0rem;
    font-size: 1.2rem;
    color: rgb(0, 130, 200);
  }

  img {
    width: auto;
    height: 22rem;
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
    }

    .container {
      margin: 0rem 0rem 0rem 2rem;
      width: 76%;
    }

    .primary-text-container {
      width: 95%;
    }

    h2 {
      margin-top: 1rem;
    }

    span {
      margin: 1rem 0rem 1rem 0rem;
    }

    img {
      width: auto;
      height: 12rem;
      margin: 2rem 0rem 3rem 0rem;
      border-radius: 5px;
    }
  }
</style>
