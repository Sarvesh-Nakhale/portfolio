document.addEventListener("scroll", () => {
    const header = document.querySelector(".floating-header");
    const halfwayPoint = window.innerHeight / 2;
  
    if (window.scrollY > halfwayPoint) {
      header.style.top = "1rem"; // Show the header
    } else {
      header.style.top = "-100px"; // Hide the header
    }
  });
  