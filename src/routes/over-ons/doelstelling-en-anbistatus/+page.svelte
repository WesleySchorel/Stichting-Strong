<script>
  import anbi from "$lib/assets/anbi-logo.svg";
  // export let data;
</script>

<div class="grid">
  <section class="text-container">
    <h1>Over de stichting</h1>
    <h2>Doelstelling en ANBI status</h2>
    <p>Doelstelling van STRONG en hoe zij hun doel bereiken</p>
    <br>
  </section>
</div>

<div class="container">
  <div class="primary-text-container">
    <p>
      <span>Doelstelling STRONG</span><br />
      STRONG wil alle kinderen en jongeren bekend en bewust maken van het bestaan van hun
      Kinderrechten conform het IVRK. Waarom zijn ze in het leven geroepen en zijn ze zo belangrijk? Hoe
      kun je deze rechten actief maken en betekenis geven? Zowel voor jezelf, als ook voor de
      medemensen om je heen, dieren en natuur. Oftewel Moeder Aarde met ‘alles wat erop leeft, groeit en
      bloeit’.
      <br><br>
      Dit alles ter preventie van kansenongelijkheid en het verwaarlozen, mishandelen, misbruiken en
      doden van kinderen, conform Art.19: Recht op bescherming tegen alle vormen van geweld. Een
      gezonde en veilige ontwikkeling is ingebed binnen de 54 artikelen van het Kinderrechtenverdrag. En
      al wat met een en ander rechtstreeks of zijdelings verband houdt of daartoe bevorderlijk kan zijn, in
      de ruimste zin des woord.
      <br><br>
      STRONG biedt jongeren een podium voor hun rechten op te komen en hun stem te versterken. Deze
      vorm van empowering doet STRONG door middel van:
    </p>

    <ul class="doelstelling">
      <li>Kinderen en jongeren te informeren op hun scholen en in de wijk</li>
      <li>Het organiseren van de STRONG Kinderrechtenconferentie voor en door jongeren</li>
      <li>Organiseren van Debat manifestatie voor en door jongeren</li>
      <li>Kinderrechtenmars voor en door jongeren</li>
      <li>STRONG Academie. Peer2Peer education over het IVRK en de Kinderrechten.
        Voorlichting aan jongeren, opvoeders, instanties in de wijk en professionals die
        (beroepsmatig) met kinderen te maken hebben.</li>
    </ul>

    <p>STRONG is onderdeel van Stichting Sterk</p>

    <div class="list-container">
      <p>
        <span>Stichting Estafettemars voor de Rechten van het Kind (STERK)</span><br />
      </p>
      <ul>
        <li>Kramatweg 14F, 1095JN Amsterdam</li>
        <li>Mobiel: 0626466912</li>
        <li>Email: <a href="mailto:info@stichtingstrong.nl">info@stichtingstrong.nl</a></li>
        <li>RSIN: 8185.60.216</li>
      </ul>
    </div>

  </div>
  <img src={anbi} alt="Logo Algemeen Nut Beogende Instelling (ANBI)" />
</div>

<style>
  .list-container {
    margin-top: 4rem;
    font-size: 22px;
  }

  li {
    list-style-position: inside;
    list-style-type: "◆ ";
    margin-top: 0.5rem;
  }

  .doelstelling {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.375rem;
  }

  .container {
    margin: 0rem 8rem 8rem 8rem;
    width: 70%;
  }

  .primary-text-container {
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

  img {
    width: auto;
    height: 8em;
    margin: 2rem 0rem 0rem 0rem;
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
    margin: 8rem 8rem 0rem 8rem;
    margin-top: 10rem;
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

    img {
      width: auto;
      height: 12rem;
      margin: 2rem 0rem 2rem 0rem;
      border-radius: 5px;
    }
  }
</style>
