
let second=document.getElementById("toastBox")
let Valid="Valid"
let Invalid="Invalid"
 

function show(msg){
    let div=document.createElement("div")
    if(msg==="Valid"){
    div.classList.add("toast");
    }
    else{
        div.classList.add("toast-1");
    }


    div.innerText=msg


    let d=document.createElement("div")

    d.classList.add("t")
   div.append(d)
    console.log(d)
    second.append(div)


    setInterval(()=>{
        div.remove();
        
    },5000)
}