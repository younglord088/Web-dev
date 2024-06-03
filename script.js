function changeImage(imagePath) {
  console.log(imagePath);
  document.getElementById("project-image").src = imagePath;
}

const dotImages = [
  "./images/onHover.png",
  "./images/onHover.png",
  "./images/onHover.png",
  "./images/onHover.png",
];
const dots = document.querySelectorAll(".dot");

function changeDot(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.style.width = "20px"; 
      dot.style.height = "20px"; 
      dot.style.backgroundColor = "transparent"; 
      dot.style.backgroundImage = `url(${dotImages[i]})`;
      dot.style.backgroundSize = "cover";
      dot.style.backgroundPosition = "center";
    } else {
      dot.style.width = "10px"; 
      dot.style.height = "10px"; 
      dot.style.backgroundColor = "black"; 
      dot.style.backgroundImage = "none"; 
    }
  });
}
