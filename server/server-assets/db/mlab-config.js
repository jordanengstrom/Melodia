var mongoose = require("mongoose");

var connectionString = "mongodb://user:user@ds012538.mlab.com:12538/playlists";

var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on("error", err => {
  console.error("mlab Error: ", err);
});

connection.once("open", () => {
  console.log("mlab connection established!");
});