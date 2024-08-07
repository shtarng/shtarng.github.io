const imageTrack = document.getElementById("image-track");
const imagesContainer = document.getElementById("images-container");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

let isDragging = false;
let startX;
let scrollLeft;

// Set the scroll fraction as a percentage of the viewport width
const scrollFraction = 20; // Adjust this value as needed (10% of the viewport width in this example)

// Calculate the scroll amount based on viewport width
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const scrollAmount = (vw * scrollFraction) / 100;

// Function to set cursor style based on drag state
const setCursorStyle = () => {
  imagesContainer.style.cursor = isDragging ? 'grabbing' : 'grab';
};

// Scroll to the left
scrollLeftButton.addEventListener("click", () => {
  imagesContainer.scrollLeft -= scrollAmount;
});

// Scroll to the right
scrollRightButton.addEventListener("click", () => {
  imagesContainer.scrollLeft += scrollAmount;
});

// Function to handle the start of dragging
const startDragging = (e) => {
  isDragging = true;
  startX = e.clientX || e.touches[0].clientX;
  scrollLeft = imagesContainer.scrollLeft;
  setCursorStyle(); // Set cursor style when dragging starts
};

// Function to handle the end of dragging
const endDragging = () => {
  isDragging = false;
  setCursorStyle(); // Set cursor style when dragging ends
};

// Event listeners for mouse events
imageTrack.addEventListener("mousedown", startDragging);
imageTrack.addEventListener("mouseleave", endDragging);
imageTrack.addEventListener("mouseup", endDragging);
imageTrack.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.clientX || e.touches[0].clientX;
  const walk = (x - startX) * 2; // Adjust this value to control the scrolling speed
  imagesContainer.scrollLeft = scrollLeft - walk;
});

// Event listeners for touch events
imageTrack.addEventListener("touchstart", (e) => {
  startDragging(e.touches[0]);
});

imageTrack.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].clientX;
  const walk = (x - startX) * 2; // Adjust this value to control the scrolling speed
  imagesContainer.scrollLeft = scrollLeft - walk;
});

imageTrack.addEventListener("touchend", endDragging);

// Initial cursor style setup
setCursorStyle();
