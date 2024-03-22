const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const hamburger = document.getElementById("hamburger");
const hamimg = document.getElementById("ham-img")
if (screen.width < 850) {
    hamburger.style.display = "block";
    nav1.style.display = "none";
    // nav2.style.display="flex";
}
hamburger.addEventListener("click", () => {
    if (nav2.style.display === "flex") {
        nav2.style.display = "none";
        hamimg.src = "./assets/vectors/landing/menu.png";
    }
    else {
        nav2.style.display = "flex";
        hamimg.src = "./assets/vectors/landing/close.png";
    }
})

document.getElementById("bpa").addEventListener("click",  function () {
    window.location.href = "./templates/businessprocessautomation.html";
});
document.getElementById("qes").addEventListener("click",  function () {
    window.location.href = "./templates/qualityserviceengineering.html";
});
document.getElementById("cs").addEventListener("click",  function () {
    window.location.href = "./templates/cloudservices.html";
});
document.getElementById("isr").addEventListener("click",  function () {
    window.location.href = "./templates/itstaffandrecruiting.html";
});
document.getElementById("atc").addEventListener("click",  function () {
    window.location.href = "./templates/agiletraining.html";
});
document.getElementById("cm").addEventListener("click",  function () {
    window.location.href = "./templates/coachingMentoring.html";
});