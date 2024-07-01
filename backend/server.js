const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hi, your application is running...");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server started on PORT --${PORT}`));
