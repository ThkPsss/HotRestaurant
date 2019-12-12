var reservations = [
    {
        id: 1,
        name: "Chris",
        Email: "christanspence@gmail.com",
        phone: 9999999999
    }
]
var waitlist = [

];
// On click for the reservation submit button
$("#submitButton").on("click", function(event) {
    event.preventDefault();
    // creating variable to hold the new reservation
    var newReservation = {
        name: $("#reserve-name").val().trim(),
        number: $("#reserve-number").val().trim(),
        email: $("#reserve-email").val().trim(),
        id: $("#reserve-unique-id").val().trim(),
    };
    $.post("/api/reservations", newReservation)
        .then(function(data) {
            alert("Making reservation");
        });
});