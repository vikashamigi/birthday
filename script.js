const box = document.getElementById("giftBox");
const message = document.getElementById("message");
const balloonsContainer = document.getElementById("balloons");

box.addEventListener("click", () => {
  // Hide box
  box.style.transform = "scale(0)";
  box.style.opacity = "0";

  // Show message
  setTimeout(() => {
    message.style.opacity = "1";
    message.style.transform = "scale(1)";
  }, 600);

  // Create balloons
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("span");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
    balloon.style.animationDuration = 4 + Math.random() * 3 + "s";
    balloonsContainer.appendChild(balloon);
  }
});
