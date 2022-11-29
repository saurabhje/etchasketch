
function gridmaker(){
const number = prompt("No. of Boxes[1-64]");
const num = (700-2.1*number)/number;
const container = document.querySelector('.container');
for(let i =0;i<number;i++){
    const div = document.createElement('div');
    div.classList.add('gridcontainer')
    container.appendChild(div);
    for(let j =0;j<number;j++){
        const div1 = document.createElement('div');
        div1.setAttribute('class','divclass');
        div1.setAttribute('style',`height:${num}px; width:${num}px;`);
        div.appendChild(div1);
    }
}

div2 = document.querySelectorAll('.divclass');
div2.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor = "black";
    });
});
}
gridmaker();