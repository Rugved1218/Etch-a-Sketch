function makeGrid(gridSize){
    for(let i=1;i<=gridSize;i++){

    let row=document.createElement("div");
    row.setAttribute("class","row");

    for(let column=1;column<=gridSize;column++){
        let square=document.createElement("div");
        square.setAttribute("class","square");
        row.appendChild(square);
    }

    container.append(row);
}
}

function hoverTrail(color){
square=document.querySelectorAll(".container .row .square ")


square.forEach(square => {square.addEventListener("mouseover",()=>{

    square.style.backgroundColor= color;

})
});
}

let container=document.querySelector(".container");

let gridSize=16;
makeGrid(gridSize);

hoverTrail("gold");

let gridSizeEditorBtn=document.getElementById("gridSizeEditorBtn");


gridSizeEditorBtn.addEventListener("click",() =>{

    let newGridSize=prompt("Enter desired Grid Size",16);
    container.textContent="";

    makeGrid(newGridSize);

    let originalPadding=50;
    let originalGridSize=16;
    let n=((originalGridSize*originalPadding)/newGridSize)+"px";
    console.log(n);

    square=document.querySelectorAll(".container .row .square ")
    square.forEach(square=>{

        square.style.height=n;
        square.style.width=n;


    })
   
   hoverTrail("gold");

})

let eraserBtn=document.querySelector(".Eraser");

let eraserActive=false;

function eraser(){

    eraserBtn.addEventListener("click",()=>{
        eraserActive= !eraserActive;

    if(eraserActive){
    hoverTrail("white");
    eraserBtn.textContent="Draw Mode";
    }

    else{
        eraserBtn.textContent="Eraser Mode";
        hoverTrail("gold");
    }
    });
}

eraser();

