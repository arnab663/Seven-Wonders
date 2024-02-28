
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")
let scrollContainer = document.querySelector(".gallery")

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY
})

prevBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900
})