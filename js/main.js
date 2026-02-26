// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

const images = document.querySelectorAll('.lightbox-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  lightbox.style.display = 'flex';
  lightboxImg.src = images[currentIndex].src;
}

document.getElementById('next').onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

document.getElementById('prev').onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

document.querySelector('.close').onclick = () => {
  lightbox.style.display = 'none';
};

document.addEventListener('keydown', e => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') document.getElementById('next').click();
    if (e.key === 'ArrowLeft') document.getElementById('prev').click();
    if (e.key === 'Escape') lightbox.style.display = 'none';
  }
});
