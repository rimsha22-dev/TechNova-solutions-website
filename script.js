```javascript
// ========================================
// TECHNOVA SOLUTIONS - MAIN JAVASCRIPT
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
    // 2. MOBILE MENU
    // ========================================

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            if (navLinks.classList.contains("show")) {
                menuToggle.textContent = "✕";
                menuToggle.setAttribute("aria-label", "Close Menu");
            } else {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Open Menu");
            }

        });

        const menuItems = navLinks.querySelectorAll("a");

        menuItems.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Open Menu");

            });

        });
    }


    // ========================================
    // 3. SMOOTH SCROLL
    // ========================================

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ========================================
    // 4. SCROLL ANIMATION
    // ========================================

    const animatedElements = document.querySelectorAll(
        ".service-card, .project-card, .testimonial-card, .about-content, .hero-content"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

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

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (!name || !email || !message) {
                return;
            }

            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const messageValue = message.value.trim();

            if (nameValue === "") {

                event.preventDefault();

                alert("Please enter your name.");

                name.focus();

                return;
            }

            if (emailValue === "") {

                event.preventDefault();

                alert("Please enter your email.");

                email.focus();

                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {

                event.preventDefault();

                alert("Please enter a valid email address.");

                email.focus();

                return;
            }

            if (messageValue === "") {

                event.preventDefault();

                alert("Please enter your message.");

                message.focus();

                return;
            }

        });

    }


    // ========================================
    // 6. BACK TO TOP
    // ========================================

    const backToTop = document.getElementById("back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ========================================
    // 7. CURRENT YEAR
    // ========================================

    const yearElement = document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // ========================================
    // 8. BUTTON EFFECT
    // ========================================

    const buttons = document.querySelectorAll("button, .btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.classList.add("clicked");

            const currentButton = this;

            setTimeout(function () {

                currentButton.classList.remove("clicked");

            }, 200);

        });

    });


    // ========================================
    // 9. TECHNOVA CHATBOT
    // ========================================

    const chatbotToggle =
        document.getElementById("chatbot-toggle");

    const chatbot =
        document.getElementById("chatbot");

    const chatbotClose =
        document.getElementById("chatbot-close");

    const chatbotInput =
        document.getElementById("chatbot-input");

    const chatbotSend =
        document.getElementById("chatbot-send");

    const chatbotMessages =
        document.getElementById("chatbot-messages");


    // ========================================
    // OPEN CHATBOT
    // ========================================

    if (chatbotToggle && chatbot) {

        chatbotToggle.addEventListener("click", function () {

            chatbot.classList.toggle("active");

            const isOpen =
                chatbot.classList.contains("active");

            chatbot.setAttribute(
                "aria-hidden",
                isOpen ? "false" : "true"
            );

            if (isOpen && chatbotInput) {

                setTimeout(function () {

                    chatbotInput.focus();

                }, 300);

            }

        });

    }


    // ========================================
    // CLOSE CHATBOT
    // ========================================

    if (chatbotClose && chatbot) {

        chatbotClose.addEventListener("click", function () {

            chatbot.classList.remove("active");

            chatbot.setAttribute(
                "aria-hidden",
                "true"
            );

        });

    }


    // ========================================
    // ADD CHAT MESSAGE
    // ========================================

    function addChatMessage(message, type) {

        if (!chatbotMessages) {
            return;
        }

        const messageElement =
            document.createElement("div");

        messageElement.classList.add(
            "chatbot-message",
            type
        );

        messageElement.textContent = message;

        chatbotMessages.appendChild(
            messageElement
        );

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    // ========================================
    // BOT RESPONSE
    // ========================================

    function getBotResponse(userMessage) {

        const message =
            userMessage.toLowerCase().trim();


        // Greeting
        if (
            message.includes("hello") ||
            message.includes("hi") ||
            message.includes("hey") ||
            message.includes("assalam")
        ) {

            return "Hello! 👋 Welcome to TechNova Solutions. How can I help you today?";

        }


        // Services
        if (
            message.includes("service") ||
            message.includes("services") ||
            message.includes("offer")
        ) {

            return "We offer Website Development, Mobile App Development, Custom Software, Cloud Solutions and Digital Solutions. 💻";

        }


        // Website
        if (
            message.includes("website") ||
            message.includes("web development") ||
            message.includes("web")
        ) {

            return "Yes! 🌐 We create modern, responsive and professional websites for businesses.";

        }


        // Mobile App
        if (
            message.includes("app") ||
            message.includes("mobile")
        ) {

            return "We can develop modern mobile applications for your business. 📱";

        }


        // Software
        if (
            message.includes("software") ||
            message.includes("custom software")
        ) {

            return "TechNova Solutions develops custom software according to your business requirements. ⚙️";

        }


        // Cloud
        if (
            message.includes("cloud") ||
            message.includes("hosting")
        ) {

            return "We provide cloud-based solutions designed for performance, scalability and security. ☁️";

        }


        // Pricing
        if (
            message.includes("price") ||
            message.includes("pricing") ||
            message.includes("cost") ||
            message.includes("package")
        ) {

            return "Our packages are Starter $199, Business $399 and Premium $799. For a custom project, contact us for a quote. 💰";

        }


        // Contact
        if (
            message.includes("contact") ||
            message.includes("email") ||
            message.includes("hire")
        ) {

            return "You can contact TechNova Solutions through our Contact page or email us at rimshaejaz499@gmail.com. 📩";

        }


        // Help
        if (
            message.includes("help") ||
            message.includes("what can you do")
        ) {

            return "I can tell you about our services, pricing, websites, mobile apps, software and contact information. 🤖";

        }


        // Default
        return "Thanks for your message! 😊 Please tell me whether you need a website, mobile app, software solution or pricing information.";

    }


    // ========================================
    // SEND CHAT MESSAGE
    // ========================================

    function sendChatMessage() {

        if (!chatbotInput) {
            return;
        }

        const userMessage =
            chatbotInput.value.trim();

        if (userMessage === "") {
            return;
        }

        // User message
        addChatMessage(
            userMessage,
            "user"
        );

        // Clear input
        chatbotInput.value = "";

        // Typing indicator
        let typingElement = null;

        if (chatbotMessages) {

            typingElement =
                document.createElement("div");

            typingElement.classList.add(
                "chatbot-message",
                "bot",
                "typing"
            );

            typingElement.innerHTML =
                "<span></span><span></span><span></span>";

            chatbotMessages.appendChild(
                typingElement
            );

            chatbotMessages.scrollTop =
                chatbotMessages.scrollHeight;

        }


        // Bot response
        setTimeout(function () {

            if (typingElement) {
                typingElement.remove();
            }

            const response =
                getBotResponse(userMessage);

            addChatMessage(
                response,
                "bot"
            );

        }, 700);

    }


    // ========================================
    // CHAT SEND BUTTON
    // ========================================

    if (chatbotSend) {

        chatbotSend.addEventListener(
            "click",
            sendChatMessage
        );

    }


    // ========================================
    // ENTER KEY
    // ========================================

    if (chatbotInput) {

        chatbotInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    sendChatMessage();

                }

            }
        );

    }


    // ========================================
    // CHAT SUGGESTIONS
    // ========================================

    const suggestions =
        document.querySelectorAll(
            ".chatbot-suggestion, .suggestion"
        );

    suggestions.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                if (!chatbotInput) {
                    return;
                }

                chatbotInput.value =
                    this.textContent.trim();

                sendChatMessage();

            }
        );

    });


    // ========================================
    // ESC KEY
    // ========================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                chatbot &&
                chatbot.classList.contains("active")
            ) {

                chatbot.classList.remove("active");

                chatbot.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

});
```
