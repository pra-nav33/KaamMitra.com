document.addEventListener("DOMContentLoaded", function () {

    console.log("KaamMitra Admin Portal loaded successfully!");


    /*
    ==================================================
    ADMIN DASHBOARD
    ==================================================
    */

    const totalCustomers =
        document.getElementById("totalCustomers");

    const totalWorkers =
        document.getElementById("totalWorkers");

    const totalBookings =
        document.getElementById("totalBookings");

    const totalRevenue =
        document.getElementById("totalRevenue");


    const adminData = {

        customers: 5240,

        workers: 1280,

        bookings: 8920,

        revenue: 1248500

    };


    if (totalCustomers) {

        totalCustomers.textContent =
            adminData.customers.toLocaleString();

    }


    if (totalWorkers) {

        totalWorkers.textContent =
            adminData.workers.toLocaleString();

    }


    if (totalBookings) {

        totalBookings.textContent =
            adminData.bookings.toLocaleString();

    }


    if (totalRevenue) {

        totalRevenue.textContent =
            "Rs. " +
            adminData.revenue.toLocaleString();

    }



    /*
    ==================================================
    USERS
    ==================================================
    */

    const userSearch =
        document.getElementById("userSearch");

    const userCards =
        document.querySelectorAll(".user-card");

    const userCount =
        document.getElementById("userCount");


    if (userSearch) {

        userSearch.addEventListener("input", function () {

            const searchValue =
                userSearch.value.toLowerCase().trim();

            let visibleUsers = 0;


            userCards.forEach(function (card) {

                const name =
                    card.dataset.name.toLowerCase();

                const email =
                    card.dataset.email.toLowerCase();

                const location =
                    card.dataset.location.toLowerCase();


                const matches =
                    name.includes(searchValue) ||
                    email.includes(searchValue) ||
                    location.includes(searchValue);


                if (matches) {

                    card.style.display = "block";

                    visibleUsers++;

                } else {

                    card.style.display = "none";

                }

            });


            if (userCount) {

                userCount.textContent =
                    visibleUsers + " Users";

            }

        });

    }



    /*
    ==============================
    VIEW USER
    ==============================
    */

    const viewUserButtons =
        document.querySelectorAll(".view-user-btn");


    viewUserButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const userName =
                button.dataset.user;


            const card =
                button.closest(".user-card");


            const email =
                card.dataset.email;

            const location =
                card.dataset.location;


            alert(
                "User Profile\n\n" +
                "Name: " + userName +
                "\nEmail: " + email +
                "\nLocation: " + location +
                "\nRole: Customer"
            );

        });

    });



    /*
    ==============================
    ENABLE / DISABLE USER
    ==============================
    */

    const toggleUserButtons =
        document.querySelectorAll(".toggle-user-btn");


    toggleUserButtons.forEach(function (button) {

        const userName =
            button.dataset.user;


        const savedStatus =
            localStorage.getItem(
                "userStatus_" + userName
            );


        if (savedStatus === "disabled") {

            setUserDisabled(button);

        }


        button.addEventListener("click", function () {

            const card =
                button.closest(".user-card");

            const status =
                card.querySelector(".user-status");


            if (card.dataset.status === "disabled") {

                card.dataset.status = "active";

                status.textContent = "Active";

                status.classList.remove("upcoming");

                status.classList.add("accepted");

                button.textContent = "Disable";


                localStorage.setItem(
                    "userStatus_" + userName,
                    "active"
                );


                alert(
                    userName +
                    " has been enabled."
                );


            } else {

                card.dataset.status = "disabled";

                status.textContent = "Disabled";

                status.classList.remove("accepted");

                status.classList.add("upcoming");

                button.textContent = "Enable";


                localStorage.setItem(
                    "userStatus_" + userName,
                    "disabled"
                );


                alert(
                    userName +
                    " has been disabled."
                );

            }

        });

    });



    function setUserDisabled(button) {

        const card =
            button.closest(".user-card");

        const status =
            card.querySelector(".user-status");


        card.dataset.status = "disabled";

        status.textContent = "Disabled";

        status.classList.remove("accepted");

        status.classList.add("upcoming");

        button.textContent = "Enable";

    }



    /*
    ==================================================
    WORKERS
    ==================================================
    */

    const workerSearch =
        document.getElementById("workerSearch");

    const workerCards =
        document.querySelectorAll(".worker-card");

    const workerCount =
        document.getElementById("workerCount");


    if (workerSearch) {

        workerSearch.addEventListener("input", function () {

            const searchValue =
                workerSearch.value.toLowerCase().trim();

            let visibleWorkers = 0;


            workerCards.forEach(function (card) {

                const name =
                    card.dataset.name.toLowerCase();

                const service =
                    card.dataset.service.toLowerCase();

                const location =
                    card.dataset.location.toLowerCase();


                const matches =
                    name.includes(searchValue) ||
                    service.includes(searchValue) ||
                    location.includes(searchValue);


                if (matches) {

                    card.style.display = "block";

                    visibleWorkers++;

                } else {

                    card.style.display = "none";

                }

            });


            if (workerCount) {

                workerCount.textContent =
                    visibleWorkers + " Workers";

            }

        });

    }



    /*
    ==============================
    VIEW WORKER
    ==============================
    */

    const viewWorkerButtons =
        document.querySelectorAll(".view-worker-btn");


    viewWorkerButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const workerName =
                button.dataset.worker;


            const card =
                button.closest(".worker-card");


            const service =
                card.dataset.service;

            const location =
                card.dataset.location;


            alert(
                "Worker Profile\n\n" +
                "Name: " + workerName +
                "\nService: " + service +
                "\nLocation: " + location
            );

        });

    });



    /*
    ==============================
    SUSPEND / ACTIVATE WORKER
    ==============================
    */

    const toggleWorkerButtons =
        document.querySelectorAll(".toggle-worker-btn");


    toggleWorkerButtons.forEach(function (button) {

        const workerName =
            button.dataset.worker;


        const savedStatus =
            localStorage.getItem(
                "workerStatus_" + workerName
            );


        if (savedStatus === "suspended") {

            setWorkerSuspended(button);

        }


        button.addEventListener("click", function () {

            const card =
                button.closest(".worker-card");

            const status =
                card.querySelector(".worker-status");


            if (card.dataset.status === "suspended") {

                card.dataset.status = "verified";

                status.textContent = "Verified";

                status.classList.remove("upcoming");

                status.classList.add("accepted");

                button.textContent = "Suspend";


                localStorage.setItem(
                    "workerStatus_" + workerName,
                    "verified"
                );


                alert(
                    workerName +
                    " has been activated."
                );


            } else {

                card.dataset.status = "suspended";

                status.textContent = "Suspended";

                status.classList.remove("accepted");

                status.classList.add("upcoming");

                button.textContent = "Activate";


                localStorage.setItem(
                    "workerStatus_" + workerName,
                    "suspended"
                );


                alert(
                    workerName +
                    " has been suspended."
                );

            }

        });

    });



    function setWorkerSuspended(button) {

        const card =
            button.closest(".worker-card");

        const status =
            card.querySelector(".worker-status");


        card.dataset.status = "suspended";

        status.textContent = "Suspended";

        status.classList.remove("accepted");

        status.classList.add("upcoming");

        button.textContent = "Activate";

    }



    /*
    ==============================
    APPROVE WORKER
    ==============================
    */

    const approveWorkerButtons =
        document.querySelectorAll(".approve-worker-btn");


    approveWorkerButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const workerName =
                button.dataset.worker;


            const card =
                button.closest(".worker-card");

            const status =
                card.querySelector(".worker-status");


            card.dataset.status = "verified";

            status.textContent = "Verified";

            status.classList.remove("upcoming");

            status.classList.add("accepted");


            const rejectButton =
                card.querySelector(".reject-worker-btn");


            if (rejectButton) {

                rejectButton.remove();

            }


            button.remove();


            localStorage.setItem(
                "workerStatus_" + workerName,
                "verified"
            );


            alert(
                workerName +
                " has been approved successfully."
            );

        });

    });



    /*
    ==============================
    REJECT WORKER
    ==============================
    */

    const rejectWorkerButtons =
        document.querySelectorAll(".reject-worker-btn");


    rejectWorkerButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const workerName =
                button.dataset.worker;


            const card =
                button.closest(".worker-card");

            const status =
                card.querySelector(".worker-status");


            card.dataset.status = "rejected";

            status.textContent = "Rejected";

            status.classList.remove("accepted");

            status.classList.add("upcoming");


            const approveButton =
                card.querySelector(".approve-worker-btn");


            if (approveButton) {

                approveButton.remove();

            }


            button.textContent = "Rejected";

            button.disabled = true;


            localStorage.setItem(
                "workerStatus_" + workerName,
                "rejected"
            );


            alert(
                workerName +
                " has been rejected."
            );

        });

    });



    /*
    ==================================================
    SERVICES
    ==================================================
    */

    const serviceCards =
        document.querySelectorAll(".service-card");


    /*
    ==============================
    ADD SERVICE
    ==============================
    */

    const addServiceButton =
        document.getElementById("addServiceBtn");


    if (addServiceButton) {

        addServiceButton.addEventListener("click", function () {

            const serviceName =
                prompt("Enter the new service name:");


            if (!serviceName) {

                return;

            }


            alert(
                serviceName +
                " has been added successfully."
            );

        });

    }



    /*
    ==============================
    EDIT SERVICE
    ==============================
    */

    const editServiceButtons =
        document.querySelectorAll(".edit-service-btn");


    editServiceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".service-card");


            const serviceName =
                card.dataset.service;


            const newName =
                prompt(
                    "Edit service name:",
                    serviceName
                );


            if (!newName) {

                return;

            }


            const heading =
                card.querySelector("h3");


            heading.textContent =
                "🛠 " + newName;


            card.dataset.service =
                newName;


            alert(
                "Service updated successfully."
            );

        });

    });



    /*
    ==============================
    ENABLE / DISABLE SERVICE
    ==============================
    */

    const toggleServiceButtons =
        document.querySelectorAll(".toggle-service-btn");


    toggleServiceButtons.forEach(function (button) {

        const card =
            button.closest(".service-card");


        const serviceName =
            card.dataset.service;


        const savedStatus =
            localStorage.getItem(
                "serviceStatus_" + serviceName
            );


        if (savedStatus === "disabled") {

            setServiceDisabled(button);

        }


        button.addEventListener("click", function () {

            const status =
                card.querySelector(".service-status");


            if (card.dataset.status === "disabled") {

                card.dataset.status = "active";

                status.textContent = "Active";

                status.classList.remove("upcoming");

                status.classList.add("accepted");

                button.textContent = "Disable";


                localStorage.setItem(
                    "serviceStatus_" +
                    card.dataset.service,
                    "active"
                );


                alert(
                    card.dataset.service +
                    " has been enabled."
                );


            } else {

                card.dataset.status = "disabled";

                status.textContent = "Disabled";

                status.classList.remove("accepted");

                status.classList.add("upcoming");

                button.textContent = "Enable";


                localStorage.setItem(
                    "serviceStatus_" +
                    card.dataset.service,
                    "disabled"
                );


                alert(
                    card.dataset.service +
                    " has been disabled."
                );

            }

        });

    });



    function setServiceDisabled(button) {

        const card =
            button.closest(".service-card");

        const status =
            card.querySelector(".service-status");


        card.dataset.status = "disabled";

        status.textContent = "Disabled";

        status.classList.remove("accepted");

        status.classList.add("upcoming");

        button.textContent = "Enable";

    }



    /*
    ==================================================
    BOOKINGS
    ==================================================
    */

    const bookingSearch =
        document.getElementById("bookingSearch");

    const bookingCards =
        document.querySelectorAll(".admin-booking-card");

    const bookingCount =
        document.getElementById("bookingCount");


    /*
    ==============================
    SEARCH BOOKINGS
    ==============================
    */

    if (bookingSearch) {

        bookingSearch.addEventListener("input", function () {

            const searchValue =
                bookingSearch.value.toLowerCase().trim();

            let visibleBookings = 0;


            bookingCards.forEach(function (card) {

                const service =
                    card.dataset.service.toLowerCase();

                const customer =
                    card.dataset.customer.toLowerCase();

                const worker =
                    card.dataset.worker.toLowerCase();


                const matches =
                    service.includes(searchValue) ||
                    customer.includes(searchValue) ||
                    worker.includes(searchValue);


                if (matches) {

                    card.style.display = "block";

                    visibleBookings++;

                } else {

                    card.style.display = "none";

                }

            });


            if (bookingCount) {

                bookingCount.textContent =
                    visibleBookings + " Bookings";

            }

        });

    }



    /*
    ==============================
    VIEW BOOKING
    ==============================
    */

    const viewBookingButtons =
        document.querySelectorAll(".view-booking-btn");


    viewBookingButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".admin-booking-card");


            const service =
                card.dataset.service;

            const customer =
                card.dataset.customer;

            const worker =
                card.dataset.worker;


            const status =
                card.querySelector(".booking-status").textContent;


            alert(
                "Booking Details\n\n" +
                "Service: " + service +
                "\nCustomer: " + customer +
                "\nWorker: " + worker +
                "\nStatus: " + status
            );

        });

    });
