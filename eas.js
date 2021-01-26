function grid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";

    for (i=0; i<16; i+=1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
      
        for (k=0; k<16; k+=1) {
            var box = document.createElement("div"); 
            box.className = "box";
            box.id = "box" + (i*16+k);
            box.addEventListener("mouseover", changeColor)
            row.appendChild(box);
        };
      
        container.appendChild(row);      
    };
  
    el.appendChild(container);
};

grid(document.body);

function changeColor (event){
    var whichGrid = document.getElementById(event.target.id);
    whichGrid.style = "background-color: black";
}

function resetColor () {
for (var i = 0; i < 255; i++) {
    var gridToReset = document.getElementById("box"+i);
    gridToReset.style = "background-color: white";

}

}

var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetColor);