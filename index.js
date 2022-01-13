const bombs = [];
let gamePoints=0;
let canPlay=true;

function updateGamePoints(){
    const gamePointsElement = document.getElementById("gamePoints");
    gamePointsElement.innerHTML = "Game Points"+gamePoints;
}

function addGrid() {
  const appElement = document.getElementById("app");
  for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < 9; j++) {
      const index = i * 9 + j;
      const column = document.createElement("div");
      column.style.display = "inline-block";
      column.style.width = "60px";
      column.style.height = "60px";
      column.style.border = "1px solid black";
      column.style.textAlign = "center";
      column.style.verticalAlign = "middle";
      column.setAttribute("index", index);
        column.addEventListener("click",function(){
            if(canPlay){
            if(bombs.includes(index)){
                column.style.backgroundColor = "red";
                canPlay=false;
            }
            else{
                column.style.background="green";
                gamePoints++;
                updateGamePoints();
            }
        }
        })

      row.appendChild(column);
    }
    appElement.appendChild(row);
  }
}

function generateBombs() {
 while(bombs.length!==10){
    const randomNum = Math.floor(Math.random() * 100);
    if(randomNum<81&&!bombs.includes(randomNum)){
        bombs.push(randomNum);
    }
 }
}



addGrid();
generateBombs();
console.log(bombs);

// Show all the Bombs once a bomb is clicked
// Give a button to start the game again
// Every column should be only clickable once
//if all normal cells are clicked and none is left then show alert that you won
//if a bomb is clicked then show alert that you lost
