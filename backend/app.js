if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/leaderboard", userRoutes);

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

app.listen(8080, () => {
  console.log("sever is working at port 8080");
});
