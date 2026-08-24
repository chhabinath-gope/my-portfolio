/* =========================================================
   CHHABINATH GOPE
   DATA SCIENCE PORTFOLIO
   RESPONSIVE MOBILE NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (!menuToggle || !mainNav) {
        return;
    }

    /* =========================
       OPEN / CLOSE MOBILE MENU
       ========================= */

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* =========================
       CLOSE MENU AFTER CLICK
       ========================= */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* =========================
       CLOSE MENU WHEN CLICKING
       OUTSIDE NAVBAR
       ========================= */

    document.addEventListener("click", (event) => {

        const navbar = document.querySelector(".navbar");

        if (!navbar.contains(event.target)) {

            mainNav.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* =========================
       CLOSE MENU ON ESCAPE
       ========================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            mainNav.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* =========================
       CLOSE MENU WHEN SCREEN
       BECOMES DESKTOP SIZE
       ========================= */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {

            mainNav.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});
