const container = document.querySelector('#container');
const modalImage = document.querySelector('#modal-img');
const modal = document.querySelector('#modal');
const description = document.querySelector('#img-description');
const images = Array.from(document.querySelectorAll('#container img'));
const lastImageIndex = images.length - 1;

const nextButton = document.querySelector('#next');
const backButton = document.querySelector('#back');

// Event listener for the "next" button
nextButton.addEventListener('click', (e) => {
  e.stopPropagation();
  const currentImageIndex = images.findIndex((img) => {
    return img.src === modalImage.src;
  });

  if (currentImageIndex === lastImageIndex) {
    modalImage.src = images[0].src;
    description.textContent = images[0].getAttribute('description');
  } else {
    modalImage.src = images[currentImageIndex + 1].src;
    description.textContent =
      images[currentImageIndex + 1].getAttribute('description');
  }
});

// Event listener for the "back" button
backButton.addEventListener('click', (e) => {
  e.stopPropagation();
  const currentImageIndex = images.findIndex((img) => {
    return img.src === modalImage.src;
  });

  if (currentImageIndex === 0) {
    modalImage.src = images[lastImageIndex].src;
    description.textContent =
      images[lastImageIndex].getAttribute('description');
  } else {
    modalImage.src = images[currentImageIndex - 1].src;
    description.textContent =
      images[currentImageIndex - 1].getAttribute('description');
  }
});

// Event listener for arrow key events
document.addEventListener('keydown', (e) => {
  if (modal.classList.contains('no-display')) return; // Check if modal is visible
  if (e.key === 'ArrowRight') {
    nextButton.click(); // Simulate a click on the "next" button
  } else if (e.key === 'ArrowLeft') {
    backButton.click(); // Simulate a click on the "back" button
  } else if (e.key === 'Escape') {
    modal.classList.add('no-display'); // Close the modal
  }
});

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    modalImage.src = images[i].src;
    description.textContent = images[i].getAttribute('description');
    modal.classList.remove('no-display');
  });
}

// When click outside the image -> add display none
modal.addEventListener('click', () => {
  modal.classList.add('no-display');
});
