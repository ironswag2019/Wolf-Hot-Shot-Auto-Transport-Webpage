const menu-icon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdownMenu");

menu-icon.addEventListener("click", () => {
    menu-icon.classList.toggle("active");      // Change color or state
    dropdownMenu.classList.toggle("active");  // Slide menu in/out
});
