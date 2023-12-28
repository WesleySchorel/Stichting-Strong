<script>
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import global from "../global.css";
</script>

<Header />
<slot />
<Footer />

<!-- <footer>
    &#169; 2008 - {new Date().getFullYear()} Stichting STRONG &#183; All Rights Reserved
</footer> -->
