const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const hamburger = document.getElementById("hamburger");
if(screen.width < 850) {
    hamburger.style.display="block";
    nav1.style.display="none";
    // nav2.style.display="flex";
}
hamburger.addEventListener("click", () => {
    if(nav2.style.display === "flex") {
        nav2.style.display = "none";
    }
    else nav2.style.display="flex";
})