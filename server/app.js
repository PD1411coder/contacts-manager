const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const ConnetToDb = require("./config/db");
const auth = require("./routes/auth");
const JWT = require("./middleware/JWT");
//middleware
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// app.get("/protected", JWT, (req, res) => {
//   return res.status(200).json({
//     user: req.user
//   });
// });
app.use('/api', auth);
//port
const PORT =process.env.PORT || 5000;
app.listen(PORT, async() => {
  try{
    await ConnetToDb();
    console.log(`Server started on port ${PORT}`);
  }catch(err){
    console.log(err);
  }
});
