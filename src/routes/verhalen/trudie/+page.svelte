<script>
    // export let data;
    import trudie from "$lib/assets/trudie.jpg";
  </script>
  
  <div class="grid">
    <section class="text-container">
      <h1>Over de stichting</h1>
      <h2>Trudie’s verhaal</h2>
    </section>
  </div>
  
  <div class="container">
    <div class="primary-text-container">
      <p>
        <img src={trudie} alt="Foto van Trudie">
        <br>
        Kinderrechten lijken doodgewoon maar zijn heel bijzonder. Vanuit mijn actieve rol binnen Amnesty
        International Haarlemmermeer is het logisch om te gaan samenwerken met de STRONG
        Kinderrechtenconferentie. Opkomen voor de (bedreigde) rechten van volwassenen en kinderen lijkt
        in mijn DNA te zitten. Als docent en onderwijskundige vind ik het belangrijk dat ieder kind een ‘open’
        toekomst heeft met gelijke kansen voor onderwijs en veilig en gezond opgroeien. Opkomen voor
        (kwetsbare) kinderen is een taak van ons allemaal, waarbij we ons verbinden met elkaar en het
        grotere geheel omdat we samen echt veel meer kunnen dan alleen. Dit Ubuntu-principe (=ik ben
        
        omdat wij zijn) zie ik ook terug bij STRONG. STRONG komt samen met studenten op voor de rechten
        van kinderen. Supporting The Rights Of New Generations, yeah!
        <br><br>
        Neem contact op met Trudie: <a href="mailto:trudiegroen@stichtingstrong.nl">trudiegroen@stichtingstrong.nl</a>
      </p>
    </div>
  </div>
  
  <div class="list-container">
    <p>
      <span>Verhalen:</span>
      <br>
      Lees de andere verhalen van de mensen achter de projecten en initiatieven van STRONG.
    </p>
    <ul>
        <a href="/verhalen/sjieka">
            <li>
              <b>Sjieka van Rooijen</b>
              <p>Initiatiefnemer en voorzitter</p>
              <br />
              <p>Het verhaal van Sjieka →</p>
            </li>
          </a>
          <a href="/verhalen/pauline">
            <li>
              <b>Pauline Hoogland</b>
              <p>Ontwikkelaar Strong Education</p>
              <br />
              <p>
                Het verhaal van Pauline →
              </p>
            </li>
          </a>
          <a href="/verhalen/trudie">
            <li>
              <b>Trudie Groen</b>
              <p>Onderwijskundige</p>
              <br>
              <p>
                Het verhaal van Trudie →
              </p>
            </li>
          </a>
          <a href="/verhalen/wesley">
            <li>
              <b>Wesley Schorel</b>
              <p>Frontend designer & developer</p>
              <br>
              <p>
                Het verhaal van Wesley →
              </p>
            </li>
          </a>
    </ul>
  </div>
  
  <style>
    .list-container {
      margin-top: 2rem;
      font-size: 22px;
      width: 83%;
      margin: 0 auto;
      margin-bottom: 8rem;
    }
  
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 1rem;
    }
  
    .list-container li {
      list-style-position: inside;
      list-style: none;
      padding: 2rem;
      background-color: var(--banner-bg);
      border-radius: 10px;
    }
  
    .container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "text-container";
      margin: 0rem 8rem 6rem 8rem;
      width: 70%;
    }
  
    .primary-text-container {
      grid-area: text-container;
      width: 95%;
      margin-top: 1rem;
    }
  
    span {
      color: rgb(0, 130, 200);
      font-weight: 700;
      margin-bottom: 2rem;
    }
  
    h2 {
      margin: 4rem 0rem 0rem 0rem;
      color: rgb(0, 130, 200);
      width: 76%;
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
      margin: 8rem 8rem 0rem 8rem;
      margin-top: 10rem;
    }

    img {
        height: 16rem;
        width: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    a:hover {
    transform: translateY(-6px);
    opacity: 0.65;
    transition: 0.2s;
    cursor: pointer;
  }
  
    @media screen and (max-width: 961px) {
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
        margin: 2rem 2rem 0rem 2rem;
        width: 70%;
      }
  
      h2 {
        margin-top: 1rem;
      }
  
      span {
        margin: 1rem 0rem 1rem 0rem;
      }
  
      .container {
        margin: 0 2rem 1rem 2rem;
        width: 85%;
      }
  
      .list-container li {
        font-size: 18px;
      }
  
      ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
        margin-top: 1rem;
        margin-right: 0.5rem;
      }
    }
  </style>
  