const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");      // Change color or state
    dropdownMenu.classList.toggle("active");  // Slide menu in/out
});
