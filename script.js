container=document.querySelector(".container");

for(let i=1;i<=16;i++){

    let row=document.createElement("div");
    row.setAttribute("class","row");

    for(let column=1;column<=16;column++){
        let square=document.createElement("div");
        square.setAttribute("class","square");
        row.appendChild(square);
    }

    container.append(row);
}

