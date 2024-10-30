const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json({ msg: 'Hello from Backend' });
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});