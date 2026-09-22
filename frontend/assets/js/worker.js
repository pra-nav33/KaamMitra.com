document.addEventListener("DOMContentLoaded", function () {

    console.log("KaamMitra Worker Portal loaded successfully!");


    // ==================================================
    // JOB STATUS STORAGE
    // ==================================================

    let jobStatuses =
        JSON.parse(localStorage.getItem("kaamMitraJobStatuses")) || {};

    function saveJobStatuses() {
        localStorage.setItem(
            "kaamMitraJobStatuses",
            JSON.stringify(jobStatuses)
        );
    }


    // ==================================================
    // WORKER PROFILE STORAGE
    // ==================================================

    let workerProfile =
        JSON.parse(localStorage.getItem("kaamMitraWorkerProfile")) || {
            name: "Ram Thapa",
            service: "Professional Plumber",
            location: "Kathmandu",
            experience: "5 Years",
            rating: "4.8",
            price: "700",
            status: "Available",
            about:
                "Professional plumber providing reliable plumbing and water-related services.",
            skills: [
                "Water Tap Repair",
                "Pipe Repair",
                "Bathroom Plumbing",
                "Water Tank Installation"
            ]
        };


    function saveWorkerProfile() {
        localStorage.setItem(
            "kaamMitraWorkerProfile",
            JSON.stringify(workerProfile)
        );
    }


    // ==================================================
    // REQUEST → JOB MAPPING
    // ==================================================

    const requestToJob = {
        request1: "job1",
        request2: "job2",
        request3: "job3"
    };



    // ==================================================
    // MESSAGES
    // ==================================================

    const conversations =
        document.querySelectorAll(".conversation");

    const sendMessageBtn =
        document.getElementById("sendMessageBtn");

    const messageInput =
        document.getElementById("messageInput");


    conversations.forEach(function (conversation) {

        conversation.addEventListener("click", function () {

            const customer =
                conversation.dataset.customer;

            openConversation(customer);

        });

    });


    function openConversation(customer) {

        const name =
            document.getElementById("customerName");

        const service =
            document.getElementById("customerService");

        const messages =
            document.getElementById("chatMessages");

        if (!name || !service || !messages) {
            return;
        }


        if (customer === "customer1") {

            name.textContent = "Customer One";
            service.textContent = "Plumbing Service";

        }

        else if (customer === "customer2") {

            name.textContent = "Customer Two";
            service.textContent = "Electrical Repair";

        }

        else if (customer === "customer3") {

            name.textContent = "Customer Three";
            service.textContent = "Computer Repair";

        }


        /*
         * The CSS in the project visually places:
         *
         * customer-message = right side
         * worker-message   = left side
         *
         * Therefore the incoming customer's message
         * uses worker-message so it appears on the left.
         */

        messages.innerHTML =
            '<div class="message worker-message">' +
            '<p>Hello! I need help with my service.</p>' +
            '</div>';

    }


    if (sendMessageBtn) {

        sendMessageBtn.addEventListener(
            "click",
            sendMessage
        );

    }


    if (messageInput) {

        messageInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendMessage();

                }

            }
        );

    }


    function sendMessage() {

        const input =
            document.getElementById("messageInput");

        const chatMessages =
            document.getElementById("chatMessages");

        if (!input || !chatMessages) {
            return;
        }


        const message =
            input.value.trim();


        if (message === "") {

            alert("Please type a message first.");

            return;

        }


        const messageBox =
            document.createElement("div");

        /*
         * Worker messages appear on the right.
         * The existing CSS uses customer-message
         * for the right-side bubble.
         */

        messageBox.className =
            "message customer-message";


        const paragraph =
            document.createElement("p");

        paragraph.textContent =
            message;


        messageBox.appendChild(paragraph);

        chatMessages.appendChild(messageBox);

        input.value = "";

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }



    // ==================================================
    // NOTIFICATIONS
    // ==================================================

    const markAllReadBtn =
        document.getElementById("markAllReadBtn");


    if (markAllReadBtn) {

        markAllReadBtn.addEventListener(
            "click",
            function () {

                const notifications =
                    document.querySelectorAll(
                        ".notification.unread"
                    );


                notifications.forEach(
                    function (notification) {

                        notification.classList.remove(
                            "unread"
                        );

                    }
                );


                alert(
                    "All notifications have been marked as read."
                );

            }
        );

    }



    // ==================================================
    // PROFILE
    // ==================================================

    const editProfileBtn = document.getElementById("editProfileBtn");

