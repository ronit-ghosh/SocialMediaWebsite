const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const routes = require("./routes/index");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", routes);

app.get('/', (req, res) => {
    res.json({ msg: 'Hello from Backend' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`); // npm start
});
