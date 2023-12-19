<script>
    import { page } from "$app/stores";
</script>

<section>
    <h2>Laat van je horen!</h2>
    <p>Vragen over STRONG en onze projecten?</p>
    <a class="button" href="mailto:info@stichtingstrong.nl"
        >Neem contact met ons op.</a
    >
</section>

<style>
    section {
        background-color: var(--footer-bg);
        margin: auto;
        text-align: center;
        padding: 4rem 0 4rem 0;
        /* border: 3px solid var(--c-error); */
    }

    a {
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

    a:hover {
        transform: translateY(-3px);
        opacity: 0.65;
        transition: 0.2s;
    }

    p {
        margin: 1rem;
    }
</style>
