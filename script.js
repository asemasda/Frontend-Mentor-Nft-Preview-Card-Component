const eyeIcon=document.querySelector(".eye-icon");
const imgBg =document.querySelector(".img");

imgBg.addEventListener("mouseover",function(){
    imgBg.classList.add("blue-bg");
    eyeIcon.classList.add("block");
})

imgBg.addEventListener("mouseleave",function(){
    imgBg.classList.remove("blue-bg");
    eyeIcon.classList.remove("block");
})


