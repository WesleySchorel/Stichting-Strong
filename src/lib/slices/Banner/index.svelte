<script>
  /** @type {import("@prismicio/client").Content.BannerSlice} */
  export let slice;
</script>

<div>
  <section>
    <h2>{slice.primary.title}</h2>
    <p>{slice.primary.text}</p>
    <img src={slice.primary.image} alt={slice.primary.image} />
  </section>
</div>

<style>
  div {
    border: 3px solid red;
    padding: 8rem;
  }

  section {
    background-color: rgb(180, 230, 255);  
    padding: 4rem;
    border-radius: 10px;
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
