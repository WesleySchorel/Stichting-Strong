<script>
  import Header from "$lib/components/header.svelte";

  export let data;
</script>

<div class="grid">
  <section class="text-container">
    <Header />
    <h1>Nieuws</h1>
  </section>
</div>

<div class="container">
  <div class="nieuws-text-container">
    <h2>{data.nieuws.data.title}</h2>
    <span>{data.nieuws.data.date} · {data.nieuws.data.read_time} min leestijd</span><br><br>
    <p>{@html data.nieuws.data.text}</p>
  </div>
  <div class="media-container">
    <img src={data.nieuws.data.image.url} alt={data.nieuws.data.title} />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "text-container media-container";
    margin: 0rem 8rem 8rem 8rem;
  }

  .nieuws-text-container {
    grid-area: text-container;
    width: 95%;
  }

  .media-container {
    grid-area: media-container;
  }

  p {
    margin-top: 1rem;
  }

  img {
    margin: 1rem;
    width: auto;
    height: 28rem;
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
    margin: 8rem 8rem 4rem 8rem;
    margin-top: 10rem;
  }


  @media screen and (max-width: 480px) {
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
      margin: 1.5rem;
    }
  }
</style>
