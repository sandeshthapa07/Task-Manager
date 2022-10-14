const express = require("express");
const app = express();
const tasks = require("./routes/Tasks");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require('./middleware/errorHandler');
require("dotenv").config()
const port = 3000;
// midddleware
app.use(express.json());
app.use(express.static('./public'))
app.use(errorHandlerMiddleware);

// routes

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is running at port  ${port}......`));
  } catch (error) {
    console.log(error);
  }
};

start();
