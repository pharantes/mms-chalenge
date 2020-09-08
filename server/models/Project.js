const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  start_date: Date,
  time_slack: String,
  supervisor: String
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;