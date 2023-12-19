<script>
  /** @type {import("@prismicio/client").Content.IntroductionSlice} */
  import Header from "$lib/components/header.svelte";
  export let slice;
</script>

<div class="grid">
  <section class="text-container">
    <Header />
    <h1><span>{slice.primary.title}</span></h1>
    <p>{slice.primary.text}</p>
    <a href="/over-ons">Over de stichting →</a>
  </section>

  <div class="img-container">
    <img src={slice.primary.image.url} alt="Strong kinderrechtenconferentie" />
  </div>
</div>

<style>
  div.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text img";
    margin: auto;
    /* border: 3px solid red; */
  }

  .text-container {
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 76%;
    margin: 8rem;
    margin-top: 10rem;
  }

  .img-container {
    grid-area: img;
    display: flex;

    /* border-bottom: 1.5rem solid var(--border); */
    padding: 1.5rem;
    background-color: var(--border);
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%);
    overflow: hidden;
    margin: -1.5rem -1.5rem 0 0;
  }

  img {
    width: 100%;
    height: auto;
    /* margin-left: -20%; */
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%);
    object-fit: cover;
  }

  p {
    margin-top: 1rem;
  }

  a {
    margin-top: 1rem;
  }

  @media screen and (max-width: 480px) {
    div.grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "text" "img";
    }

    .text-container {
      margin: 1.5rem;
    }

    .img-container {
      margin: 0;
      padding: 0;
      grid-area: img;
      display: flex;

      border-bottom: 1.5rem solid var(--border);
      clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%);
      overflow: hidden;
    }

    img {
      width: 145%;
      height: auto;
      margin-left: -20%;
    }
  }
</style>
