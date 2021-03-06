const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/PaseCovidAPI";
const clusterUri =
  "mongodb+srv://doku-emma:iqRUIRmHTdwvCHlV@cluster0.ij3jb.mongodb.net/PaseCovidAPI?retryWrites=true&w=majority";

mongoose.connect(clusterUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = mongoose.Schema({
  Country: String,
  Active: Number,
  Deaths: Number,
  Recoveries: Number,
  Confirmed: Number,
  UpdatedOn: String,
});

const Case = mongoose.model("Case", schema);

module.exports = Case;
