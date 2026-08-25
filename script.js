// ========================================
// TechNova Solutions - Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. DARK / LIGHT MODE
    // ========================================

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "🌙";
            }

        });
    }


    // ========================================
    // 2. MOBILE HAMBURGER MENU
    // ========================================

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            if (navLinks.classList.contains("show")) {

                menuToggle.textContent = "✕";
                menuToggle.setAttribute(
                    "aria-label",
                    "Close Menu"
                );

            } else {

                menuToggle.textContent = "☰";
                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        });


        // Close menu after clicking a link

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            });

        });

    }


    // ========================================
    // 3. SMOOTH SCROLLING
    // ========================================

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // ========================================
    // 4. SCROLL ANIMATION
    // ========================================

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .project-card, " +
            ".testimonial-card, .about-content, " +
            ".hero-content"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        animatedElements.forEach(function (element) {
            element.classList.add("show");
        });

    }


    // ========================================
    // 5. CONTACT FORM VALIDATION
    // ========================================

    const contactForm =
        document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                const name =
                    document.getElementById("name");

                const email =
                    document.getElementById("email");

                const message =
                    document.getElementById("message");


                if (!name || !email || !message) {
                    return;
                }


                const nameValue =
                    name.value.trim();

                const emailValue =
                    email.value.trim();

                const messageValue =
                    message.value.trim();


                // Name validation

                if (nameValue === "") {

                    event.preventDefault();

                    alert("Please enter your name.");

                    name.focus();

                    return;
                }


                // Email validation

                if (emailValue === "") {

                    event.preventDefault();

                    alert("Please enter your email.");

                    email.focus();

                    return;
                }


                // Email format validation

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(emailValue)) {

                    event.preventDefault();

                    alert(
                        "Please enter a valid email address."
                    );

                    email.focus();

                    return;
                }


                // Message validation

                if (messageValue === "") {

                    event.preventDefault();

                    alert("Please enter your message.");

                    message.focus();

                    return;
                }

                /*
                    Do not use event.preventDefault()
                    here.

                    This allows Formspree to receive
                    the form when the HTML form has
                    the correct Formspree action.
                */

            }
        );

    }


    // ========================================
    // 6. BACK TO TOP BUTTON
    // ========================================

    const backToTop =
        document.getElementById("back-to-top");

    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // ========================================
    // 7. CURRENT YEAR
    // ========================================

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // ========================================
    // 8. BUTTON CLICK EFFECT
    // ========================================

    const buttons =
        document.querySelectorAll(
            "button, .btn"
        );

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                this.classList.add("clicked");

                const currentButton = this;

                setTimeout(function () {

                    currentButton.classList.remove(
                        "clicked"
                    );

                }, 200);

            }
        );

    });

});