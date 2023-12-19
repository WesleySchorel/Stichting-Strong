<script>
import { page } from "$app/stores";
</script>

<nav>
    <ul>
     <li><a href="/" class:active={$page.url.pathname === "/"}>Home</a></li>
        <li><a href="/estafettemars" class:active={$page.url.pathname === "/estafettemars"}>Estafettemars</a></li>
        <!-- <li><a href="/workshops" class:active={$page.url.pathname === "/workshops"}>Workshops</a></li> -->
        <!-- <li><a href="/education" class:active={$page.url.pathname === "/education"}>Education</a></li> -->
        <li><a href="/nieuws" class:active={$page.url.pathname === "/nieuws"}>Nieuws</a></li>
        <!-- <li><a href="/over-ons" class:active={$page.url.pathname === "/over-ons"}>Over ons</a></li> -->
        <!-- <li><a href="/over-strong" class:active={$page.url.pathname === "/over-strong"}>Meer \/</a></li> -->
    </ul>
</nav>

<style>
    ul {
        display: flex;
        position: absolute;
        top: 0;
        margin-top: 3rem;
    }

    ul a {
        color: var(--text);
        font-size: 1.2rem;
    }

    ul a:hover {
        opacity: 0.5;
        transition: 0.2s;
        
    }

    li {
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
        color: var(--c-nav-link);
    }

    li .active {
        color: var(--link);
    }

    @media screen and (max-width: 480px) {
        nav {
            display: none;
        }
    }
</style>
