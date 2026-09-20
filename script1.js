```javascript
/* =====================================================
   TECHNOVA SOLUTIONS
   script1.js
   Mobile Menu + Dark Mode + FREE Chatbot + Current Year
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("TechNova script loaded successfully");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =====================================================
       DARK MODE
    ===================================================== */

    const themeToggle =
        document.getElementById("theme-toggle");

    if (themeToggle) {

        const savedTheme =
            localStorage.getItem("technova-theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (
                document.body.classList.contains("dark-mode")
            ) {

                localStorage.setItem(
                    "technova-theme",
                    "dark"
                );

            } else {

                localStorage.setItem(
                    "technova-theme",
                    "light"
                );

            }

        });

    }


    /* =====================================================
       CHATBOT ELEMENTS
    ===================================================== */

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


    /* =====================================================
       OPEN CHATBOT
    ===================================================== */

    if (chatbotToggle && chatbot) {

        chatbotToggle.addEventListener(
            "click",
            function () {

                chatbot.classList.add("active");

                if (chatbotInput) {
                    chatbotInput.focus();
                }

            }
        );

    }


    /* =====================================================
       CLOSE CHATBOT
    ===================================================== */

    if (chatbotClose && chatbot) {

        chatbotClose.addEventListener(
            "click",
            function () {

                chatbot.classList.remove("active");

            }
        );

    }


    /* =====================================================
       ADD CHAT MESSAGE
    ===================================================== */

    function addMessage(message, sender) {

        if (!chatbotMessages) {
            return;
        }

        const messageDiv =
            document.createElement("div");

        messageDiv.classList.add(
            "chat-message",
            sender
        );

        messageDiv.textContent = message;

        chatbotMessages.appendChild(messageDiv);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    /* =====================================================
       FREE TECHNOVA AI RESPONSE
    ===================================================== */

    function getBotResponse(message) {

        const text =
            message.toLowerCase().trim();


        /* GREETING */

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey") ||
            text.includes("salam") ||
            text.includes("assalam")
        ) {

            return "Hello! 👋 Welcome to TechNova Solutions. How can I help you today?";

        }


        /* ABOUT TECHNOVA */

        if (
            text.includes("technova") ||
            text.includes("about you") ||
            text.includes("about technova") ||
            text.includes("who are you")
        ) {

            return "TechNova Solutions is a software development company providing modern digital solutions including websites, mobile applications, custom software, cloud solutions and UI/UX design.";

        }


        /* WEB DEVELOPMENT */

        if (
            text.includes("web development") ||
            text.includes("website") ||
            text.includes("web design")
        ) {

            return "TechNova Solutions provides modern, responsive and user-friendly website development for businesses and organizations.";

        }


        /* APP DEVELOPMENT */

        if (
            text.includes("app development") ||
            text.includes("mobile app") ||
            text.includes("android") ||
            text.includes("ios")
        ) {

            return "We provide mobile app development solutions for modern Android and iOS applications.";

        }


        /* SOFTWARE DEVELOPMENT */

        if (
            text.includes("software") ||
            text.includes("custom software")
        ) {

            return "We develop custom software solutions according to your business requirements and project goals.";

        }


        /* CLOUD */

        if (
            text.includes("cloud") ||
            text.includes("cloud solutions")
        ) {

            return "TechNova Solutions provides cloud solutions to help businesses manage, deploy and scale their digital applications.";

        }


        /* UI/UX */

        if (
            text.includes("ui") ||
            text.includes("ux") ||
            text.includes("design")
        ) {

            return "Our UI/UX services focus on clean, modern and user-friendly digital experiences.";

        }


        /* SERVICES */

        if (
            text.includes("service") ||
            text.includes("services")
        ) {

            return "Our main services include Web Development, App Development, Custom Software Development, Cloud Solutions and UI/UX Design.";

        }


        /* PRICE */

        if (
            text.includes("price") ||
            text.includes("pricing") ||
            text.includes("cost") ||
            text.includes("how much")
        ) {

            return "Project pricing depends on your requirements, features and project scope. Please contact TechNova Solutions for a customized quote.";

        }


        /* CONTACT */

        if (
            text.includes("contact") ||
            text.includes("email") ||
            text.includes("reach you")
        ) {

            return "You can contact TechNova Solutions through the Contact page of the website. Tell us about your project and our team can discuss your requirements.";

        }


        /* PROJECT */

        if (
            text.includes("project") ||
            text.includes("portfolio")
        ) {

            return "You can explore our Projects page to see examples of the type of digital solutions TechNova Solutions can provide.";

        }


        /* THANK YOU */

        if (
            text.includes("thank you") ||
            text.includes("thanks") ||
            text === "thank"
        ) {

            return "You're very welcome! 😊 I'm happy to help with your TechNova project.";

        }


        /* SIMPLE CALCULATIONS */

        const calculation =
            text.match(
                /^(-?\d+(?:\.\d+)?)\s*(?:x|\*|×|multiplied by)\s*(-?\d+(?:\.\d+)?)$/
            );

        if (calculation) {

            const number1 =
                parseFloat(calculation[1]);

            const number2 =
                parseFloat(calculation[2]);

           return number1 + " × " + number2 + " = " + (number1 * number2);
        }


        /* FALLBACK */

        return "I'm the free TechNova AI assistant. 🤖 I can help with TechNova services, web development, app development, software development, cloud solutions, UI/UX, projects and pricing. Please ask me one of these questions.";

    }


    /* =====================================================
       SEND MESSAGE
    ===================================================== */

    function sendMessage() {

        if (!chatbotInput) {
            return;
        }

        const message =
            chatbotInput.value.trim();

        if (message === "") {
            return;
        }


        /* USER MESSAGE */

        addMessage(
            message,
            "user"
        );


        /* CLEAR INPUT */

        chatbotInput.value = "";


        /* DISABLE SEND */

        if (chatbotSend) {
            chatbotSend.disabled = true;
        }


        /* BOT TYPING */

        addMessage(
            "TechNova AI is typing...",
            "bot"
        );


        /* SMALL DELAY FOR NATURAL CHAT */

        setTimeout(function () {

            /* REMOVE TYPING MESSAGE */

            if (chatbotMessages) {

                const botMessages =
                    chatbotMessages.querySelectorAll(
                        ".chat-message.bot"
                    );

                if (botMessages.length > 0) {

                    const lastMessage =
                        botMessages[
                            botMessages.length - 1
                        ];

                    if (
                        lastMessage.textContent ===
                        "TechNova AI is typing..."
                    ) {

                        lastMessage.remove();

                    }

                }

            }


            /* GET FREE RESPONSE */

            const response =
                getBotResponse(message);


            /* BOT RESPONSE */

            addMessage(
                response,
                "bot"
            );


            /* ENABLE SEND */

            if (chatbotSend) {
                chatbotSend.disabled = false;
            }


            /* FOCUS INPUT */

            chatbotInput.focus();

        }, 500);

    }


    /* =====================================================
       SEND BUTTON
    ===================================================== */

    if (chatbotSend) {

        chatbotSend.addEventListener(
            "click",
            sendMessage
        );

    }


    /* =====================================================
       ENTER KEY
    ===================================================== */

    if (chatbotInput) {

        chatbotInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendMessage();

                }

            }
        );

    }


    /* =====================================================
       SUGGESTION BUTTONS
    ===================================================== */

    const suggestions =
        document.querySelectorAll(".suggestion");

    suggestions.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                if (!chatbotInput) {
                    return;
                }

                chatbotInput.value =
                    button.textContent.trim();

                sendMessage();

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       FINAL CHECK
    ===================================================== */

    console.log(
        "TechNova FREE chatbot loaded successfully."
    );

});
```
