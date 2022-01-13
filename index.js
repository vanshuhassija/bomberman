const bombs = [];

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
            if(bombs.includes(index)){
                column.innerHTML = "💣";
                column.style.backgroundColor = "red";
            }
            else{
                column.style.background="green";
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
