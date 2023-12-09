<script>
  /** @type {import("@prismicio/client").Content.HeroSectionSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  {slice.primary.title}
</section>
