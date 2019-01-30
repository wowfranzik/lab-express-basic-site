const express = require("express");

const app = express();

app.listen(5555, () => {
  console.log(" ready to go");
});

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + `/views/index.html`);
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + `/views/about.html`);
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + `/views/gallery.html`);
});
