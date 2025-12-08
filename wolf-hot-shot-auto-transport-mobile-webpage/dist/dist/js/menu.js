const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  menuBtn.classList.toggle("active");
});
