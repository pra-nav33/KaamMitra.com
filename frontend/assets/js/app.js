// ==================================================
// KaamMitra.com
// Shared Data - Version 1
// ==================================================


// Get workers
function getWorkers() {

    return JSON.parse(
        localStorage.getItem("kaammitra_workers")
    ) || [];

}


// Save workers
function saveWorkers(workers) {

    localStorage.setItem(
        "kaammitra_workers",
        JSON.stringify(workers)
    );

}


// Add worker
function addWorker(worker) {

    let workers = getWorkers();

    workers.push(worker);

    saveWorkers(workers);

}


// Get bookings
function getBookings() {

    return JSON.parse(
        localStorage.getItem("kaammitra_bookings")
    ) || [];

}


// Save bookings
function saveBookings(bookings) {

    localStorage.setItem(
        "kaammitra_bookings",
        JSON.stringify(bookings)
    );

}


// Get complaints
function getComplaints() {

    return JSON.parse(
        localStorage.getItem("kaammitra_complaints")
    ) || [];

}


// Save complaints
function saveComplaints(complaints) {

    localStorage.setItem(
        "kaammitra_complaints",
        JSON.stringify(complaints)
    );

}