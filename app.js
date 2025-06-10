let ranges = document.querySelectorAll(".range");
let values = document.querySelectorAll(".value")
let copy = document.querySelector(".copy")
let box = document.querySelector(".box")

let hoff = 0
let voff = 0
let boff = 0
let Soff = 0





for (let i = 0; i < ranges.length; i++) {
   ranges[i].addEventListener('input' , function () {
      values[i].innerHTML = this.value + "px";

      if (i === 0) {
       hoff =   this.value
      }else if (i === 1) {
        voff =   this.value
      }else if (i === 2) {
       boff =   this.value
      }else if (i === 3) {
       Soff =  this.value
      }

      


      copy.innerHTML= `${hoff}px , ${voff}px , ${boff}px  , ${Soff}px , rgba(0, 0, 0, 0.1) ` 

      box.style.boxShadow = `${hoff}px ${voff}px ${boff}px ${Soff}px rgba(0, 0, 0, 0.1)`

   })

}
