const express = require('express');
const app = express();
const session = require('express-session');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
dotenv.config();

const {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} = require("./utils/constant");


const apiRouter = require("./routes/index");

//Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
mongoose.set('strictQuery', false)
app.use('/',apiRouter)

/**
 * Establish a connection to database
 */
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex:true
    });
  } catch (error) {
    console.log(error.toString());
  }
};

// /**
//  * Connection status
//  *
//  */
const connectionDBStatus = async () => {
  try {
    var db = mongoose.connection;
    db.on("error", (error) => {
      throw new Error(ERROR_MESSAGE.PG_DB_CONNECTION_ERROR);
    });
    db.once("open", function (callback) {
      console.log(SUCCESS_MESSAGE.MONGO_CONNECTION_SUCCESS);
    });
  } catch (error) {
    console.log(error.toString());
    throw new Error(ERROR_MESSAGE.PG_DB_CONNECTION_ERROR);
  }
};

connectDatabase();
connectionDBStatus();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));