/* 
==============================
CANCEL BOOKING
==============================
*/

const cancelBookingButtons =
    document.querySelectorAll(".cancel-booking-btn");


cancelBookingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".admin-booking-card");

        const service =
            card.dataset.service;

        const customer =
            card.dataset.customer;

        const worker =
            card.dataset.worker;

        const status =
            card.querySelector(".booking-status");


        // Do not allow cancelling completed bookings
        if (card.dataset.status === "completed") {

            alert(
                "This booking is already completed and cannot be cancelled."
            );

            return;

        }


        // Do not allow cancelling an already cancelled booking
        if (card.dataset.status === "cancelled") {

            alert(
                "This booking has already been cancelled."
            );

            return;

        }


        // Confirmation
        const confirmCancel =
            confirm(
                "Are you sure you want to cancel this booking?\n\n" +
                "Service: " + service +
                "\nCustomer: " + customer +
                "\nWorker: " + worker
            );


        if (!confirmCancel) {

            return;

        }


        // Update booking status
        card.dataset.status = "cancelled";

        status.textContent = "Cancelled";


        // Change status styling
        status.classList.remove("accepted");
        status.classList.remove("upcoming");

        status.classList.add("upcoming");


        // Change button
        button.textContent = "Cancelled";

        button.disabled = true;


        // Save status in localStorage
        localStorage.setItem(
            "bookingStatus_" + customer + "_" + service,
            "cancelled"
        );


        alert(
            "Booking cancelled successfully."
        );

    });

});

