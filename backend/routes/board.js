const express = require("express");
const router = express.Router();
const {
  createBoard,
  getBoards,
  updateBoard,
  deleteBoard,
} = require("../controllers/board");
const isAuthenticated = require("../middlewares/auth");

router.post("/boards", isAu, createBoard);
router.get("/boards", isAuthenticated, getBoards);
router.put("/boards/:id", isAuthenticated, updateBoard);
router.delete("/boards/:id", isAuthenticated, deleteBoard);

module.exports = router;
