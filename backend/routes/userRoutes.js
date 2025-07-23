const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/userController");
// const multer = require("multer");

router.get("/users", controller.getUsers);
router.post("/users/", controller.addUser);
router.post("/claims", controller.claimPoints);
router.get("/leaderboardList", controller.getLeaderboard);

module.exports = router;
