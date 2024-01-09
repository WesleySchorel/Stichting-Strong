<script>
  /** @type {import("@prismicio/client").Content.BannerSlice} */
  export let slice;
</script>

<div>
  <section>
    <div class="banner-container">
      <div class="text">
        <h2>{slice.primary.title}</h2>
        <p>{slice.primary.text}</p>
        <a href="/estafettemars">Recente conferenties →</a>
      </div>
      <div class="media">
        <img src={slice.primary.image.url} alt={slice.primary.title} />
      </div>
    </div>
  </section>
</div>

<style>
  section {
    background-color: var(--banner-bg);
    padding: 4rem;
    margin: 8rem;
    margin-top: 12rem;
    border-radius: 10px;
    box-shadow: 10px 10px 15px -15px rgba(0,0,0,0.75);
  }

  .banner-container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "text media";
  }

  .text {
    grid-area: text;
  }

  p {
    margin: 1rem 0 1rem 0;
  }

  .media {
    grid-area: media;
  }

  img {
    width: 24rem;
    height: 26rem;
    object-fit: cover;
    margin-top: -8rem;
    margin-right: -2rem;
    margin-bottom: -2rem;
    border: 0.5rem solid var(--img-border);
    border-radius: 10px;
  }

  @media screen and (max-width: 961px) {
    section {
      background-color: var(--banner-bg);
      padding: 2rem;
      margin: 2rem;
      margin-bottom: 4rem;
      margin-top: 10rem;
      border-radius: 10px;
    }

    .banner-container {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1.6fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "text"
        "media";

    }

    h2, p {
      width: 76%;
    }

    img {
      width: 18rem;
      height: 18rem;
      object-fit: cover;
      margin: 0;
      margin-top: 1rem;
      border: 0;
      border-radius: 10px;
    }
  }
</style>
