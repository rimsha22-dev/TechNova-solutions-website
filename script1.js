/* =====================================
   TECHNOVA SOLUTIONS - script1.js
   ===================================== */


/* =====================================
   1. CURRENT YEAR
   ===================================== */

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =====================================
   2. DARK MODE
   ===================================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        if (isDark) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }

    });
}


/* =====================================
   3. MOBILE NAVIGATION
   ===================================== */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close Menu" : "Open Menu"
        );

    });


    // Close menu when a link is clicked
    const links =
        navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

        });

    });
}


/* =====================================
   4. CONTACT FORM
   ===================================== */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const phoneInput =
        document.getElementById("phone");

    const serviceInput =
        document.getElementById("service");

    const messageInput =
        document.getElementById("message");


    /*
     * Show validation error
     */
    function showError(input, message) {

        input.style.borderColor = "red";

        let error =
            input.parentElement.querySelector(".error-message");

        if (!error) {

            error =
                document.createElement("small");

            error.className =
                "error-message";

            error.style.color = "red";
            error.style.display = "block";
            error.style.marginTop = "5px";

            input.parentElement.appendChild(error);
        }

        error.textContent = message;
    }


    /*
     * Remove validation errors
     */
    function clearErrors() {

        const errors =
            contactForm.querySelectorAll(".error-message");

        errors.forEach(error => {
            error.remove();
        });


        const inputs =
            contactForm.querySelectorAll(
                "input, select, textarea"
            );

        inputs.forEach(input => {
            input.style.borderColor = "";
        });
    }


    /*
     * Form submission
     */
    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            clearErrors();

            let isValid = true;


            /* NAME */
            const name =
                nameInput.value.trim();

            if (name.length < 2) {

                showError(
                    nameInput,
                    "Please enter your full name."
                );

                isValid = false;
            }


            /* EMAIL */
            const email =
                emailInput.value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                showError(
                    emailInput,
                    "Please enter a valid email address."
                );

                isValid = false;
            }


            /* PHONE */
            const phone =
                phoneInput.value.trim();

            if (phone !== "") {

                const phonePattern =
                    /^[0-9+\-\s()]{7,20}$/;

                if (!phonePattern.test(phone)) {

                    showError(
                        phoneInput,
                        "Please enter a valid phone number."
                    );

                    isValid = false;
                }
            }


            /* SERVICE */
            if (serviceInput.value === "") {

                showError(
                    serviceInput,
                    "Please select a service."
                );

                isValid = false;
            }


            /* MESSAGE */
            const message =
                messageInput.value.trim();

            if (message.length < 10) {

                showError(
                    messageInput,
                    "Please enter at least 10 characters."
                );

                isValid = false;
            }


            /*
             * If everything is valid,
             * submit to Formspree.
             */
            if (isValid) {

                contactForm.submit();

            }

        }
    );
}


/* =====================================
   5. BACK TO TOP BUTTON
   ===================================== */

const backToTop =
    document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


/* =====================================
   6. SMOOTH SCROLL
   ===================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =====================================
   7. PAGE LOAD ANIMATION
   ===================================== */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});