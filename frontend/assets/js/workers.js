// ==================================================
// KaamMitra - Find Workers
// workers.js
// ==================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("KaamMitra Workers JavaScript loaded successfully!");

    // --------------------------------------------------
    // Get Elements
    // --------------------------------------------------

    const searchButton = document.getElementById("searchWorkersBtn");

    const serviceInput = document.getElementById("service");
    const locationInput = document.getElementById("location");
    const categoryInput = document.getElementById("category");

    const ratingInput = document.getElementById("rating");
    const priceInput = document.getElementById("price");
    const availabilityInput = document.getElementById("availability");
    const verificationInput = document.getElementById("verification");

    const workerCards = document.querySelectorAll(".worker-card");


    // --------------------------------------------------
    // Search Workers
    // --------------------------------------------------

    function searchWorkers() {

        const service = serviceInput.value.toLowerCase().trim();
        const location = locationInput.value.toLowerCase().trim();
        const category = categoryInput.value;

        const rating = ratingInput.value;
        const price = priceInput.value;
        const availability = availabilityInput.value;
        const verification = verificationInput.value;

        let visibleWorkers = 0;


        workerCards.forEach(function (card) {

            const workerService = card.dataset.service;
            const workerLocation = card.dataset.location;
            const workerCategory = card.dataset.category;
            const workerRating = parseFloat(card.dataset.rating);
            const workerPrice = card.dataset.price;
            const workerAvailability = card.dataset.availability;
            const workerVerification = card.dataset.verification;


            // --------------------------------------------------
            // Search Conditions
            // --------------------------------------------------

            const serviceMatch =
                service === "" ||
                workerService.includes(service);

            const locationMatch =
                location === "" ||
                workerLocation.includes(location);

            const categoryMatch =
                category === "" ||
                workerCategory === category;

            const ratingMatch =
                rating === "" ||
                workerRating >= parseFloat(rating);

            const priceMatch =
                price === "" ||
                workerPrice === price;

            const availabilityMatch =
                availability === "" ||
                workerAvailability === availability ||
                (availability === "today" &&
                 workerAvailability === "available");

            const verificationMatch =
                verification === "" ||
                workerVerification === verification;


            // --------------------------------------------------
            // Show / Hide Worker
            // --------------------------------------------------

            if (
                serviceMatch &&
                locationMatch &&
                categoryMatch &&
                ratingMatch &&
                priceMatch &&
                availabilityMatch &&
                verificationMatch
            ) {

                card.style.display = "flex";
                visibleWorkers++;

            } else {

                card.style.display = "none";

            }

        });


        // --------------------------------------------------
        // No Results Message
        // --------------------------------------------------

        let noResults = document.getElementById("noResultsMessage");

        if (!noResults) {

            noResults = document.createElement("p");

            noResults.id = "noResultsMessage";

            noResults.textContent =
                "No workers found matching your search.";

            noResults.style.textAlign = "center";
            noResults.style.marginTop = "20px";

            document.querySelector(".worker-results")
                .appendChild(noResults);
        }


        if (visibleWorkers === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }


    // --------------------------------------------------
    // Search Button
    // --------------------------------------------------

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchWorkers
        );

    }


    // --------------------------------------------------
    // Press Enter to Search
    // --------------------------------------------------

    [serviceInput, locationInput].forEach(function (input) {

        if (input) {

            input.addEventListener("keypress", function (event) {

                if (event.key === "Enter") {

                    searchWorkers();

                }

            });

        }

    });


    // --------------------------------------------------
    // Automatically Apply Filters
    // --------------------------------------------------

    [
        categoryInput,
        ratingInput,
        priceInput,
        availabilityInput,
        verificationInput
    ].forEach(function (input) {

        if (input) {

            input.addEventListener(
                "change",
                searchWorkers
            );

        }

    });

});