<script>
  /** @type {import("@prismicio/client").Content.ArticleSlice} */
  export let slice;
</script>

<div class="container">
  <div class="media">
    <img src={slice.primary.img.url} alt={slice.primary.title} />
  </div>
  <div class="text">
    <h2>{slice.primary.title}</h2>
    <p>{@html slice.primary.text}</p>
  </div>
</div>

<style>
  h2 {
    margin-bottom: 1rem;
    width: 80%;
  }

  .container {
    padding: 8rem;
    /* border: 3px solid red; */
  }

  img {
    width: 38rem;
    height: 24rem;
    object-fit: cover;
    border-radius: 10px;
  }

  .container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1.6fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "media text";
  }

  .media {
    grid-area: media;
  }

  .text {
    grid-area: text;
    padding-left: 1.5rem;
    width: 95%;
  }

  @media screen and (max-width: 961px) {
    .container {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }

    .container {
      display: grid;
      grid-template-columns: 1.2fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        "text"
        "media";
      padding-bottom: 0rem;
    }

    img {
      width: 100%;
      height: 18rem;
      object-fit: cover;
      border-radius: 10px;
    }

    .text {
      grid-area: text;
    }

    .media {
      grid-area: media;
      padding: 1rem 1.5rem 0rem 1.5rem;
    }
  }
</style>
