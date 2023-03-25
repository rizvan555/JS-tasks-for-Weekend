const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Hintergrundfarbe ändern";

button.addEventListener("click", () => {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
