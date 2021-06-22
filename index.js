let express = require("express");
let app = express();
const hostname = "localhost";
const port = 8000;
app.get("/HelloWorld", (req, res) => {
    res.send("<h1>Hello World<h1>");
});
app.listen(port, hostname, () => {
    console.log(`I'm listening on ${hostname}:${port}`);
});
