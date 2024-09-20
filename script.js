let btn = document.getElementById("btn")
let input = document.getElementById("input")
let newcontainer = document.getElementById("newcontainer")
// console.log(btn);
btn.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please Enter something text box")
    } else {
        let div = document.createElement("div")
        div.innerText = input.value
        newcontainer.appendChild(div)
        input.value=" "

        let span=document.createElement('span')
        span.innerText="Delete"  
        div.appendChild(span)   
        
        span.onclick=()=>{
            div.remove()
        }
      
        
    }







})
