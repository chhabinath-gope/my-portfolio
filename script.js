"use strict";


/* ===============================
   PORTFOLIO V2.0 JAVASCRIPT
   Lightweight & Dependency-Free
================================ */


/* ===============================
   DOM READY
================================ */

document.addEventListener("DOMContentLoaded", () => {

    const navigationLinks =
        document.querySelectorAll(".navbar nav a");

    const sections =
        document.querySelectorAll("main section[id]");

    const interactiveCards =
        document.querySelectorAll(
            ".skill-card, .project-card, .experience-card, .stat-card"
        );


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

            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
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
       SCROLL EVENT
    ================================= */

    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(() => {

                    updateActiveNavigation();

                    ticking = false;

                });

                ticking = true;

            }

        },
        { passive: true }
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


                target.scrollIntoView({
                    behavior:
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth"
                });


                history.replaceState(
                    null,
                    "",
                    targetId
                );

            }
        );

    });


    /* ===============================
       SCROLL REVEAL
    ================================= */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        "IntersectionObserver" in window &&
        !prefersReducedMotion
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        interactiveCards.forEach((card) => {

            card.classList.add(
                "reveal"
            );


            revealObserver.observe(
                card
            );

        });

    }


    /* ===============================
       INITIAL STATE
    ================================= */

    updateActiveNavigation();

});
