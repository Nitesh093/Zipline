const express = require('express');
const mongoDB = require('./db');
const app = express();

app.use(express.json());
app.use('/api', require("./Routes/CreateTruck"));
app.use('/api', require("./Routes/CreateTrip"));
app.get('', (req, res) => {
  res.send("I am the backend part");
});



app.listen(3000, () => {
  console.log("Port is 3000");
}); 