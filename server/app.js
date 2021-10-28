const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Groot Route");
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log (`App listening on port ${PORT}`));