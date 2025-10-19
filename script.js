//  FUNCTION FOR MAKING GRID 

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


//  FUNCTION FOR HOVERING TRAIL 
function hoverTrail(color){
square=document.querySelectorAll(".container .row .square ")


square.forEach(square => {square.addEventListener("mouseover",()=>{

    square.style.backgroundColor= color;

})
});
}


let container=document.querySelector(".container");


//  FUNCTION FOR MAKING ORIGINAL GRID
let originalGridSize=16;
makeGrid(originalGridSize);
let originalColor="gold";
hoverTrail(originalColor);

let gridSizeEditorBtn=document.getElementById("gridSizeEditorBtn");

let rainbowMode=false;



//ERASER MODE
let eraserBtn=document.querySelector(".Eraser");

let eraserActive=false;

function eraser(){

    eraserBtn.addEventListener("click",()=>{
        eraserActive= !eraserActive;

    if(eraserActive){
        color="white"
        hoverTrail("white");
        eraserBtn.textContent="Eraser Mode ON";
        rainbowBtn.textContent="Rainbow Mode OFF";
    }

    else{
        eraserBtn.textContent="Eraser Mode OFF";
        hoverTrail(originalColor);
    }
    });

    if(rainbowMode){
        rainbowMode=false;
    }

}

eraser();


//  RAINBOW MODE
let rainbowBtn=document.querySelector(".RainbowBtn")

function randomRainbowColor(){
    colorSet=["#9400D3","#4B0082","#0000FF","#00FF00","#FFFF00","#FF7500","#FF0000"]
    function random(){
        value=Math.floor(Math.random()*(colorSet.length-1))+1;
        return value;
    }
    color=colorSet[random()];
    return color;
}

rainbowMode=false;

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

            rainbowBtn.textContent="Rainbow Mode ON";
            eraserBtn.textContent="Eraser Mode OFF";
        }
        else{
            rainbowBtn.textContent="Rainbow Mode OFF";
            hoverTrail(originalColor)
        }

        if(eraserActive){
            eraserActive=false;
            quare=document.querySelectorAll(".container .row .square ")
            square.forEach(square => {square.addEventListener("mouseover",()=>{
                color=randomRainbowColor();
                square.style.backgroundColor= color;
            })
            });

            rainbowBtn.textContent="Rainbow Mode ON";
            eraserBtn.textContent="Eraser Mode OFF";
        }
        
    });

}

rainbow();


//  FUNCTION FOR RESETTING RAINBOW AND ERASER MODE
function resetRainbowEraserModes(){

   hoverTrail(originalColor)
   rainbowMode=false;
   rainbowBtn.textContent="Rainbow Mode OFF";

   eraserActive=false;
   eraserBtn.textContent="Eraser Mode OFF";

}


//  GRID SIZE EDITOR
let newGridSize;
gridSizeEditorBtn.addEventListener("click",() =>{


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
    let n=((originalGridSize*originalPadding)/newGridSize)+"px";
    console.log(n);

    square=document.querySelectorAll(".container .row .square ")
    square.forEach(square=>{

        square.style.height=n;
        square.style.width=n;


    })
    
   alert("Grid Resized-settings reset to default");

    resetRainbowEraserModes();
})


//  RESET GRID
resetBtn=document.getElementById("resetBtn");
resetBtn.addEventListener("click",()=>{
    container.textContent="";
    makeGrid(originalGridSize);
    resetRainbowEraserModes();
    hovertrial(originalColor);
    alert("Grid Reset-settings reset to default")
})



