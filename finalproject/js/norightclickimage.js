// Get all image elements with IDs containing "image"
const imageElements = document.querySelectorAll('[id*="image"]');

// Add an event listener to prevent the context menu for each image
imageElements.forEach((imageElement) => {
  imageElement.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
});
