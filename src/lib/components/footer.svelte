<script>
    import { page } from "$app/stores";
    import logo from "$lib/assets/logo.webp";
</script>

<section>
    <h2>Laat van je horen!</h2>
    <p>Vragen over STRONG en onze projecten?</p>
    <a class="button" href="mailto:info@stichtingstrong.nl"
        >Neem contact met ons op.</a
    >
</section>

<footer>
    <div>
        <img src={logo} alt="Logo stichting strong" />
    </div>
    <div>
        <p><b>Snelle navigatie</b></p>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/estafettemars">Kinderrechtenconferentie<br>en Kinderrechtenmars</a></li>
            <li><a href="/workshops">Kinderrechten in Beeld</a></li>
            <li><a href="/meldkaart">Meldkaart</a></li>
            <li><a href="/education">Academie</a></li>
            <li><a href="/nieuws">Nieuws</a></li>
            <li><a href="/archief">Archief</a></li>
            <li><a href="/over-ons">Over de stichting</a></li>
        </ul>
    </div>
    <div>
        <p><b>Volg onze socials</b></p>
        <ul>
            <li>
                <a href="https://www.instagram.com/stichting_strong/"
                    >Instagram</a
                >
            </li>
            <li><a href="https://www.facebook.com/STERK.kind">Facebook</a></li>
            <li>
                <a href="https://www.youtube.com/@stichtingstrong">Youtube</a>
            </li>
        </ul>
    </div>
    <div>
        <p><b>Contactgegevens</b></p>
        <ul>
            <li>Kramatweg 14F</li>
            <li>1095JN Amsterdam</li>
            <li style="margin-top: 1.5rem;">Mobiel: 0626466912</li>
            <li>Email: <a href="mailto:info@stichtingstrong.nl">info@stichtingstrong.nl</a></li>
            <li>RSIN: 8185.60.216</li>
            <li style="margin-top: 1.5rem;">&#169; 2008 - {new Date().getFullYear()} Stichting STRONG</li>
        </ul>
    </div>
</footer>

<style>
    section {
        background-color: var(--footer-bg);
        margin: auto;
        text-align: center;
        padding: 4rem 0 4rem 0;
        /* border: 3px solid var(--c-error); */
    }

    .button {
        display: inline-block;
        color: var(--c-button-text);
        background-color: white;
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
        padding: 1rem 2rem 1rem 2rem;
        margin-top: 1rem;
        transition: 0.2s;
    }

    .button:hover {
        transform: translateY(-3px);
        opacity: 0.65;
        transition: 0.2s;
    }

    p {
        margin: 1rem;
    }

    footer {
        padding: 2rem;
        background-color: var(--border);
        opacity: 0.8;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
    }

    li {
        white-space: nowrap;
        list-style-position: inside;
        list-style: none;
        margin-left: 1rem;
        margin-top: 0.5rem;
        font-size: 18px;
    }

    ul {
        margin-bottom: 1rem;
    }

    a {
        color: var(--text);
        font-size: 18px;
    }

    footer a:hover {
        text-decoration: underline;
    }

    img {
        width: auto;
        height: 20rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 961px) {
        footer {
            padding: 2rem;
            background-color: var(--border);
            opacity: 0.7;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            padding: 2rem;
            padding-bottom: 0;
        }

        li {
            width: 80%;
        }
    }
</style>
