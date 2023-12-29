<script>
    import { page } from "$app/stores";
    import hamburger from "$lib/assets/hamburger-menu.svg";
    import cross from "$lib/assets/cross.svg";
    import { onMount } from "svelte";

    let hamburgerImage;
    let crossImage;

    onMount(() => {
        hamburgerImage = document.getElementById("hamburger-image");
        crossImage = document.getElementById("cross-image");
    });

    function toggleImages() {
        hamburgerImage.classList.toggle("hidden");
        crossImage.classList.toggle("hidden");
    }

    function uncheckCheckbox() {
        document.getElementById("menu-toggle").checked = false;
    }

    function handleLinkClick() {
        // Reset to the initial image when a link is clicked
        hamburgerImage.classList.remove("hidden");
        crossImage.classList.add("hidden");

        // Your logic for handling link click goes here
    }

    function handleLinkClickWithCheckbox() {
        handleLinkClick();
        uncheckCheckbox();
    }
</script>

<label for="menu-toggle" on:click={toggleImages}>
    <img id="hamburger-image" src={hamburger} alt="Open menu" />
    <img id="cross-image" src={cross} alt="Close menu" class="hidden" />
</label>
<input type="checkbox" id="menu-toggle" />

<nav>
    <ul>
        <li>
            <a href="/" class:active={$page.url.pathname === "/"} on:click={handleLinkClickWithCheckbox}>Home</a>
        </li>
        <li class="dropdown">
            <p>Projecten</p>
            <ul class="dropdown-menu">
                <li>
                    <a
                        href="/estafettemars"
                        class:active={$page.url.pathname === "/estafettemars"}
                        on:click={handleLinkClickWithCheckbox}>Estafettemars</a
                    >
                </li>
                <li>
                    <a
                        href="/workshops"
                        class:active={$page.url.pathname === "/workshops"}
                        on:click={handleLinkClickWithCheckbox}>Workshops</a
                    >
                </li>
                <li>
                    <a
                        href="/meldkaart"
                        class:active={$page.url.pathname === "/meldkaart"}
                        on:click={handleLinkClickWithCheckbox}>Meldkaart</a
                    >
                </li>
            </ul>
        </li>
        <li>
            <a
                href="/education"
                class:active={$page.url.pathname === "/education"}
                on:click={handleLinkClickWithCheckbox}>Education</a
            >
        </li>
        <li>
            <a
                href="/nieuws"
                class:active={$page.url.pathname === "/nieuws"}
                on:click={handleLinkClickWithCheckbox}>Nieuws</a
            >
        </li>
        <li>
            <a
                href="/over-ons"
                class:active={$page.url.pathname === "/over-ons"}
                on:click={handleLinkClickWithCheckbox}>Over de stichting</a
            >
        </li>
    </ul>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 76%;
        margin: 8rem;
        margin-top: 0rem;
        position: absolute;
    }

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

    label,
    input {
        display: none;
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

    img {
        height: 3rem;
        width: auto;
    }

    @media screen and (max-width: 961px) {
        ul {
            display: block;
            margin-top: 4rem;
        }

        li {
            display: block;
            padding-right: 0;
            padding-top: 0.3rem;
        }

        nav {
            display: none;
            background-color: #eee;
            padding: 2rem;
            height: 100%;
            width: 100%;
            margin: 0;
            animation: slideOut 0.3s ease-out;
            position: fixed;
            top: 0;
            right: 0;
        }

        p {
            display: none;
        }

        .dropdown-menu {
            display: block;
            position: static;
            background-color: rgba(249, 249, 249, 0);
            box-shadow: none;
            z-index: 0;
            padding: 0;
            margin-top: 0;
            animation: none;
        }

        label {
            background-color: #99bee9;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 5px;
            z-index: 1;
            position: fixed;
            top: 2rem;
            right: 2rem;
        }

        input[type="checkbox"] {
            display: none;
        }

        input[type="checkbox"]:checked + nav {
            display: block;
            animation: slideIn 0.3s ease-out;
        }

        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-10px);
            }
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

        .hidden {
            display: none;
        }
    }
</style>
