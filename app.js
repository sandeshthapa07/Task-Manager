const express = require("express");
const app = express();
const tasks = require("./routes/Tasks");
const connectDB = require("./db/connect");
require('dotenv').config();
const port = 3000;

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.get("/get/people", (req, res) => {
  res.status(200).json({ status: true });
});

app.get("/", (req, res) => {
  res.status(200).json({ status: true });
});

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, console.log(`Server is running at port  ${port}......`));
};

start();
