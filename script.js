const images = document.querySelectorAll('.image');
const fullImageContainer = document.getElementById('fullImageContainer');
const fullImage = document.getElementById('fullImage');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    fullImage.src = img.src;
    fullImageContainer.style.display = 'block';
    currentIndex = index;
  });
});

fullImageContainer.addEventListener('click', () => {
  fullImageContainer.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (fullImageContainer.style.display === 'block') {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    fullImage.src = images[currentIndex].src;
  }
});

const boxesContainer = document.getElementById('boxes');
const amountInput = document.getElementById('amountInput');
const renderBtn = document.getElementById('renderBtn');
const destroyBtn = document.getElementById('destroyBtn');

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    boxesContainer.appendChild(div);
    size += 10;
  }
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

renderBtn.addEventListener('click', () => {
  const amount = Number(amountInput.value);
  destroyBoxes();
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
