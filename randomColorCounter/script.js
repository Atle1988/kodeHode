const addEl = document.getElementById("addBox")
const sumEl = document.getElementById("sumBox")
const subEl = document.getElementById("subBox")

let count = 0;

addEl.addEventListener("click",function(){
    count += 1;
    sumEl.textContent = count;
    
    for (let i = 10; i<1000; i+=10){
        if (count === i){
            random()
        }
    }

    
})

subEl.addEventListener("click",function(){
    count -= 1;
    sumEl.textContent = count;
})


function random() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  
    document.body.style.background = bgColor;
    }




