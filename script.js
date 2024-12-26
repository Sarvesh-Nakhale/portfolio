document.addEventListener("scroll", () => {
    const header = document.querySelector(".floating-header");
    const halfwayPoint = window.innerHeight / 2;
  
    if (window.scrollY > halfwayPoint) {
      header.style.top = "1rem"; // Show the header
    } else {
      header.style.top = "-100px"; // Hide the header
    }
  });
  
  // Lock the window size
window.onload = function () {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Set the fixed size of the window (80% width of the viewport)
  if (width !== window.outerWidth || height !== window.outerHeight) {
    window.resizeTo(width, height); // Lock to the initial size
  }

  // Prevent resizing the window
  window.onresize = function () {
    window.resizeTo(width, height);
  };
};
