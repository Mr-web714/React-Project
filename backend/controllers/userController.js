const User = require("../models/user");
const ClaimHistory = require("../models/claimHistory");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
};

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId, pointsAwarded: points });
  await history.save();

  res.json({ message: "points claimed succesfully", user, points });
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((user, idx) => ({
    rank: idx + 1,
    image: user.image,
    name: user.name,
    totalPoints: user.totalPoints,
  }));

  res.json(leaderboard);
};
