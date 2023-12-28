<script>
    import { page } from "$app/stores";
</script>
  
  <div>
    <h2>Belangerijke links</h2>
    <hr />
    <ul>
        <li><a href="https://www.annefrank.org">www.annefrank.org</a></li>
        <li><a href="https://www.defenceforchildren.nl">www.defenceforchildren.nl</a></li>
        <li><a href="https://www.kinderrechten.nl">www.kinderrechten.nl</a></li>
        <li><a href="https://www.mensenrechten.nl">www.mensenrechten.nl</a></li>
        <li><a href="https://www.nji.nl">www.nji.nl</a></li>
        <li><a href="https://www.rijksoverheid.nl/contact/contactgids/raad-voor-de-kinderbescherming">www.rijksoverheid.nl/contact/contactgids/raad-voor-de-kinderbescherming</a></li>
        <li><a href="https://www.rijksoverheid.nl/contact/contactgids/veilig-thuis">www.rijksoverheid.nl/contact/contactgids/veilig-thuis</a></li>
        <li><a href="https://www.stichtingpraat.nl">www.stichtingpraat.nl</a></li>
      </ul>
  </div>
  
  <style>
    h2 {
      margin-bottom: 1rem;
    }
  
    div {
      padding: 8rem;
      /* border: 3px solid red; */
    }
  
    hr {
      padding: 0.1rem;
      background-color: var(--hr);
      margin-bottom: 1rem;
    }
  
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.1rem;
      column-gap: 2rem;
    }
  
    li {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
      list-style-position: inside;
      list-style-type: "◆ ";
    }
  
    @media screen and (max-width: 961px) {
      div {
        padding: 4rem 1.5rem 4rem 1.5rem;
      }
  
      ul {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  </style>
  