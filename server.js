var express = require("express");

var app = express();
var path = require("path");


var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/tables", function (req, res) {
//     res.sendFile(path.join(__dirname, "tables.html"));
// });

// app.get("/reservation", function (req, res) {
//     res.sendFile(path.join(__dirname, "reservation.html"));
// });

app.get("/:page?", (req, res) => {
    const {page} = req.params;
    res.sendfile(path.join(__dirname, `${page || 'index'}.html`));
});

app.route("/api/reservations/").post((req, res) => {
    reservations.push(req.body.reservation);
    res.json(req.body.reservation);
}).get((req, res) => {
    res.json(reservations);
});



app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
}); 