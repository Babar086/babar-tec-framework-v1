// =====================================
// Babar TEC Framework V1
// Ultra Premium Professional script.js
// =====================================

(function () {
    "use strict";

    // ===============================
    // 1. ELEMENT SELECTORS (SAFE INIT)
    // ===============================
    const DOM = {
        menuBtn: document.querySelector(".menu-btn"),
        navLinks: document.querySelector(".nav-links"),
        navbar: document.querySelector(".navbar"),
        loader: document.querySelector(".loader"),
        reveal: document.querySelectorAll(".reveal"),
        form: document.querySelector("form")
    };

    // ===============================
    // 2. MOBILE NAVIGATION SYSTEM
    // ===============================
    function initNavigation() {
        if (!DOM.menuBtn || !DOM.navLinks) return;

        DOM.menuBtn.addEventListener("click", () => {
            DOM.navLinks.classList.toggle("active");
            DOM.menuBtn.classList.toggle("open");
        });

        // Close on link click
        DOM.navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                DOM.navLinks.classList.remove("active");
                DOM.menuBtn.classList.remove("open");
            });
        });
    }

    // ===============================
    // 3. STICKY NAVBAR SYSTEM
    // ===============================
    function initStickyNavbar() {
        if (!DOM.navbar) return;

        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                DOM.navbar.classList.add("sticky");
            } else {
                DOM.navbar.classList.remove("sticky");
            }
        });
    }

    // ===============================
    // 4. SMOOTH SCROLL ENGINE
    // ===============================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute("href"));

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });
    }

    // ===============================
    // 5. SCROLL REVEAL ANIMATION ENGINE
    // ===============================
    function initReveal() {
        if (!DOM.reveal.length) return;

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;

            DOM.reveal.forEach(el => {
                const top = el.getBoundingClientRect().top;

                if (top < windowHeight - 120) {
                    el.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // run on load
    }

    // ===============================
    // 6. LOADER SYSTEM (PREMIUM UX)
    // ===============================
    function initLoader() {
        if (!DOM.loader) return;

        window.addEventListener("load", () => {
            DOM.loader.style.transition = "0.5s ease";
            DOM.loader.style.opacity = "0";

            setTimeout(() => {
                DOM.loader.style.display = "none";
            }, 600);
        });
    }

    // ===============================
    // 7. FORM VALIDATION ENGINE
    // ===============================
    function initForm() {
        if (!DOM.form) return;

        DOM.form.addEventListener("submit", (e) => {
            const inputs = DOM.form.querySelectorAll("input, textarea");
            let isValid = true;

            inputs.forEach(input => {
                if (input.hasAttribute("required") && input.value.trim() === "") {
                    input.style.border = "2px solid red";
                    isValid = false;
                } else {
                    input.style.border = "1px solid #ddd";
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert("⚠ Please fill all required fields correctly!");
            }
        });
    }

    // ===============================
    // 8. INIT ALL SYSTEMS
    // ===============================
    function init() {
        initNavigation();
        initStickyNavbar();
        initSmoothScroll();
        initReveal();
        initLoader();
        initForm();
    }

    init();

})();
