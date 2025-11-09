/*document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});*/

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});