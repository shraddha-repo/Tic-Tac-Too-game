let boxes  = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContaienr = document.querySelector(".msg-container");
let message = document.querySelector("#msg")

let turnsO = true;   //player x and player 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnsO = true;
    enableBoxes();
    msgContaienr.classList.add("hide");
}


boxes.forEach( (box) =>{
    box.addEventListener("click", () => {
    if(turnsO){
      box.innerText = "O"
      turnsO = false;
    } else {
      box.innerText = "x"
      turnsO = true
    }
    box.disabled = true;
    checkWinner();
    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    msgContaienr.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
      for(let pattern of winPatterns){
      let position1 = boxes[pattern[0]].innerText;
      let position2 = boxes[pattern[1]].innerText;
      let position3 = boxes[pattern[2]].innerText;
     
      if(position1 != "", position2 != "", position3 != ""){
       if(position1 === position2 && position2 === position3){
           console.log("winner",position1);
           showWinner(position1);
       }
      }
    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);