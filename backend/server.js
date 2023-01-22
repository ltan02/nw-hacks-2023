const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users")

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING);

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  
  res.json(user);
})

// tells API to start
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});