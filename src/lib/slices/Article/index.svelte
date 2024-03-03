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
    <span>Darryl Amankwah - reporter, spreker &amp; schrijver maakt zich STRONG voor Kinderrechten. Lees hier
      zijn geschreven oproep tot solidariteit in de strijd voor gelijkheid (art. 2 IVRK).</span>
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
    width: 32rem;
    height: 32rem;
    object-fit: cover;
    border-radius: 100%;
    border: 1rem solid #c1eafe;
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

  p {
    margin-top: 1rem;
  }

  .text {
    grid-area: text;
    padding-left: 1.5rem;
    width: 95%;
  }

  span {
    font-size: 1rem;
  }

  @media screen and (max-width: 961px) {
    .container {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }

    .container {
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "text"
    "media"; 
    margin-bottom: -85rem;
}

    img {
      width: auto;
      height: 16rem;
      object-fit: cover;
      margin-top: 2rem;
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
