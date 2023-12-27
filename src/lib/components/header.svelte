<script>
import { page } from "$app/stores";
</script>

<nav>
    <ul>
        <li><a href="/" class:active={$page.url.pathname === "/"}>Home</a></li>
        <li class="dropdown">
            <p>Projecten</p>
            <ul class="dropdown-menu">
                <li><a href="/estafettemars">Estafettemars</a></li>
                <li><a href="/workshops">Workshops</a></li>
                <!-- <li><a href="/meldkaart">Meldkaart</a></li> -->
            </ul>
        </li>
        <li><a href="/education" class:active={$page.url.pathname === "/education"}>Education</a></li>
        <li><a href="/nieuws" class:active={$page.url.pathname === "/nieuws"}>Nieuws</a></li>
        <li><a href="/over-ons" class:active={$page.url.pathname === "/over-ons"}>Over de stichting</a></li>
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

    p {
        color: var(--text);
        font-size: 1.2rem;
    }

    p:hover {
        cursor: pointer;
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

    .dropdown-menu {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
        padding: 2rem;
        margin-top: 1.4rem;
        animation: slideIn 0.3s ease-out;
    }

    .dropdown-menu li {
        margin: 5px 0 5px 0; 
    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 480px) {
        nav {
            display: none;
        }
    }
</style>
