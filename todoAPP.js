let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inp.value;
    inp.value = "";

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");
    
    ul.appendChild(li);
    li.appendChild(dltBtn);
});

let ul = document.querySelector("ul");
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
    }
});


// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }