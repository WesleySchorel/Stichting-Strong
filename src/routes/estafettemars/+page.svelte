<script>
  export let data;
</script>

<section>
  <article>
    <h1>Uitgelicht:</h1>
    <div class="projects-container">
      {#each data.estafettemars as conferentie}
        <a href="/projects/{conferentie.uid}">
          <div class="project">
            <h2>{conferentie.data.title}</h2>
            <p>{conferentie.data.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </article>
</section>

