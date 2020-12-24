let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const menuOp = document.querySelector(".menuOp")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})

menuOp.addEventListener("click", () => {
    document.body.style.overflow = !show ? "initial" : "hidden"
    menuSection.classList.toggle("on", show)
    show = !show;
})