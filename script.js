const movable = document.getElementById("movingBox");
let position = { x: 500, y: 500 };
movingBox.style.top = position.y + "px";
movingBox.style.left = position.x + "px";

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      position.y -= 10;
      break;
    case "ArrowDown":
      position.y += 10;
      break;
    case "ArrowRight":
      position.x += 10;
      break;
    case "ArrowLeft":
      position.x -= 10;
  }
  movingBox.style.top = position.y + "px";
  movingBox.style.left = position.x + "px";
});

document.addEventListener("click", (e) => {
  position.x = e.pageX -= 50;
  position.y = e.pageY -= 50;

  movingBox.style.top = position.y + "px";
  movingBox.style.left = position.x + "px";
  console.log(e);
});
