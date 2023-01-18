const express = require("express");
const cors=require("cors")
// const bodyParser = require("body-parser");
// const connecDB = require("./config/connectDB");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes=require("./routes/taskRoute");



const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/api/tasks",taskRoutes);



 
// app.listen(PORT, () => {
//         console.log("in server 3000", PORT);
// });

mongoose
  .connect(
    "mongodb+srv://ajayindia8001:Ajvennila01@cluster0.jtxheil.mongodb.net/mernTaskApp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 3000")
  )
  .catch((err) => console.log(err));






// connecDB();
// mongoose.connect("mongodb+srv://ajayindia8001:Ajvennila01@cluster0.udwafpl.mongodb.net/?retryWrites=true&w=majority")

// const startServer = async () => {
//   try {
//     await connecDB();
//     app.listen(PORT, () => {
//       console.log("in server 3000", PORT);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer()
