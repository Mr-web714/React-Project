const mongoose = require("mongoose");
const User = require("../models/user");

const claimHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  pointsAwarded: {
    type: Number,
  },
  claimedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ClaimHistory", claimHistorySchema);
