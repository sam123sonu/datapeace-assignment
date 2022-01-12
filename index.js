const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://bg:6705@cluster0.wqlq0.mongodb.net/datapeace?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((connection) => {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to user api" });
  });
//all the apis routes
  require("./routes/createuser")(app);
  require("./routes/getusers")(app);
  require("./routes/getuser")(app);
  require("./routes/updateuser")(app);
  require("./routes/deleteuser")(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});