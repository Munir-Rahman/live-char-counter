let input = document.getElementById("text");
let size = document.getElementById("size");

    input.addEventListener('input', ()=> {
            let newsize= input.value.length;
            size.innerText = newsize;
    });