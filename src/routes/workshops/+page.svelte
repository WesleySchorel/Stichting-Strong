<script>
    import Header from "$lib/components/header.svelte";

    // export let data;
</script>

<div class="grid">
    <section class="text-container">
      <Header />
      <h1><span>Workhops</span></h1>
      <p>
        In ons scholenproject STRONG wordt jaarlijks voor en door studenten een
        conferentie, debat en protestmars georganiseerd.
      </p>
    </section>
  </div>

  <style>
    p {
      margin-top: 1rem;
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