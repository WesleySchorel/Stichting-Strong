<script>
  /** @type {import("@prismicio/client").Content.BannerSlice} */
  export let slice;
</script>

<div>
  <section>
    <h2>{slice.primary.title}</h2>
    <p>{slice.primary.text}</p>
    <img src={slice.primary.image.url} alt={slice.primary.title} />
  </section>
</div>

<style>
  div {
    padding: 8rem;
    /* border: 3px solid red; */
  }

  section {
    background-color: rgb(180, 230, 255);
    padding: 4rem;
    border-radius: 10px;
  }

  img {
    width: 10%;
  }

  @media screen and (max-width: 480px) {
    div {
      padding: 4rem 1.5rem 4rem 1.5rem;
    }

    section {
      padding: 1rem;
    }
  }
</style>