if (editProfileBtn) {
    editProfileBtn.addEventListener("click", function () {
        window.location.href = "settings.html";
    });
}


    function openEditProfile() {

        // Prevent multiple edit forms
        const existingModal =
            document.getElementById(
                "workerProfileModal"
            );

        if (existingModal) {
            existingModal.remove();
        }


        // ==================================================
        // CREATE MODAL
        // ==================================================

        const modal =
            document.createElement("div");

        modal.id =
            "workerProfileModal";


        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0,0,0,0.55)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = "9999";
        modal.style.padding = "20px";
        modal.style.boxSizing = "border-box";


        const formBox =
            document.createElement("div");

        formBox.style.backgroundColor = "#ffffff";
        formBox.style.width = "100%";
        formBox.style.maxWidth = "600px";
        formBox.style.maxHeight = "90vh";
        formBox.style.overflowY = "auto";
        formBox.style.padding = "30px";
        formBox.style.borderRadius = "12px";
        formBox.style.boxSizing = "border-box";
        formBox.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";


        formBox.innerHTML = `
            <h2 style="margin-top:0;">Edit Profile</h2>

            <p style="color:#666;">
                Update your worker information below.
            </p>

            <form id="workerEditForm">

                <label>Name</label>
                <input
                    type="text"
                    id="editWorkerName"
                    value="${escapeHTML(workerProfile.name)}"
                    required
                    style="
                        width:100%;
                        padding:10px;
                        margin:7px 0 15px;
                        box-sizing:border-box;
                    "
                >

                <label>Service</label>
                <input
                    type="text"
                    id="editWorkerService"
                    value="${escapeHTML(workerProfile.service)}"
                    required
                    style="
                        width:100%;
                        padding:10px;
                        margin:7px 0 15px;
                        box-sizing:border-box;
                    "
                >

                <label>Location</label>
                <input
                    type="text"
                    id="editWorkerLocation"
                    value="${escapeHTML(workerProfile.location)}"
                    required
                    style="
                        width:100%;
                        padding:10px;
                        margin:7px 0 15px;
                        box-sizing:border-box;
                    "
                >

                <label>Experience</label>
                <input
                    type="text"
                    id="editWorkerExperience"
                    value="${escapeHTML(workerProfile.experience)}"
                    required
                    style="
                        width:100%;
                        padding:10px;
                        margin:7px 0 15px;
                        box-sizing:border-box;
                    "
                >

                <label>Starting Price (Rs.)</label>
                <input
                    type="number"
                    id="editWorkerPrice"
                    value="${escapeHTML(workerProfile.price)}"
                    required
                    style="
                        width:100%;
                        padding:10px;
                        margin:7px 0 15px;
                        box-sizing:border-box;
                    "
                >

                <label>About Me</label>
                <textarea
                    id="editWorkerAbout"
                    rows="4"
                    required
                    style="
                        width:100%;
                        padding:10px;
                        margin:7px 0 15px;
                        box-sizing:border-box;
                        resize:vertical;
                    "
                >${escapeHTML(workerProfile.about)}</textarea>

                <label>Skills</label>
                <input
                    type="text"
                    id="editWorkerSkills"
                    value="${escapeHTML(workerProfile.skills.join(", "))}"
                    placeholder="Example: Pipe Repair, Tap Repair"
                    required
                    style="
                        width:100%;
                        padding:10px;
                        margin:7px 0 20px;
                        box-sizing:border-box;
                    "
                >

                <div
                    style="
                        display:flex;
                        gap:10px;
                        justify-content:flex-end;
                    "
                >

                    <button
                        type="button"
                        id="cancelProfileEdit"
                        style="
                            padding:10px 18px;
                            border:1px solid #ccc;
                            border-radius:6px;
                            background:#f5f5f5;
                            cursor:pointer;
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        style="
                            padding:10px 18px;
                            border:none;
                            border-radius:6px;
                            background:#1280A5;
                            color:white;
                            cursor:pointer;
                        "
                    >
                        Save Changes
                    </button>

                </div>

            </form>
        `;


        modal.appendChild(formBox);

        document.body.appendChild(modal);


        // ==================================================
        // CANCEL
        // ==================================================

        const cancelButton =
            document.getElementById(
                "cancelProfileEdit"
            );


        if (cancelButton) {

            cancelButton.addEventListener(
                "click",
                function () {

                    modal.remove();

                }
            );

        }


        // ==================================================
        // SAVE PROFILE
        // ==================================================

        const editForm =
            document.getElementById(
                "workerEditForm"
            );


        if (editForm) {

            editForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const name =
                        document.getElementById(
                            "editWorkerName"
                        ).value.trim();


                    const service =
                        document.getElementById(
                            "editWorkerService"
                        ).value.trim();


                    const location =
                        document.getElementById(
                            "editWorkerLocation"
                        ).value.trim();


                    const experience =
                        document.getElementById(
                            "editWorkerExperience"
                        ).value.trim();


                    const price =
                        document.getElementById(
                            "editWorkerPrice"
                        ).value.trim();


                    const about =
                        document.getElementById(
                            "editWorkerAbout"
                        ).value.trim();


                    const skillsText =
                        document.getElementById(
                            "editWorkerSkills"
                        ).value.trim();


                    if (
                        name === "" ||
                        service === "" ||
                        location === "" ||
                        experience === "" ||
                        price === "" ||
                        about === "" ||
                        skillsText === ""
                    ) {

                        alert(
                            "Please fill in all profile fields."
                        );

                        return;

                    }


                    workerProfile.name =
                        name;

                    workerProfile.service =
                        service;

                    workerProfile.location =
                        location;

                    workerProfile.experience =
                        experience;

                    workerProfile.price =
                        price;

                    workerProfile.about =
                        about;

                    workerProfile.skills =
                        skillsText
                            .split(",")
                            .map(function (skill) {
                                return skill.trim();
                            })
                            .filter(function (skill) {
                                return skill !== "";
                            });


                    saveWorkerProfile();


                    updateProfilePage();


                    modal.remove();


                    alert(
                        "Your profile has been updated successfully."
                    );

                }
            );

        }

    }


    // ==================================================
    // ESCAPE HTML
    // ==================================================

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }



    // ==================================================
    // UPDATE PROFILE PAGE
    // ==================================================

    function updateProfilePage() {

        const profileMain =
            document.querySelector(".portal-main");

        if (!profileMain) {
            return;
        }


        const paragraphs =
            profileMain.querySelectorAll("p");


        paragraphs.forEach(function (paragraph) {

            const text =
                paragraph.textContent.trim();


            if (text.startsWith("Name:")) {

                paragraph.textContent =
                    "Name: " +
                    workerProfile.name;

            }


            else if (
                text.startsWith("Service:")
            ) {

                paragraph.textContent =
                    "Service: " +
                    workerProfile.service;

            }


            else if (
                text.startsWith("Location:")
            ) {

                paragraph.textContent =
                    "Location: " +
                    workerProfile.location;

            }


            else if (
                text.startsWith("Experience:")
            ) {

                paragraph.textContent =
                    "Experience: " +
                    workerProfile.experience;

            }


            else if (
                text.startsWith("Rating:")
            ) {

                paragraph.textContent =
                    "Rating: ⭐ " +
                    workerProfile.rating;

            }


            else if (
                text.startsWith("Starting Price:")
            ) {

                paragraph.textContent =
                    "Starting Price: Rs. " +
                    workerProfile.price;

            }


            else if (
                text.startsWith("Status:")
            ) {

                paragraph.textContent =
                    "Status: 🟢 " +
                    workerProfile.status;

            }

        });


        // --------------------------------------------------
        // UPDATE ABOUT ME
        // --------------------------------------------------

        const headings =
            profileMain.querySelectorAll("h2");


        headings.forEach(function (heading) {

            if (
                heading.textContent.trim() ===
                "About Me"
            ) {

                const aboutParagraph =
                    heading.nextElementSibling;


                if (aboutParagraph) {

                    aboutParagraph.textContent =
                        workerProfile.about;

                }

            }

        });


        // --------------------------------------------------
        // UPDATE SKILLS
        // --------------------------------------------------

        headings.forEach(function (heading) {

            if (
                heading.textContent.trim() ===
                "Skills"
            ) {

                const skillsList =
                    heading.nextElementSibling;


                if (
                    skillsList &&
                    skillsList.tagName === "UL"
                ) {

                    skillsList.innerHTML = "";


                    workerProfile.skills.forEach(
                        function (skill) {

                            const li =
                                document.createElement("li");

                            li.textContent =
                                skill;

                            skillsList.appendChild(li);

                        }
                    );

                }

            }

        });

    }



    // ==================================================
    // JOB REQUESTS
    // ==================================================

    const acceptButtons =
        document.querySelectorAll(
            ".accept-request"
        );


    const rejectButtons =
        document.querySelectorAll(
            ".reject-request"
        );


    // --------------------------------------------------
    // ACCEPT REQUEST
    // --------------------------------------------------

    function acceptRequest(button) {

        const requestCard =
            button.closest(
                ".request-card, .dashboard-request-card"
            );


        if (!requestCard) {

            return;

        }


        const requestId =
            button.dataset.request ||
            requestCard.dataset.request;


        if (!requestId) {

            alert(
                "Unable to identify this job request."
            );

            return;

        }


        const status =
            requestCard.querySelector(
                ".request-status"
            );


        // Save request status
        jobStatuses[requestId] =
            "accepted";


        // Find corresponding job
        const jobId =
            requestToJob[requestId];


        if (jobId) {

            jobStatuses[jobId] =
                "accepted";

        }


        saveJobStatuses();


        // Update visual status
        if (status) {

            status.textContent =
                "Accepted";

        }


        button.disabled =
            true;


        const rejectButton =
            requestCard.querySelector(
                ".reject-request"
            );


        if (rejectButton) {

            rejectButton.disabled =
                true;

        }


        alert(
            "Job request accepted successfully!"
        );


        updateWorkerDashboard();

    }



    acceptButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    acceptRequest(button);

                }
            );

        }
    );



    // --------------------------------------------------
    // REJECT REQUEST
    // --------------------------------------------------

    function rejectRequest(button) {

        const requestCard =
            button.closest(
                ".request-card, .dashboard-request-card"
            );


        if (!requestCard) {

            return;

        }


        const requestId =
            button.dataset.request ||
            requestCard.dataset.request;


        if (!requestId) {

            alert(
                "Unable to identify this job request."
            );

            return;

        }


        const status =
            requestCard.querySelector(
                ".request-status"
            );


        // Save rejected status
        jobStatuses[requestId] =
            "rejected";


        // Find corresponding job
        const jobId =
            requestToJob[requestId];


        if (jobId) {

            delete jobStatuses[jobId];

        }


        saveJobStatuses();


        // Update visual status
        if (status) {

            status.textContent =
                "Rejected";

        }


        button.disabled =
            true;


        const acceptButton =
            requestCard.querySelector(
                ".accept-request"
            );


        if (acceptButton) {

            acceptButton.disabled =
                true;

        }


        alert(
            "Job request rejected."
        );


        updateWorkerDashboard();

    }



    rejectButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    rejectRequest(button);

                }
            );

        }
    );



    // --------------------------------------------------
    // RESTORE REQUEST STATUS
    // --------------------------------------------------

    document
        .querySelectorAll(
            ".request-card, .dashboard-request-card"
        )
        .forEach(function (card) {

            const acceptButton =
                card.querySelector(
                    ".accept-request"
                );


            const rejectButton =
                card.querySelector(
                    ".reject-request"
                );


            const status =
                card.querySelector(
                    ".request-status"
                );


            if (
                !acceptButton &&
                !rejectButton
            ) {

                return;

            }


            const requestId =
                (
                    acceptButton ||
                    rejectButton
                ).dataset.request ||
                card.dataset.request;


            if (!requestId) {

                return;

            }


            const savedStatus =
                jobStatuses[requestId];


            if (
                savedStatus ===
                "accepted"
            ) {

                if (status) {

                    status.textContent =
                        "Accepted";

                }


                if (acceptButton) {

                    acceptButton.disabled =
                        true;

                }


                if (rejectButton) {

                    rejectButton.disabled =
                        true;

                }

            }


            else if (
                savedStatus ===
                "rejected"
            ) {

                if (status) {

                    status.textContent =
                        "Rejected";

                }


                if (acceptButton) {

                    acceptButton.disabled =
                        true;

                }


                if (rejectButton) {

                    rejectButton.disabled =
                        true;

                }

            }

        });



    // ==================================================
    // MY JOBS
    // ==================================================

    const startJobButtons =
        document.querySelectorAll(
            ".start-job-btn"
        );


    startJobButtons.forEach(
        function (button) {

            setupJobButton(button);

        }
    );


    function setupJobButton(button) {

        const jobCard =
            button.closest(
                ".booking-card"
            );


        if (!jobCard) {

            return;

        }


        const jobId =
            jobCard.dataset.job;


        if (!jobId) {

            return;

        }


        const status =
            jobCard.querySelector(
                ".job-status"
            );


        const savedStatus =
            jobStatuses[jobId];


        // --------------------------------------------------
        // COMPLETED
        // --------------------------------------------------

        if (
            savedStatus ===
            "completed"
        ) {

            updateJobCardStatus(
                status,
                "Completed"
            );


            button.textContent =
                "Completed";


            button.disabled =
                true;


            return;

        }


        // --------------------------------------------------
        // IN PROGRESS
        // --------------------------------------------------

        if (
            savedStatus ===
            "in-progress"
        ) {

            updateJobCardStatus(
                status,
                "In Progress"
            );


            button.textContent =
                "Complete Job";


            button.classList.remove(
                "start-job-btn"
            );


            button.classList.add(
                "complete-job-btn"
            );


            addCompleteJobEvent(
                button
            );


            return;

        }


        // --------------------------------------------------
        // START JOB
        // --------------------------------------------------

        button.addEventListener(
            "click",
            function () {

                jobStatuses[jobId] =
                    "in-progress";


                saveJobStatuses();


                updateJobCardStatus(
                    status,
                    "In Progress"
                );


                button.textContent =
                    "Complete Job";


                button.classList.remove(
                    "start-job-btn"
                );


                button.classList.add(
                    "complete-job-btn"
                );


                addCompleteJobEvent(
                    button
                );


                updateWorkerDashboard();

            }
        );

    }



    // ==================================================
    // UPDATE JOB CARD STATUS
    // ==================================================

    function updateJobCardStatus(
        status,
        newStatus
    ) {

        if (!status) {

            return;

        }


        status.textContent =
            newStatus;


        status.classList.remove(
            "accepted",
            "upcoming",
            "in-progress"
        );


        if (
            newStatus ===
            "In Progress"
        ) {

            status.classList.add(
                "in-progress"
            );

        }

        else {

            status.classList.add(
                "accepted"
            );

        }

    }



    // ==================================================
    // COMPLETE JOB
    // ==================================================

    function addCompleteJobEvent(button) {

        if (
            button.dataset.completeListener ===
            "true"
        ) {

            return;

        }


        button.dataset.completeListener =
            "true";


        button.addEventListener(
            "click",
            function () {

                const jobCard =
                    button.closest(
                        ".booking-card"
                    );


                if (!jobCard) {

                    return;

                }


                const jobId =
                    jobCard.dataset.job;


                if (!jobId) {

                    return;

                }


                const status =
                    jobCard.querySelector(
                        ".job-status"
                    );


                jobStatuses[jobId] =
                    "completed";


                saveJobStatuses();


                updateJobCardStatus(
                    status,
                    "Completed"
                );


                button.textContent =
                    "Completed";


                button.disabled =
                    true;


                updateWorkerDashboard();

            }
        );

    }



    // ==================================================
    // JOB DETAILS
    // ==================================================

    const startDetailJobBtn =
        document.getElementById(
            "startDetailJobBtn"
        );


    if (startDetailJobBtn) {

        const detailCard =
            document.querySelector(
                "[data-job-details]"
            );


        if (detailCard) {

            const jobId =
                detailCard.dataset.jobDetails;


            const status =
                document.querySelector(
                    ".job-detail-status"
                );


            const currentStatus =
                document.querySelector(
                    ".current-job-status"
                );


            function updateJobDetailStatus(
                savedStatus
            ) {

                if (
                    savedStatus ===
                    "accepted"
                ) {

                    if (status) {

                        status.textContent =
                            "Accepted";


                        status.classList.remove(
                            "in-progress",
                            "upcoming"
                        );


                        status.classList.add(
                            "accepted"
                        );

                    }


                    if (currentStatus) {

                        currentStatus.textContent =
                            "Accepted";

                    }


                    startDetailJobBtn.textContent =
                        "Start Job";


                    startDetailJobBtn.disabled =
                        false;

                }


                else if (
                    savedStatus ===
                    "in-progress"
                ) {

                    if (status) {

                        status.textContent =
                            "In Progress";


                        status.classList.remove(
                            "accepted",
                            "upcoming"
                        );


                        status.classList.add(
                            "in-progress"
                        );

                    }


                    if (currentStatus) {

                        currentStatus.textContent =
                            "In Progress";

                    }


                    startDetailJobBtn.textContent =
                        "Mark as Completed";


                    startDetailJobBtn.disabled =
                        false;

                }


                else if (
                    savedStatus ===
                    "completed"
                ) {

                    if (status) {

                        status.textContent =
                            "Completed";


                        status.classList.remove(
                            "accepted",
                            "upcoming",
                            "in-progress"
                        );


                        status.classList.add(
                            "accepted"
                        );

                    }


                    if (currentStatus) {

                        currentStatus.textContent =
                            "Completed";

                    }


                    startDetailJobBtn.textContent =
                        "Completed";


                    startDetailJobBtn.disabled =
                        true;

                }

            }


            // Restore saved status
            const savedStatus =
                jobStatuses[jobId] ||
                "accepted";


            updateJobDetailStatus(
                savedStatus
            );


            // --------------------------------------------------
            // START / COMPLETE
            // --------------------------------------------------

            startDetailJobBtn.addEventListener(
                "click",
                function () {

                    const currentSavedStatus =
                        jobStatuses[jobId] ||
                        "accepted";


                    if (
                        currentSavedStatus ===
                        "accepted"
                    ) {

                        jobStatuses[jobId] =
                            "in-progress";


                        saveJobStatuses();


                        updateJobDetailStatus(
                            "in-progress"
                        );

                    }


                    else if (
                        currentSavedStatus ===
                        "in-progress"
                    ) {

                        jobStatuses[jobId] =
                            "completed";


                        saveJobStatuses();


                        updateJobDetailStatus(
                            "completed"
                        );

                    }


                    updateWorkerDashboard();

                }
            );

        }

    }



    // ==================================================
    // EARNINGS
    // ==================================================

    const transactionCards =
        document.querySelectorAll(
            ".transaction-card"
        );


    if (
        transactionCards.length > 0
    ) {

        let totalEarnings = 0;

        let completedCount = 0;

        let pendingAmount = 0;


        transactionCards.forEach(
            function (card) {

                const amountText =
                    card.querySelector(
                        "p:nth-of-type(3)"
                    );


                if (!amountText) {

                    return;

                }


                const amountMatch =
                    amountText.textContent.match(
                        /[\d,]+/
                    );


                if (!amountMatch) {

                    return;

                }


                const amount =
                    parseInt(
                        amountMatch[0]
                            .replace(/,/g, "")
                    );


                const status =
                    card.querySelector(
                        ".status"
                    );


                if (!status) {

                    return;

                }


                const currentStatus =
                    status.textContent
                        .trim()
                        .toLowerCase();


                if (
                    currentStatus ===
                    "paid"
                ) {

                    totalEarnings +=
                        amount;


                    completedCount++;

                }


                else if (
                    currentStatus ===
                    "pending"
                ) {

                    pendingAmount +=
                        amount;

                }

            }
        );


        const monthlyEarnings =
            document.getElementById(
                "monthlyEarnings"
            );


        const completedJobs =
            document.getElementById(
                "completedJobs"
            );


        const pendingPayment =
            document.getElementById(
                "pendingPayment"
            );


        if (monthlyEarnings) {

            monthlyEarnings.textContent =
                "Rs. " +
                totalEarnings.toLocaleString();

        }


        if (completedJobs) {

            completedJobs.textContent =
                completedCount;

        }


        if (pendingPayment) {

            pendingPayment.textContent =
                "Rs. " +
                pendingAmount.toLocaleString();

        }

    }



    // ==================================================
    // WORKER DASHBOARD
    // ==================================================

    const dashboardPendingRequests =
        document.getElementById(
            "dashboardPendingRequests"
        );


    const dashboardActiveJobs =
        document.getElementById(
            "dashboardActiveJobs"
        );


    const dashboardCompletedJobs =
        document.getElementById(
            "dashboardCompletedJobs"
        );


    const dashboardEarnings =
        document.getElementById(
            "dashboardEarnings"
        );



    // ==================================================
    // DASHBOARD REQUEST STATUS
    // ==================================================

    const dashboardRequestCards =
        document.querySelectorAll(
            ".dashboard-request-card"
        );


    dashboardRequestCards.forEach(
        function (card) {

            const requestId =
                card.dataset.request;


            if (!requestId) {

                return;

            }


            const status =
                card.querySelector(
                    ".request-status"
                );


            const acceptButton =
                card.querySelector(
                    ".accept-request"
                );


            const rejectButton =
                card.querySelector(
                    ".reject-request"
                );


            const savedStatus =
                jobStatuses[requestId];


            if (
                savedStatus ===
                "accepted"
            ) {

                if (status) {

                    status.textContent =
                        "Accepted";

                }


                if (acceptButton) {

                    acceptButton.disabled =
                        true;

                }


                if (rejectButton) {

                    rejectButton.disabled =
                        true;

                }

            }


            else if (
                savedStatus ===
                "rejected"
            ) {

                if (status) {

                    status.textContent =
                        "Rejected";

                }


                if (acceptButton) {

                    acceptButton.disabled =
                        true;

                }


                if (rejectButton) {

                    rejectButton.disabled =
                        true;

                }

            }

        }
    );



    // ==================================================
    // DASHBOARD JOB STATUS
    // ==================================================

    const dashboardJobCards =
        document.querySelectorAll(
            ".dashboard-job-card"
        );


    dashboardJobCards.forEach(
        function (card) {

            const jobId =
                card.dataset.job;


            if (!jobId) {

                return;

            }


            const status =
                card.querySelector(
                    ".job-status"
                );


            const savedStatus =
                jobStatuses[jobId];


            if (
                savedStatus ===
                "accepted"
            ) {

                updateJobCardStatus(
                    status,
                    "Accepted"
                );

            }


            else if (
                savedStatus ===
                "in-progress"
            ) {

                updateJobCardStatus(
                    status,
                    "In Progress"
                );

            }


            else if (
                savedStatus ===
                "completed"
            ) {

                updateJobCardStatus(
                    status,
                    "Completed"
                );

            }

        }
    );



    // ==================================================
    // DASHBOARD SUMMARY
    // ==================================================

    function updateWorkerDashboard() {

        let pendingRequests = 0;

        let activeJobs = 0;

        let dynamicCompletedJobs = 0;

        let earnings = 1300;


        // --------------------------------------------------
        // COUNT PENDING REQUESTS
        // --------------------------------------------------

        [
            "request1",
            "request2",
            "request3"
        ]
            .forEach(function (requestId) {

                const status =
                    jobStatuses[requestId];


                if (!status) {

                    pendingRequests++;

                }

            });



        // --------------------------------------------------
        // COUNT ACTIVE JOBS
        // --------------------------------------------------

        [
            "job1",
            "job2",
            "job3"
        ]
            .forEach(function (jobId) {

                const status =
                    jobStatuses[jobId];


                if (
                    status === "accepted" ||
                    status === "in-progress"
                ) {

                    activeJobs++;

                }


                if (
                    status === "completed"
                ) {

                    dynamicCompletedJobs++;

                }

            });



        // --------------------------------------------------
        // COMPLETED JOBS
        // --------------------------------------------------

        const completedJobs =
            2 +
            dynamicCompletedJobs;



        // --------------------------------------------------
        // EARNINGS
        // --------------------------------------------------

        if (
            jobStatuses["job1"] ===
            "completed"
        ) {

            earnings += 800;

        }


        if (
            jobStatuses["job2"] ===
            "completed"
        ) {

            earnings += 600;

        }


        if (
            jobStatuses["job3"] ===
            "completed"
        ) {

            earnings += 500;

        }



        // --------------------------------------------------
        // UPDATE DASHBOARD
        // --------------------------------------------------

        if (
            dashboardPendingRequests
        ) {

            dashboardPendingRequests.textContent =
                pendingRequests;

        }


        if (
            dashboardActiveJobs
        ) {

            dashboardActiveJobs.textContent =
                activeJobs;

        }


        if (
            dashboardCompletedJobs
        ) {

            dashboardCompletedJobs.textContent =
                completedJobs;

        }


        if (
            dashboardEarnings
        ) {

            dashboardEarnings.textContent =
                "Rs. " +
                earnings.toLocaleString();

        }

    }



    // ==================================================
    // INITIAL UPDATE
    // ==================================================

    updateWorkerDashboard();
