const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts!" });
});

// GET single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get single workout!" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "Post a new workout!" });
});

//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout!" });
});

//Update a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout!" });
});

module.exports = router;
