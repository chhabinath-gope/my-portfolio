"use strict";


/* =========================================================
   CHHABINATH GOPE
   PORTFOLIO JAVASCRIPT
   Lightweight • Dependency-Free
   ========================================================= */


/* ===============================
   DOM READY
================================ */

document.addEventListener("DOMContentLoaded", () => {

    const navigationLinks =
        document.querySelectorAll(".navbar nav a");

    const sections =
        document.querySelectorAll("main section[id]");


    /* ===============================
       ACTIVE NAVIGATION
    ================================= */

    const updateActiveNavigation = () => {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 140;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop + section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach((link) => {

            const target =
                link.getAttribute("href");


            const isActive =
                target === `#${currentSection}`;


            link.classList.toggle(
                "active",
                isActive
            );


            if (isActive) {

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            } else {

                link.removeAttribute(
                    "aria-current"
                );

            }

        });

    };


    /* ===============================
       PERFORMANCE-FRIENDLY SCROLL
    ================================= */

    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) {
                return;
            }


            window.requestAnimationFrame(() => {

                updateActiveNavigation();

                ticking = false;

            });


            ticking = true;

        },
        {
            passive: true
        }
    );


    /* ===============================
       SMOOTH NAVIGATION
    ================================= */

    navigationLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                /*
                 Only handle internal
                 section links.
                */

                if (
                    !targetId ||
                    !targetId.startsWith("#")
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const reducedMotion =
                    window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches;


                target.scrollIntoView({

                    behavior:
                        reducedMotion
                            ? "auto"
                            : "smooth",

                    block:
                        "start"

                });


                /*
                 Update URL without
                 reloading the page.
                */

                history.replaceState(
                    null,
                    "",
                    targetId
                );

            }
        );

    });


    /* ===============================
       INITIAL NAVIGATION STATE
    ================================= */

    updateActiveNavigation();

});
