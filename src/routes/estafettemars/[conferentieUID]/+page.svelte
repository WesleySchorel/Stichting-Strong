<script>
  export let data;
  import StrongMars2023 from "$lib/assets/STRONG-Mars-2023.mp4";
</script>

<div class="grid">
  <section class="text-container">
    <h1>Kinderrechtenconferentie en Kinderrechtenmars</h1>
    <h2>{data.conferentie.data.title}</h2>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span
        >De Kinderrechten conferentie en Kinderrechtenmars van {data.conferentie
          .data.date}:</span
      ><br />
      {data.conferentie.data.text1}
    </p>
  </div>
</div>

<section class="secondary-bg">
  <h2>Foto's en Video's</h2>
  <article>
    <div class="conferenties-container">
      <img
        loading="lazy"
        src={data.conferentie.data.image.url}
        alt={data.conferentie.data.title}
      />
      <img
        loading="lazy"
        src={data.conferentie.data.grid2.url}
        alt={data.conferentie.data.title}
      />
      <img
        loading="lazy"
        src={data.conferentie.data.grid3.url}
        alt={data.conferentie.data.title}
      />
      <img
        loading="lazy"
        src={data.conferentie.data.grid4.url}
        alt={data.conferentie.data.title}
      />
      <img
        loading="lazy"
        src={data.conferentie.data.grid5.url}
        alt={data.conferentie.data.title}
      />
      <img
        loading="lazy"
        src={data.conferentie.data.grid6.url}
        alt={data.conferentie.data.title}
      />
    </div>
    <video playsinline autoplay muted loop>
      <source src={StrongMars2023} type="video/mp4" />
    </video>
  </article>
</section>

<!-- <div class="container">
  <div class="primary-text-container">
    <h2>MEER OVER {data.conferentie.data.title}</h2>
    <p>
      <span>Meer over de estafettemars van {data.conferentie.data.date}:</span
      ><br />
      {data.conferentie.data.text2}
    </p>
  </div>
</div> -->

<style>
  .secondary-bg {
    background-color: var(--secondary-bg);
    padding: 6rem;
    /* border: 3px solid red; */
  }

  .secondary-bg h2 {
    color: var(--text);
    margin-top: 0;
    margin-bottom: 2rem;
  }

  h2 {
    display: flex;
    justify-content: left;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    margin-top: 1rem;
  }

  img {
    height: 16rem;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    mask-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 100%),
      rgba(0, 0, 0, 0) 0%;
    box-shadow: 10px 10px 15px -15px rgba(0, 0, 0, 0.75);
  }

  video {
    height: 36rem;
    width: 100%;
    padding: 3rem;
  }

  .conferenties-container {
    color: var(--c-pink);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
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
    .secondary-bg h2 {
      margin-top: 2rem;
    }

    .text-container h2 {
      margin-top: 1rem;
      margin-bottom: -3rem;
    }

    .primary-text-container {
      width: 95%;
      margin-bottom: 4rem;
    }

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
    }

    .container {
      margin: 2rem;
      width: 85%;
    }

    .conferenties-container {
      color: var(--c-pink);
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .secondary-bg {
      background-color: var(--secondary-bg);
      padding: 2rem;
      /* border: 3px solid red; */
    }

    h1 {
      font-size: 1.5rem;
    }

    video {
      padding: 0rem;
      margin-top: -12rem;
      margin-bottom: -8rem;
    }
  }
</style>