/* 
==================================================
PAYMENTS
==================================================
*/


const paymentSearch =
    document.getElementById("paymentSearch");

const paymentCards =
    document.querySelectorAll(".admin-payment-card");

const paymentCount =
    document.getElementById("paymentCount");



/* 
==============================
SEARCH PAYMENTS
==============================
*/

if (paymentSearch) {

    paymentSearch.addEventListener("input", function () {

        const searchValue =
            paymentSearch.value.toLowerCase().trim();

        let visiblePayments = 0;


        paymentCards.forEach(function (card) {

            const service =
                card.dataset.service.toLowerCase();

            const customer =
                card.dataset.customer.toLowerCase();

            const worker =
                card.dataset.worker.toLowerCase();


            const matches =
                service.includes(searchValue) ||
                customer.includes(searchValue) ||
                worker.includes(searchValue);


            if (matches) {

                card.style.display = "block";

                visiblePayments++;

            } else {

                card.style.display = "none";

            }

        });


        if (paymentCount) {

            paymentCount.textContent =
                visiblePayments + " Transactions";

        }

    });

}



/* 
==============================
VIEW PAYMENT
==============================
*/

const viewPaymentButtons =
    document.querySelectorAll(".view-payment-btn");


viewPaymentButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".admin-payment-card");


        const service =
            card.dataset.service;

        const customer =
            card.dataset.customer;

        const worker =
            card.dataset.worker;

        const amount =
            card.dataset.amount;

        const status =
            card.querySelector(".payment-status").textContent;


        alert(
            "Payment Details\n\n" +
            "Service: " + service +
            "\nCustomer: " + customer +
            "\nWorker: " + worker +
            "\nAmount: Rs. " + amount +
            "\nStatus: " + status
        );

    });

});



