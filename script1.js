/* =====================================================
   TECHNOVA SOLUTIONS
   script1.js
   Mobile Menu + Dark Mode + AI Chatbot
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

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });
    }


    /* =====================================================
       DARK MODE
    ===================================================== */

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {

        const savedTheme = localStorage.getItem("technova-theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("technova-theme", "dark");
                themeToggle.textContent = "☀️";

            } else {

                localStorage.setItem("technova-theme", "light");
                themeToggle.textContent = "🌙";
            }
        });
    }


    /* =====================================================
       AI CHATBOT
    ===================================================== */

    const chatButton = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const chatClose = document.getElementById("chat-close");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    // Open chatbot
    if (chatButton && chatBox) {

        chatButton.addEventListener("click", function () {
            chatBox.classList.add("show");

            if (chatInput) {
                chatInput.focus();
            }
        });
    }

    // Close chatbot
    if (chatClose && chatBox) {

        chatClose.addEventListener("click", function () {
            chatBox.classList.remove("show");
        });
    }


    /* =====================================================
       CHATBOT RESPONSE
    ===================================================== */

    if (chatForm && chatInput && chatMessages) {

        chatForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const message = chatInput.value.trim();

            if (message === "") {
                return;
            }

            // User message
            addMessage(message, "user");

            chatInput.value = "";

            // Bot thinking message
            const thinkingMessage = addMessage(
                "Typing...",
                "bot"
            );

            setTimeout(function () {

                if (thinkingMessage) {
                    thinkingMessage.remove();
                }

                const response = getBotResponse(message);

                addMessage(response, "bot");

            }, 700);
        });
    }


    /* =====================================================
       ADD CHAT MESSAGE
    ===================================================== */

    function addMessage(message, sender) {

        if (!chatMessages) {
            return null;
        }

        const messageElement = document.createElement("div");

        messageElement.classList.add(
            "chat-message",
            sender
        );

        messageElement.textContent = message;

        chatMessages.appendChild(messageElement);

        chatMessages.scrollTop = chatMessages.scrollHeight;

        return messageElement;
    }


    /* =====================================================
       AI CHATBOT RESPONSES
    ===================================================== */

    function getBotResponse(message) {

        const text = message.toLowerCase();

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey") ||
            text.includes("salam")
        ) {
            return "Hello! 👋 Welcome to TechNova Solutions. How can I help you today?";
        }

        if (
            text.includes("service") ||
            text.includes("services")
        ) {
            return "We provide Web Development, Mobile App Development, Software Solutions, UI/UX Design, Cloud Solutions and Digital Services.";
        }

        if (
            text.includes("website") ||
            text.includes("web development")
        ) {
            return "Our Web Development service can create modern, responsive and professional websites for your business.";
        }

        if (
            text.includes("mobile") ||
            text.includes("app")
        ) {
            return "We can help you build modern and responsive mobile applications for Android and iOS.";
        }

        if (
            text.includes("price") ||
            text.includes("cost") ||
            text.includes("pricing")
        ) {
            return "Pricing depends on your project requirements. Please contact TechNova Solutions for a customized quote.";
        }

        if (
            text.includes("contact") ||
            text.includes("email")
        ) {
            return "You can contact TechNova Solutions through the Contact page. We would be happy to discuss your project.";
        }

        if (
            text.includes("project") ||
            text.includes("portfolio")
        ) {
            return "You can explore our Projects section to see examples of our web, mobile and software solutions.";
        }

        if (
            text.includes("about")
        ) {
            return "TechNova Solutions is focused on providing modern digital, software and technology solutions for businesses.";
        }

        if (
            text.includes("thank") ||
            text.includes("thanks")
        ) {
            return "You're welcome! 😊 Let me know if you need anything else.";
        }

        return "Thanks for your message! 😊 I can help with TechNova's services, websites, mobile apps, projects, pricing and contact information.";
    }

});