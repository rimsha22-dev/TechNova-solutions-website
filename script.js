```javascript
/* =====================================================
   TECHNOVA SOLUTIONS
   script1.js
   Mobile Menu + Dark Mode + Current Year + Chatbot
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });


        /* Close menu after clicking a navigation link */

        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

                menuToggle.textContent = "☰";
            });

        });
    }


    /* =====================================================
       DARK MODE
    ===================================================== */

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {

        const savedTheme =
            localStorage.getItem("technova-theme");


        /* Apply saved theme */

        if (savedTheme === "dark") {

            document.body.classList.add("dark-mode");

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Light Mode"
            );

        } else {

            document.body.classList.remove("dark-mode");

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to Dark Mode"
            );
        }


        /* Theme button */

        themeToggle.addEventListener("click", function () {

            const darkMode =
                document.body.classList.toggle("dark-mode");


            if (darkMode) {

                localStorage.setItem(
                    "technova-theme",
                    "dark"
                );

                themeToggle.textContent = "☀️";

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to Light Mode"
                );

            } else {

                localStorage.setItem(
                    "technova-theme",
                    "light"
                );

                themeToggle.textContent = "🌙";

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to Dark Mode"
                );
            }

        });
    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("current-year");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       AI CHATBOT ELEMENTS
    ===================================================== */

    const chatButton =
        document.getElementById("chat-button");

    const chatBox =
        document.getElementById("chat-box");

    const chatClose =
        document.getElementById("chat-close");

    const chatForm =
        document.getElementById("chat-form");

    const chatInput =
        document.getElementById("chat-input");

    const chatMessages =
        document.getElementById("chat-messages");


    /* =====================================================
       OPEN CHATBOT
    ===================================================== */

    if (chatButton && chatBox) {

        chatButton.addEventListener("click", function () {

            chatBox.classList.add("show");

            if (chatInput) {

                setTimeout(function () {
                    chatInput.focus();
                }, 100);
            }

        });
    }


    /* =====================================================
       CLOSE CHATBOT
    ===================================================== */

    if (chatClose && chatBox) {

        chatClose.addEventListener("click", function () {

            chatBox.classList.remove("show");

        });
    }


    /* =====================================================
       CLOSE CHATBOT WITH ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            chatBox &&
            chatBox.classList.contains("show")
        ) {

            chatBox.classList.remove("show");
        }

    });


    /* =====================================================
       CHATBOT FORM
    ===================================================== */

    if (
        chatForm &&
        chatInput &&
        chatMessages
    ) {

        chatForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const message =
                    chatInput.value.trim();


                /* Empty message */

                if (message === "") {
                    return;
                }


                /* User message */

                addMessage(
                    message,
                    "user"
                );


                /* Clear input */

                chatInput.value = "";


                /* Bot typing message */

                const typingMessage =
                    addMessage(
                        "Typing...",
                        "bot"
                    );


                /* Bot response */

                setTimeout(function () {

                    if (typingMessage) {
                        typingMessage.remove();
                    }


                    const response =
                        getBotResponse(message);


                    addMessage(
                        response,
                        "bot"
                    );

                }, 700);

            }
        );
    }


    /* =====================================================
       ADD CHAT MESSAGE
    ===================================================== */

    function addMessage(message, sender) {

        if (!chatMessages) {
            return null;
        }


        const messageElement =
            document.createElement("div");


        messageElement.classList.add(
            "chat-message",
            sender
        );


        messageElement.textContent =
            message;


        chatMessages.appendChild(
            messageElement
        );


        chatMessages.scrollTop =
            chatMessages.scrollHeight;


        return messageElement;
    }


    /* =====================================================
       CHATBOT RESPONSE SYSTEM
    ===================================================== */

    function getBotResponse(message) {

        const text =
            message.toLowerCase().trim();


        /* Greeting */

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey") ||
            text.includes("salam") ||
            text.includes("assalam")
        ) {

            return "Hello! 👋 Welcome to TechNova Solutions. How can I help you today?";
        }


        /* Services */

        if (
            text.includes("service") ||
            text.includes("services")
        ) {

            return "TechNova Solutions provides Web Development, Mobile App Development, Custom Software, UI/UX Design, Cloud Solutions and Digital Services.";
        }


        /* Website */

        if (
            text.includes("website") ||
            text.includes("web development") ||
            text.includes("web design")
        ) {

            return "Our Web Development service creates modern, responsive and professional websites for businesses.";
        }


        /* Mobile App */

        if (
            text.includes("mobile") ||
            text.includes("app") ||
            text.includes("application")
        ) {

            return "We can help you build modern and responsive mobile applications for Android and iOS.";
        }


        /* Software */

        if (
            text.includes("software") ||
            text.includes("custom software")
        ) {

            return "TechNova Solutions develops custom software according to your business requirements and workflow.";
        }


        /* UI/UX */

        if (
            text.includes("ui") ||
            text.includes("ux") ||
            text.includes("design")
        ) {

            return "Our UI/UX Design service focuses on creating attractive, user-friendly and modern digital experiences.";
        }


        /* Cloud */

        if (
            text.includes("cloud")
        ) {

            return "We provide modern cloud solutions designed to help businesses improve scalability, reliability and performance.";
        }


        /* Pricing */

        if (
            text.includes("price") ||
            text.includes("cost") ||
            text.includes("pricing") ||
            text.includes("budget")
        ) {

            return "Pricing depends on your project requirements. Please contact TechNova Solutions for a customized quote.";
        }


        /* Contact */

        if (
            text.includes("contact") ||
            text.includes("email") ||
            text.includes("reach")
        ) {

            return "You can contact TechNova Solutions through our Contact page. We would be happy to discuss your project.";
        }


        /* Projects */

        if (
            text.includes("project") ||
            text.includes("projects") ||
            text.includes("portfolio")
        ) {

            return "You can explore our Projects section to see examples of our web, mobile and software solutions.";
        }


        /* About */

        if (
            text.includes("about") ||
            text.includes("company")
        ) {

            return "TechNova Solutions provides modern digital, software and technology solutions for businesses.";
        }


        /* Testimonials */

        if (
            text.includes("testimonial") ||
            text.includes("review") ||
            text.includes("reviews")
        ) {

            return "You can visit our Testimonials page to see feedback from TechNova Solutions clients.";
        }


        /* Thank you */

        if (
            text.includes("thank") ||
            text.includes("thanks")
        ) {

            return "You're welcome! 😊 Let me know if you need anything else.";
        }


        /* Goodbye */

        if (
            text.includes("bye") ||
            text.includes("goodbye")
        ) {

            return "Goodbye! 👋 Thank you for visiting TechNova Solutions.";
        }


        /* Default response */

        return "Thanks for your message! 😊 I can help you with TechNova's services, websites, mobile apps, software, projects, pricing and contact information.";

    }

});
```