// ==================================================
// WORKER SETTINGS
// ==================================================

const workerSettingsForm =
    document.getElementById("workerSettingsForm");

if (workerSettingsForm) {

    const workerAvailability =
        document.getElementById("workerAvailability");

    const jobNotifications =
        document.getElementById("jobNotifications");

    const messageNotifications =
        document.getElementById("messageNotifications");

    const paymentNotifications =
        document.getElementById("paymentNotifications");


    // Restore saved settings

    const savedWorkerSettings =
        JSON.parse(
            localStorage.getItem("kaamMitraWorkerSettings")
        );


    if (savedWorkerSettings) {

        if (workerAvailability) {
            workerAvailability.checked =
                savedWorkerSettings.availability;
        }

        if (jobNotifications) {
            jobNotifications.checked =
                savedWorkerSettings.jobNotifications;
        }

        if (messageNotifications) {
            messageNotifications.checked =
                savedWorkerSettings.messageNotifications;
        }

        if (paymentNotifications) {
            paymentNotifications.checked =
                savedWorkerSettings.paymentNotifications;
        }

    }


    // Save settings

    workerSettingsForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const password =
                document.getElementById(
                    "workerPassword"
                ).value;

            const confirmPassword =
                document.getElementById(
                    "workerConfirmPassword"
                ).value;


            // Check password

            if (
                password !== "" &&
                password !== confirmPassword
            ) {

                alert(
                    "New password and confirm password do not match."
                );

                return;

            }


            const workerSettings = {

                availability:
                    workerAvailability.checked,

                jobNotifications:
                    jobNotifications.checked,

                messageNotifications:
                    messageNotifications.checked,

                paymentNotifications:
                    paymentNotifications.checked

            };


            localStorage.setItem(
                "kaamMitraWorkerSettings",
                JSON.stringify(workerSettings)
            );


            alert(
                "Worker settings saved successfully!"
            );

        }
    );

}

});
// ===============================
// Worker Profile Image
// ===============================

const workerImageUpload = document.getElementById("workerImageUpload");
const workerProfileImage = document.getElementById("workerProfileImage");
const removeWorkerImageBtn = document.getElementById("removeWorkerImageBtn");

// Your existing profile picture
const defaultWorkerImage = "../assets/images/profile.png";

// Load saved profile image
const savedWorkerImage = localStorage.getItem("workerProfileImage");

if (savedWorkerImage && workerProfileImage) {
    workerProfileImage.src = savedWorkerImage;
} else {
    workerProfileImage.src = defaultWorkerImage;
}

// Upload new profile image
if (workerImageUpload) {

    workerImageUpload.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            this.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            const imageData = event.target.result;

            workerProfileImage.src = imageData;

            localStorage.setItem(
                "workerProfileImage",
                imageData
            );

            alert("Profile image updated successfully.");
        };

        reader.readAsDataURL(file);
    });
}

// Return to default profile image
if (removeWorkerImageBtn) {

    removeWorkerImageBtn.addEventListener("click", function () {

        localStorage.removeItem("workerProfileImage");

        workerProfileImage.src = defaultWorkerImage;

        workerImageUpload.value = "";

        alert("Default profile image restored.");
    });
}

