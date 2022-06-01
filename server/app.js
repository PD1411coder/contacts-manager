const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const ConnetToDb = require("./config/db");
const auth = require("./routes/auth");
const ContactRoute = require("./routes/ContactsRoute");
const JWT = require("./middleware/JWT");
//middleware
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/protected", JWT, (req, res) => {
  return res.status(200).json({
    user: req.user._doc
  });
});
app.use('/api', auth);
app.use('/api', ContactRoute)
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
