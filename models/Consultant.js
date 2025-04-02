const mongoose = require("mongoose");

const consultantSchema = new mongoose.Schema({
  consultantId: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: String,
});

const Consultant = mongoose.model("Consultant", consultantSchema);

module.exports = Consultant;
