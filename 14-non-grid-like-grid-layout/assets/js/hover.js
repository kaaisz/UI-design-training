'use strict';
let z = 1;
let images = document.querySelectorAll("img");

// add event to each of images
images.forEach(img => {
  img.addEventListener("mouseenter", function() {
    // increase z
    z += 1;
    // change styles in z-index
    this.style.zIndex = z;
  })
});