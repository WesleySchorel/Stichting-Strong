<script>
    import meldkaart from "$lib/assets/meldkaart.webp";
    // export let data;
</script>

<div class="grid">
    <section class="text-container">
        <h1>Meldkaart</h1>
        <h2>De Meldkaart Rechten van het Kind</h2>
    </section>
</div>

<div class="container">
    <div class="primary-text-container">
        <p>
            <!-- <span>De Stichting heeft ten doel:</span><br /> -->

            De Meldkaart Rechten van het Kind is een compacte kaart op
            creditcardformaat, speciaal ontworpen voor kinderen en jongeren.
            Deze draagt de essentiële rechten van het kind, inclusief
            waardevolle adviezen over hoe te handelen bij vermoedens van
            kindermishandeling. Het doel is empowerment, waardoor jonge
            individuen beter in staat zijn hun rechten te begrijpen en
            beschermen. Deze handige kaart fungeert als een praktische gids en
            herinnert kinderen eraan dat ze een stem hebben en dat er altijd
            ondersteuning beschikbaar is bij mogelijke schendingen van hun
            rechten.
        </p>

        <img src={meldkaart} alt="Strong Meldkaart" />
    </div>
</div>

<style>
    .container {
        margin: 0rem 8rem 8rem 8rem;
        width: 70%;
    }

    .primary-text-container {
        width: 95%;
        margin-top: 1rem;
    }

    /* span {
        color: rgb(0, 130, 200);
        font-weight: 700;
        margin-bottom: 2rem;
    } */

    h2 {
        margin: 4rem 0rem 0rem 0rem;
        color: rgb(0, 130, 200);
        width: 76%;
    }

    img {
        width: auto;
        height: 12em;
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

    @media screen and (max-width: 480px) {
        .text-container h2 {
            margin-top: 1rem;
            margin-bottom: -3rem;
        }

        .primary-text-container {
            width: 95%;
            margin-bottom: 4rem;
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
        }

        .container {
            margin: 2rem;
            width: 85%;
        }

        img {
            width: auto;
            height: 8rem;
            margin: 2rem 0rem 0rem 0rem;
            border-radius: 5px;
        }
    }
</style>
