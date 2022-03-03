const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "Please add a user"],
    maxlength: [40, "User cannot be more than 40 characters"],
  },
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
  },
});

module.exports =
  mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);
