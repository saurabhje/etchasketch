const container = document.querySelector(".container");
function gridmaker() {
    const number = prompt("No. of Boxes[1-64]");
    const num = 650 / number;
    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");
        div.classList.add("gridcontainer");
        container.appendChild(div);
        for (let j = 0; j < number; j++) {
            const div1 = document.createElement("div");
            div1.setAttribute("class", "divclass");
            div1.setAttribute("style", `height:${num}px; width:${num}px;`);
            div.appendChild(div1);
        }
    }

    div2 = document.querySelectorAll(".divclass");
    div2.forEach(element => {
        let i = 0;
        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);
        element.addEventListener("mouseenter", () => {
            element.style.background =
                "rgb(" +
                (a - (a / 100) * i) +
                "," +
                (b - (b / 100) * i) +
                "," +
                (c - (c / 100) * i) +
                ")";
            i++;
        });
    });
const btnb = document.querySelector('.black');
btnb.addEventListener('click',() => {
    div2.forEach(element => {
        element.addEventListener("mouseenter", () =>{
            element.style.background = 'black';
        })
    });
});
let btnc = document.querySelector('.color');
btnc.addEventListener('click', ()=>{
    div2.forEach(element => {
        let i = 0;
        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);
        element.addEventListener('mouseenter',() =>{
            element.style.background =
            "rgb(" +
            (a - (a / 100) * i) +
            "," +
            (b - (b / 100) * i) +
            "," +
            (c - (c / 100) * i) +
            ")";
        i++; 
    });
 });
});
}
gridmaker();
function gridset() {
    while (container.firstChild) {
        while (container.firstChild.firstChild) {
            container.firstChild.removeChild(container.firstChild.firstChild);
        }
        container.removeChild(container.firstChild);
    }
    gridmaker();
}

let btn1 = document.querySelector(".btn");
btn1.addEventListener("click", gridset);

let btnc = document.querySelector('.black');
btnc.addEventListener('click',() => {

});