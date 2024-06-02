document.addEventListener('DOMContentLoaded', function () {
    function changeImage(imagePath) {
      console.log(imagePath);
      document.getElementById("project-image").src = imagePath;
    }
  
    const projectDetailItems = document.querySelectorAll('.project-detail-item');
    projectDetailItems.forEach(item => {
      item.addEventListener('click', function () {
        const imagePath = this.getAttribute('data-image');
        changeImage(imagePath);
      });
    });
  
    const dotImages = [
      "./images/hover-dot.png",
      "./images/hover-dot.png",
      "./images/hover-dot.png",
      "./images/hover-dot.png",
    ];
    const dots = document.querySelectorAll(".dot");
  
    function changeDot(index) {
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.style.backgroundImage = `url(${dotImages[i]})`;
          dot.style.backgroundSize = "contain";
          dot.style.backgroundPosition = "center";
        } else {
          dot.style.backgroundImage = "none";
        }
      });
    }
  });
  