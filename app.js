const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.static('./public'));

//routes
app.use("/api/v1/tasks", tasks);

const PORT = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();
