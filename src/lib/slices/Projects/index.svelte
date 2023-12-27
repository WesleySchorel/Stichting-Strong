<script>
  /** @type {import("@prismicio/client").Content.ProjectsSlice} */
  export let slice;
</script>

<section>
  <h2>{slice.primary.title}</h2>
  <article>
    <div class="projects-container">
      {#each slice.items as item}
        <a href="{item.project_link}">
          <div class="project">
            <img src={item.project_image.url} alt={item.project_title} />
            <h3>{item.project_title}</h3>
            <p>{item.project_text}</p>
            <p><b>Lees meer →</b></p>
          </div>
        </a>
      {/each}
    </div>
  </article>
</section>

<style>
  section {
    background-color: var(--secondary-bg);
    padding: 6rem 0 8rem 0;
    /* border: 3px solid red; */
  }

  article {
    display: flex;
    justify-content: center;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  h3 {
    padding: 1rem 0 0 1rem;
  }

  p {
    padding: 0.5rem 1rem 1rem 1rem;
  }

  a {
    text-decoration: none;
  }

  img {
    height: 14rem;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .projects-container {
    color: var(--c-pink);
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .project {
    border-radius: 5px;
    background-color: white;
    transition: 0.2s;
    border-radius: 0 0 10px 10px;
  }

  .project:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    .projects-container {
      grid-template-columns: repeat(1, 1fr);
    }

    img {
      height: 12rem;
      width: 100%;
    }
  }
</style>
