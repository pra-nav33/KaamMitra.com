/* =========================================================
   KaamMitra.com
   CUSTOMER PORTAL - MESSAGES
   ========================================================= */


/* =========================================================
   MESSAGE DATA
   ========================================================= */

const customerConversations = {

    ram: {
        name: "Ram Sharma",
        service: "Electrical Service"
    },

    sita: {
        name: "Sita Thapa",
        service: "House Cleaning"
    },

    hari: {
        name: "Hari Karki",
        service: "Computer Repair"
    }

};



/* =========================================================
   OPEN CONVERSATION
   ========================================================= */

const conversations =
    document.querySelectorAll(".conversation");


conversations.forEach(function (conversation) {

    conversation.addEventListener("click", function () {

        const worker =
            conversation.getAttribute("data-worker");

        openCustomerConversation(worker);

    });

});



function openCustomerConversation(worker) {

    const conversation =
        customerConversations[worker];

    if (!conversation) {
        return;
    }


    const workerName =
        document.getElementById("workerName");

    const workerService =
        document.getElementById("workerService");

    const chatMessages =
        document.getElementById("chatMessages");


    if (!workerName || !workerService || !chatMessages) {
        return;
    }


    workerName.textContent =
        conversation.name;

    workerService.textContent =
        conversation.service;


    /*
     * Clear previous messages.
     */

    chatMessages.innerHTML = "";


    /*
     * Add welcome message.
     */

    const welcomeMessage =
        document.createElement("div");

    welcomeMessage.className =
        "message worker-message";


    const welcomeText =
        document.createElement("p");

    welcomeText.textContent =
        "Hello! How can I help you?";


    welcomeMessage.appendChild(welcomeText);

    chatMessages.appendChild(welcomeMessage);

}



/* =========================================================
   SEND MESSAGE
   ========================================================= */

const sendMessageBtn =
    document.getElementById("sendMessageBtn");


if (sendMessageBtn) {

    sendMessageBtn.addEventListener("click", sendCustomerMessage);

}



/* =========================================================
   SEND MESSAGE FUNCTION
   ========================================================= */

function sendCustomerMessage() {

    const input =
        document.getElementById("messageInput");

    const chatMessages =
        document.getElementById("chatMessages");


    if (!input || !chatMessages) {
        return;
    }


    const message =
        input.value.trim();


    /*
     * Do not allow empty messages.
     */

    if (message === "") {

        alert(
            "Please type a message first."
        );

        return;

    }


    /*
    ---------------------------------
     * Create message container.
    ---------------------------------
     */

    const messageBox =
        document.createElement("div");

    messageBox.className =
        "message customer-message";


    /*
     * Create message text safely.
     */

    const messageText =
        document.createElement("p");

    messageText.textContent =
        message;


    messageBox.appendChild(messageText);


    /*
     * Add message to chat.
     */

    chatMessages.appendChild(messageBox);


    /*
     * Clear input.
     */

    input.value = "";


    /*
     * Scroll to latest message.
     */

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}



/* =========================================================
   SEND MESSAGE WITH ENTER KEY
   ========================================================= */

const messageInput =
    document.getElementById("messageInput");


if (messageInput) {

    messageInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendCustomerMessage();

        }

    });

}
/* =========================================================
   CUSTOMER PORTAL - NOTIFICATIONS
   ========================================================= */

const markAllReadBtn =
    document.getElementById("markAllReadBtn");

if (markAllReadBtn) {

    markAllReadBtn.addEventListener("click", function () {

        const notifications =
            document.querySelectorAll(".notification.unread");

        notifications.forEach(function (notification) {

            notification.classList.remove("unread");

        });

        alert(
            "All notifications have been marked as read."
        );

    });

}
/* =========================================================
   CUSTOMER PORTAL - SERVICE REQUEST
   ========================================================= */

const serviceRequestForm =
    document.getElementById("serviceRequestForm");

if (serviceRequestForm) {

    serviceRequestForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Your service request has been submitted successfully!"
        );

        window.location.href = "bookings.html";

    });

}
/* =========================================================
   CUSTOMER PORTAL - REVIEWS
   ========================================================= */

const reviewForm =
    document.getElementById("reviewForm");