/* 
==============================
MARK PAYMENT AS PAID
==============================
*/

const completePaymentButtons =
    document.querySelectorAll(".complete-payment-btn");


completePaymentButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".admin-payment-card");

        const service =
            card.dataset.service;

        const customer =
            card.dataset.customer;


        if (card.dataset.status === "paid") {

            alert(
                "This payment is already completed."
            );

            return;

        }


        const confirmPayment =
            confirm(
                "Mark this payment as completed?\n\n" +
                "Service: " + service +
                "\nCustomer: " + customer
            );


        if (!confirmPayment) {

            return;

        }


        card.dataset.status = "paid";


        const status =
            card.querySelector(".payment-status");


        status.textContent = "Paid";


        status.classList.remove("upcoming");

        status.classList.add("accepted");


        button.textContent = "Paid";

        button.disabled = true;


        localStorage.setItem(
            "paymentStatus_" + customer + "_" + service,
            "paid"
        );


        alert(
            "Payment marked as completed successfully."
        );

    });

});

// ==================================================
// ADMIN SETTINGS
// ==================================================

const adminSettingsForm =
    document.getElementById("adminSettingsForm");

if (adminSettingsForm) {

    const adminBookingNotifications =
        document.getElementById(
            "adminBookingNotifications"
        );

    const adminPaymentNotifications =
        document.getElementById(
            "adminPaymentNotifications"
        );

    const adminComplaintNotifications =
        document.getElementById(
            "adminComplaintNotifications"
        );

    const maintenanceMode =
        document.getElementById(
            "maintenanceMode"
        );


    // Restore saved settings

    const savedAdminSettings =
        JSON.parse(
            localStorage.getItem(
                "kaamMitraAdminSettings"
            )
        );


    if (savedAdminSettings) {

        if (adminBookingNotifications) {

            adminBookingNotifications.checked =
                savedAdminSettings.bookingNotifications;

        }


        if (adminPaymentNotifications) {

            adminPaymentNotifications.checked =
                savedAdminSettings.paymentNotifications;

        }


        if (adminComplaintNotifications) {

            adminComplaintNotifications.checked =
                savedAdminSettings.complaintNotifications;

        }


        if (maintenanceMode) {

            maintenanceMode.checked =
                savedAdminSettings.maintenanceMode;

        }

    }


    // Save settings

    adminSettingsForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const password =
                document.getElementById(
                    "adminPassword"
                ).value;

            const confirmPassword =
                document.getElementById(
                    "adminConfirmPassword"
                ).value;


            if (
                password !== "" &&
                password !== confirmPassword
            ) {

                alert(
                    "New password and confirm password do not match."
                );

                return;

            }


            const adminSettings = {

                bookingNotifications:
                    adminBookingNotifications.checked,

                paymentNotifications:
                    adminPaymentNotifications.checked,

                complaintNotifications:
                    adminComplaintNotifications.checked,

                maintenanceMode:
                    maintenanceMode.checked

            };


            localStorage.setItem(
                "kaamMitraAdminSettings",
                JSON.stringify(adminSettings)
            );


            alert(
                "Admin settings saved successfully!"
            );

        }
    );

}
});