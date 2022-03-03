const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date,
  },
  userSubmitted: {
    type: String,
    required: [true, "Please add a user"],
    maxlength: [40, "User cannot be more than 40 characters"],
  },
  userAnswered: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
  },
  question: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
  },
  videoResponse: {
    type: String,
    required: false,
  },
  textResponse: {
    type: String,
    required: false,
  },
});

module.exports =
  mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);