if (reviewForm) {

    reviewForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const rating =
            document.getElementById("rating").value;

        const reviewText =
            document.getElementById("reviewText").value.trim();

        if (rating === "" || reviewText === "") {
            alert("Please provide a rating and review.");
            return;
        }

        alert(
            "Thank you! Your review has been submitted successfully."
        );

        reviewForm.reset();

    });

}
/* =========================================================
   CUSTOMER PORTAL - SEARCH & FILTER WORKERS
   ========================================================= */

const searchWorkersBtn =
    document.getElementById("searchWorkersBtn");

if (searchWorkersBtn) {

    searchWorkersBtn.addEventListener(
        "click",
        searchWorkers
    );

}


function searchWorkers() {

    const service =
        document
            .getElementById("service")
            .value
            .toLowerCase()
            .trim();


    const location =
        document
            .getElementById("location")
            .value
            .toLowerCase()
            .trim();


    const serviceFilter =
        document
            .getElementById("serviceFilter")
            .value;


    const ratingFilter =
        parseFloat(
            document
                .getElementById("ratingFilter")
                .value
        );


    const workers =
        document.querySelectorAll(
            ".worker-results .worker-card"
        );


    let foundWorkers = 0;


    workers.forEach(function (worker) {

        const workerText =
            worker.textContent.toLowerCase();


        const serviceMatch =
            service === "" ||
            workerText.includes(service);


        const locationMatch =
            location === "" ||
            workerText.includes(location);


        const workerService =
            worker.getAttribute("data-service");


        const workerRating =
            parseFloat(
                worker.getAttribute("data-rating")
            );


        const filterServiceMatch =
            serviceFilter === "all" ||
            workerService === serviceFilter;


        const filterRatingMatch =
            workerRating >= ratingFilter;


        if (
            serviceMatch &&
            locationMatch &&
            filterServiceMatch &&
            filterRatingMatch
        ) {

            worker.style.display = "block";

            foundWorkers++;

        }

        else {

            worker.style.display = "none";

        }

    });


    const noWorkers =
        document.getElementById("noWorkers");


    if (foundWorkers === 0) {

        noWorkers.style.display = "block";

    }

    else {

        noWorkers.style.display = "none";

    }

}
/* =========================================================
   CUSTOMER PORTAL - SETTINGS
   ========================================================= */

const settingsForm =
    document.getElementById("settingsForm");

if (settingsForm) {

    settingsForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Your account settings have been saved successfully."
        );

    });

}
// ==================================================
// CUSTOMER PROFILE IMAGE
// ==================================================

const customerImageUpload =
    document.getElementById("customerImageUpload");

const customerProfileImage =
    document.getElementById("customerProfileImage");

const removeCustomerImageBtn =
    document.getElementById("removeCustomerImageBtn");

// Existing/default profile image
const defaultCustomerImage =
    "../assets/images/profile.png";

// Load saved customer profile image
const savedCustomerImage =
    localStorage.getItem("customerProfileImage");

if (savedCustomerImage && customerProfileImage) {
    customerProfileImage.src = savedCustomerImage;
} else if (customerProfileImage) {
    customerProfileImage.src = defaultCustomerImage;
}


// ==================================================
// CHANGE PROFILE IMAGE
// ==================================================

if (customerImageUpload) {

    customerImageUpload.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {
            return;
        }

        // Check if selected file is an image
        if (!file.type.startsWith("image/")) {

            alert("Please select an image file.");

            this.value = "";

            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            const imageData = event.target.result;

            // Display new image
            customerProfileImage.src = imageData;

            // Save image in browser
            localStorage.setItem(
                "customerProfileImage",
                imageData
            );

            alert("Profile image updated successfully.");
        };

        reader.readAsDataURL(file);
    });
}


// ==================================================
// USE DEFAULT IMAGE
// ==================================================

if (removeCustomerImageBtn) {

    removeCustomerImageBtn.addEventListener("click", function () {

        // Remove uploaded image
        localStorage.removeItem("customerProfileImage");

        // Restore existing profile image
        customerProfileImage.src = defaultCustomerImage;

        // Clear file selection
        customerImageUpload.value = "";

        alert("Default profile image restored.");
    });
}

