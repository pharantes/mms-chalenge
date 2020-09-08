const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  first_name: String,
  second_name: String,
  role: String
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
