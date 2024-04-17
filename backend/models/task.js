const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    attachments: [String],
    tags: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }],
  });
  const task = mongoose.model("task", taskSchema);
module.exports = task;