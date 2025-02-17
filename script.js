document.addEventListener("DOMContentLoaded", function () {

const plusBtns = document.querySelectorAll(".btn-q");

const minusBtns = document.querySelectorAll(".btn-a");

// const answer = document.querySelector(".answer");


plusBtns.forEach(plusBtn=>{
  plusBtn.addEventListener("click",function(){
    const aDiv =document.querySelector(".answer-div");

    const minusBtn = this.nextElementSibling; 

    aDiv.nextElementSibling;

    aDiv.classList.toggle("active");
    minusBtn.classList.toggle("active");
    this.classList.toggle("non-active");
  })
})


});



