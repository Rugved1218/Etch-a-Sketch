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
let color="gold";

let gridSize=16;
makeGrid(gridSize);
let originalColor="gold";
hoverTrail(originalColor);

let gridSizeEditorBtn=document.getElementById("gridSizeEditorBtn");

let eraserBtn=document.querySelector(".Eraser");

let eraserActive=false;

function eraser(){

    eraserBtn.addEventListener("click",()=>{
        eraserActive= !eraserActive;

    if(eraserActive){
        color="white"
        hoverTrail("white");
        eraserBtn.textContent="Draw Mode";
    }

    else{
        eraserBtn.textContent="Eraser Mode";
        hoverTrail(color);
    }
    });
}

eraser();

let rainbowBtn=document.querySelector(".RainbowBtn")

function randomRainbowColor(){
    colorSet=["#9400D3","#4B0082","#0000FF","#00FF00","#FFFF00","#FF7500","#FF0000"]
    function random(){
        value=Math.floor(Math.random()*(colorSet.length))+1;
        return value;
    }
    color=colorSet[random()];
    return color;
}

let rainbowMode=false;
function rainbow(){
    rainbowBtn.addEventListener("click",()=>
    {
        rainbowMode= !rainbowMode;
        if(rainbowMode){

            square=document.querySelectorAll(".container .row .square ")
            square.forEach(square => {square.addEventListener("mouseover",()=>{
                color=randomRainbowColor();
                square.style.backgroundColor= color;
            })
            });

            rainbowBtn.textContent="Default Mode";
        }
        else{
            rainbowBtn.textContent="Rainbow Mode";
            hoverTrail(originalColor)
        }
        
    });
}

rainbow();


gridSizeEditorBtn.addEventListener("click",() =>{

    let newGridSize;

    function inputsize(){
        newGridSize=prompt("Enter desired Grid Size",16);
        if(newGridSize<=0 || newGridSize>100){
            alert("Please select a number between 1 and 100");
            inputsize();
        };
    }

    inputsize();
    
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

    rainbowMode=false;
    
    if(rainbowMode){

        square=document.querySelectorAll(".container .row .square ")
        square.forEach(square => {square.addEventListener("mouseover",()=>{
        color=randomRainbowColor();
        square.style.backgroundColor= color;
        })
        });

        rainbowBtn.textContent="Default Mode";
    }
    else{
        rainbowBtn.textContent="Rainbow Mode";
        hoverTrail(originalColor)
    }
        
    eraserBtn.textContent="Eraser Mode";
    
   alert("Grid Resized-settings reset to default")

})


