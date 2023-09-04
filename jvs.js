let nv = document.querySelectorAll(".navi a");
let bodyId = document.querySelector("body").id;
 
for(let link of nv){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}