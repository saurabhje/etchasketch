
const num = (680-4*16)/16;
const container = document.querySelector('.container');
for(let i =0;i<16;i++){
    const div = document.createElement('div');
    div.classList.add('gridcontainer')
    container.appendChild(div);
    for(let j =0;j<16;j++){
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