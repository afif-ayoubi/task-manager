const Board = require("../models/board");

const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    const board = await Board.create({ name });
    return res.status(201).json(board);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    return res.status(200).json(boards);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedBoard = await Board.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedBoard) {
      return res.status(404).json({ error: "Board not found" });
    }
    return res.status(200).json(updatedBoard);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBoard = await Board.findByIdAndDelete(id);
    if (!deletedBoard) {
      return res.status(404).json({ error: "Board not found" });
    }
    return res.status(200).json({ message: "Board deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createBoard,
  getBoards,
  updateBoard,
  deleteBoard,
};
