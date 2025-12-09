const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdown");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");      // Change color or state
    dropdownMenu.classList.toggle("active");  // Slide menu in/out
});
