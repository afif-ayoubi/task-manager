import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { setBoards } from "../redux/features/boardSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBoardapi } from "../../apis/board";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const createBoard = async () => {
    setLoading(true);
    try {
      dispatch(createBoardapi);
      navigate(`/boards/${res.id}`);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingButton
        variant="outlined"
        color="success"
        onClick={createBoard}
        loading={loading}
      >
        Click here to create your first board
      </LoadingButton>
    </Box>
  );
};

export default Home;
