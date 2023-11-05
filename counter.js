export function start() {
  var squares = document.querySelectorAll(".square");
  var who_win = document.querySelector(".winner");
  var switch_xo = 0;
  var gameFinished = false;
  const restartbtn = document.querySelector(".restart");
  squares.forEach(element => {
    restartbtn.addEventListener("click",()=>{element.innerHTML="";gameFinished=false;who_win.innerHTML="";});
    element.addEventListener("click", () => {
      if (!gameFinished) {
        if (element.innerHTML === "") {
          if (switch_xo % 2 === 0) {
            element.innerHTML = "x";
          } else {
            element.innerHTML = "o";
          }
          switch_xo++;

          if (
            (squares[0].innerHTML === "x" && squares[1].innerHTML === "x" && squares[2].innerHTML === "x") ||
            (squares[3].innerHTML === "x" && squares[4].innerHTML === "x" && squares[5].innerHTML === "x") ||
            (squares[6].innerHTML === "x" && squares[7].innerHTML === "x" && squares[8].innerHTML === "x") ||
            (squares[0].innerHTML === "x" && squares[3].innerHTML === "x" && squares[6].innerHTML === "x") ||
            (squares[1].innerHTML === "x" && squares[4].innerHTML === "x" && squares[7].innerHTML === "x") ||
            (squares[2].innerHTML === "x" && squares[5].innerHTML === "x" && squares[8].innerHTML === "x") ||
            (squares[0].innerHTML === "x" && squares[4].innerHTML === "x" && squares[8].innerHTML === "x") ||
            (squares[2].innerHTML === "x" && squares[4].innerHTML === "x" && squares[6].innerHTML === "x")
          ) {
            who_win.innerHTML = "You win!";
            gameFinished = true;
          } else if (
            (squares[0].innerHTML === "o" && squares[1].innerHTML === "o" && squares[2].innerHTML === "o") ||
            (squares[3].innerHTML === "o" && squares[4].innerHTML === "o" && squares[5].innerHTML === "o") ||
            (squares[6].innerHTML === "o" && squares[7].innerHTML === "o" && squares[8].innerHTML === "o") ||
            (squares[0].innerHTML === "o" && squares[3].innerHTML === "o" && squares[6].innerHTML === "o") ||
            (squares[1].innerHTML === "o" && squares[4].innerHTML === "o" && squares[7].innerHTML === "o") ||
            (squares[2].innerHTML === "o" && squares[5].innerHTML === "o" && squares[8].innerHTML === "o") ||
            (squares[0].innerHTML === "o" && squares[4].innerHTML === "o" && squares[8].innerHTML === "o") ||
            (squares[2].innerHTML === "o" && squares[4].innerHTML === "o" && squares[6].innerHTML === "o")
          ) {
            who_win.innerHTML = "You lose!";
            gameFinished = true;
          } else {
            var isTie = true;
            squares.forEach(square => {
              if (square.innerHTML === "") {
                isTie = false;
              }
            });
            if (isTie) {
              who_win.innerHTML = "Tie!";
              gameFinished = true;
            }
          }
        }
      }
    });
  });
}
