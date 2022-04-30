import { React, useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const board = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    board.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      board[0] === board[1] &&
      board[0] === board[2] &&
      board[0] !== "empty"
    ) {
      setWinMessage(`${board[0]} won`);
    } else if (
      board[3] !== "empty" &&
      board[3] === board[4] &&
      board[4] === board[5]
    ) {
      setWinMessage(`${board[3]} won`);
    } else if (
      board[6] !== "empty" &&
      board[6] === board[7] &&
      board[7] === board[8]
    ) {
      setWinMessage(`${board[6]} won`);
    } else if (
      board[0] !== "empty" &&
      board[0] === board[3] &&
      board[3] === board[6]
    ) {
      setWinMessage(`${board[0]} won`);
    } else if (
      board[1] !== "empty" &&
      board[1] === board[4] &&
      board[4] === board[7]
    ) {
      setWinMessage(`${board[1]} won`);
    } else if (
      board[2] !== "empty" &&
      board[2] === board[5] &&
      board[5] === board[8]
    ) {
      setWinMessage(`${board[2]} won`);
    } else if (
      board[0] !== "empty" &&
      board[0] === board[4] &&
      board[4] === board[8]
    ) {
      setWinMessage(`${board[0]} won`);
    } else if (
      board[2] !== "empty" &&
      board[2] === board[4] &&
      board[4] === board[6]
    ) {
      setWinMessage(`${board[2]} won`);
    }
  };

  const chooseSquare = (squareNumber) => {
    if (winMessage) {
      return toast.success(winMessage);
    }

    if (board[squareNumber] === "empty") {
      board[squareNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast.error("Already Filled");
    }
    checkIsWinner();
  };

  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <h1 className="Title-text">{isCross ? "Cross" : "Circle"} Turns</h1>
      <div className="board">
        {board.map((item, index) => {
          return (
            <div className="square" onClick={() => chooseSquare(index)}>
              <Icon symbol={item} />
            </div>
          );
        })}
      </div>
      <div className="result">
        <h1 className="winner">{winMessage}</h1>
        <button onClick={reloadGame}>Reload Game</button>
      </div>
    </div>
  );
};
export default App;
