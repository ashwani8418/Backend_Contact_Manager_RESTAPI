const express = require("express");
const appRoute = require('./routes/route')


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// 

/** routes */

app.use('/api', appRoute);

app.get("/", (req, res) => res.send("Hello World!"));


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
