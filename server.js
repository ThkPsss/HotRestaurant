var express = require("express");

var app = express();
var path = require("path");


var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/api/reservations/", (req, res) => {
    reservations.push(req.body.reservation);
})



app.listen(PORT, function() {
    console.log("This shit listening on PORT: " + PORT);
  });