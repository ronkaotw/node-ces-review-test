const mongoose = require("mongoose");

const consultantSchema = new mongoose.Schema({
  name: String,
  expertise: String,
});

const Consultant = mongoose.model("Consultant", consultantSchema);

module.exports = Consultant;
