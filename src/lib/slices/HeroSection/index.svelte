<script>
  /** @type {import("@prismicio/client").Content.HeroSectionSlice} */
  import Header from '$lib/components/header.svelte';
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
></section>

<div class="container">
  <section class="text">
    <Header />
    <h1><span>{slice.primary.title}</span></h1>
    <p>{slice.primary.text}</p>
    <a href="#/">Over de stichting →</a>
  </section>

  <div class="border">
    <div class="media">
      <img src={slice.primary.image.url} alt="Strong conferentie" />
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text media";
  }

  .text {
    grid-area: text;
    width: 75%;
    margin: 10rem 0 0 8rem;
  }

  p {
    margin-top: 1rem;
  }

  .media {
    display: flex;
    align-items: start;
    justify-content: flex-end;
    overflow: hidden;
    position: absolute;
    border-bottom: 1.5rem solid var(--border);
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%);
  }

  img {
    width: 150%;
    height: auto;
    margin-right: -25%;
  }

  .text a {
    line-height: 4rem;
  }
</style>
