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

function hoverTrail(){
square=document.querySelectorAll(".container .row .square ")


square.forEach(square => {square.addEventListener("mouseover",()=>{

    square.style.backgroundColor= "gold";

})
});
}

let container=document.querySelector(".container");

let gridSize=16;
makeGrid(gridSize);

hoverTrail();

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

   hoverTrail();

})





