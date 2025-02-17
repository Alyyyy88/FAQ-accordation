document.addEventListener("DOMContentLoaded", function () {

  const plusBtns = document.querySelectorAll(".btn-q");
  
  const minusBtns = document.querySelectorAll(".btn-a");
  
  // const answer = document.querySelector(".answer");
  
  
  plusBtns.forEach(plusBtn=>{
    plusBtn.addEventListener("click",function(){
      const item = this.closest(".item"); 
      const answer = item.querySelector(".answer"); 
      const minusBtn = item.querySelector(".btn-a"); 
  
      answer.classList.toggle("active");
      minusBtn.classList.toggle("active");
      this.classList.toggle("non-active");
    })
  })
  
  minusBtns.forEach(minusBtn=>{
    minusBtn.addEventListener("click",function(){
      const item = this.closest(".item");
      const answer = item.querySelector(".answer");
      const plusBtn = item.querySelector(".btn-q");
  
      answer.classList.toggle("active");
      plusBtn.classList.toggle("non-active");
      this.classList.toggle("active");
  
    });
  
  
  })
  
  
  });
  
  
  
  