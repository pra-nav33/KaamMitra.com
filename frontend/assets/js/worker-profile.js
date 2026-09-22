const urlParams = new URLSearchParams(window.location.search);

const selectedWorker = urlParams.get("worker") || "ram";


const workers = {

    ram: {

        name: "Ram Thapa",

        profession: "🔧 Professional Plumber",

        verified: "✓ Verified Worker",

        rating: "⭐ 4.8 / 5 (120 Reviews)",

        location: "📍 Kathmandu",

        experience: "💼 5 Years Experience",

        price: "💰 Starting from Rs. 500",

        availability: "🟢 Available",

        image: "../assets/images/profile.png",

        about:
            "Ram Thapa is an experienced professional plumber providing reliable plumbing services for homes and businesses.",

        services: [
            "Tap & Pipe Repair",
            "Leakage Repair",
            "Water Tank & Pump"
        ],

        workingHours:
            "Working Hours: 8:00 AM - 6:00 PM",

        requestHeading:
            "Need a Plumber?",

        requestDescription:
            "Request Ram Thapa for your plumbing work."

    },


    suresh: {

        name: "Suresh Kumar",

        profession: "⚡ Professional Electrician",

        verified: "✓ Verified Worker",

        rating: "⭐ 4.7 / 5 (98 Reviews)",

        location: "📍 Lalitpur",

        experience: "💼 6 Years Experience",

        price: "💰 Starting from Rs. 600",

        availability: "🟢 Available",

        image: "../assets/images/profile.png",

        about:
            "Suresh Kumar is an experienced electrician providing reliable electrical repair and installation services for homes and businesses.",

        services: [
            "Wiring & Installation",
            "Switch & Socket Repair",
            "Electrical Fault Repair"
        ],

        workingHours:
            "Working Hours: 9:00 AM - 6:00 PM",

        requestHeading:
            "Need an Electrician?",

        requestDescription:
            "Request Suresh Kumar for your electrical work."

    },


    hari: {

        name: "Hari Sharma",

        profession: "💻 IT & Technical Support",

        verified: "✓ Verified Worker",

        rating: "⭐ 4.9 / 5 (150 Reviews)",

        location: "📍 Bhaktapur",

        experience: "💼 4 Years Experience",

        price: "💰 Starting from Rs. 800",

        availability: "🟢 Available",

        image: "../assets/images/profile.png",

        about:
            "Hari Sharma provides professional computer, software and technical support services for homes and businesses.",

        services: [
            "Computer Repair",
            "Software Installation",
            "Technical Support"
        ],

        workingHours:
            "Working Hours: 10:00 AM - 6:00 PM",

        requestHeading:
            "Need IT Support?",

        requestDescription:
            "Request Hari Sharma for your technical work."

    }

};


const worker = workers[selectedWorker] || workers.ram;


document.getElementById("workerName").textContent =
    worker.name;

document.getElementById("workerProfession").textContent =
    worker.profession;

document.getElementById("workerVerified").textContent =
    worker.verified;

document.getElementById("workerRating").textContent =
    worker.rating;

document.getElementById("workerLocation").textContent =
    worker.location;

document.getElementById("workerExperience").textContent =
    worker.experience;

document.getElementById("workerPrice").textContent =
    worker.price;

document.getElementById("workerAvailability").textContent =
    worker.availability;


document.getElementById("workerImage").src =
    worker.image;

document.getElementById("workerImage").alt =
    worker.name;


document.getElementById("workerAbout").textContent =
    worker.about;


const servicesList =
    document.getElementById("workerServices");

servicesList.innerHTML = "";

worker.services.forEach(function(service) {

    const li = document.createElement("li");

    li.textContent = service;

    servicesList.appendChild(li);

});


document.getElementById("pricingText").textContent =
    worker.price.replace("💰 ", "");


document.getElementById("availabilityText").textContent =
    worker.availability;

document.getElementById("workingHours").textContent =
    worker.workingHours;


document.getElementById("requestHeading").textContent =
    worker.requestHeading;

document.getElementById("requestDescription").textContent =
    worker.requestDescription;


const requestURL =
    "../customer/request-service.html?worker=" +
    selectedWorker;


document.getElementById("mainRequestButton").href =
    requestURL;

document.getElementById("bottomRequestButton").href =
    requestURL;