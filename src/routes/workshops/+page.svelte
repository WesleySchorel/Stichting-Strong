<script>
  export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1><span>Workshops</span></h1>
    <p>
      STRONG biedt diverse workshops over kinderrechten. Deze workshops worden
      verzorgd door Sjieka van Rooijen, initiatiefnemer van STRONG en beeldend
      kunstenaar.
    </p>
  </section>
</div>

<section class="secondary-bg">
  <h2>Uitgelicht:</h2>
  <article>
    <div class="workshops-container">
      {#each data.workshops as workshop}
        <a href="/workshops/{workshop.uid}">
          <div class="workshop">
            <img src={workshop.data.image.url} alt={workshop.data.title} />
            <section class="date">
              <span>{workshop.data.date}</span>
              <h3>{workshop.data.title}</h3>
            </section>
          </div>
        </a>
      {/each}
    </div>
  </article>
</section>

<style>
  .secondary-bg {
    background-color: var(--secondary-bg);
    padding: 6rem;
    /* border: 3px solid red; */
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

  a {
    text-decoration: none;
  }

  img {
    height: 26rem;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    mask-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 100%),
      rgba(0, 0, 0, 0) 0%;
      box-shadow: 10px 10px 15px -15px rgba(0,0,0,0.75);
  }

  .date {
    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;
    color: white;
  }

  .workshops-container {
    color: var(--c-pink);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .workshop {
    position: relative;
    transition: 0.2s;
  }

  .workshop:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
  }

  div.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    width: 76%;
    margin: 8rem;
    margin-top: 10rem;
  }

  p {
    margin-top: 1rem;
  }

  a {
    margin-top: 1rem;
  }

  @media screen and (max-width: 961px) {
    .workshops-container {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 2rem;
    }

    h2 {
      margin-top: 2rem;
    }

    .secondary-bg {
      background-color: var(--secondary-bg);
      padding: 2rem;
      /* border: 3px solid red; */
    }

    img {
      height: 12rem;
      width: 100%;
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
      margin-bottom: 3rem;
    }
  }
</style>
