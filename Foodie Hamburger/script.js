const hamburgerBar = document.querySelector(".hamburger-bar")
const activeMobile = document.querySelector("nav ul")
const crossBar = document.querySelector(".cross-icon")
hamburgerBar.addEventListener('click',()=>{
    const isMobile = activeMobile.classList.toggle("mobile")
    hamburgerBar.classList.toggle("disabled",isMobile)
})

crossBar.addEventListener('click',()=>{
    activeMobile.classList.remove("mobile")
    hamburgerBar.classList.remove("disabled")
})

