/* =========================================================
   KaamMitra.com
   CUSTOMER BOOKING JAVASCRIPT
   ========================================================= */


/* =========================================================
   BOOKING CONFIRMATION
   ========================================================= */

const confirmBookingBtn = document.getElementById("confirmBookingBtn");

if (confirmBookingBtn) {

    confirmBookingBtn.addEventListener("click", function () {

        const confirmation = confirm(
            "Are you sure you want to confirm this booking?"
        );

        if (confirmation) {

            alert(
                "Your booking has been confirmed successfully!"
            );

            window.location.href = "bookings.html";

        }

    });

}



/* =========================================================
   CANCEL BOOKING
   ========================================================= */

const cancelBookingBtn = document.getElementById("cancelBookingBtn");

if (cancelBookingBtn) {

    cancelBookingBtn.addEventListener("click", function () {

        const confirmation = confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (confirmation) {

            alert(
                "Your booking has been cancelled successfully."
            );

            window.location.href = "bookings.html";

        }

    });

}