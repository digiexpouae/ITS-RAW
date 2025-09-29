document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".random-stack");
    if (!container) return;
  
    const images = Array.from(container.querySelectorAll("img"));
    if (!images.length) return;
  
    const imgSrcs = images.map(img => img.src);
    const overlapX = 0.1; // 10% of width
    const overlapY = 0.1; // 10% of height
    const pxPerImage = 30; // movement needed to show next image
    const inactivityMs = 400;
    const animationDuration = 0.3;
  
    let lastPos = null;
    let movementAccum = 0;
    let currentSet = [...imgSrcs];
    let shuffleOnNext = true;
    let inactivityTimer = null;
  
    const sample = images[0];
    const imgWidth = sample.offsetWidth || sample.naturalWidth || 100;
    const imgHeight = sample.offsetHeight || sample.naturalHeight || 140;
  
    // hide all images at start
    images.forEach(img => gsap.set(img, { x: 0, y: 0, opacity: 0, scale: 0.3 }));
  
    function shuffleArray(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  
    function resetImages() {
      shuffleOnNext = true;
      movementAccum = 0;
      lastPos = null;
      images.forEach(img => gsap.to(img, { opacity: 0, scale: 0.3, duration: 0.2 }));
    }
  
    container.addEventListener("mousemove", (ev) => {
      const rect = container.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
  
      if (shuffleOnNext) {
        currentSet = shuffleArray(imgSrcs);
        shuffleOnNext = false;
        movementAccum = 0;
        lastPos = { x, y };
      }
  
      if (lastPos) {
        const dx = x - lastPos.x;
        const dy = y - lastPos.y;
        movementAccum += Math.sqrt(dx*dx + dy*dy);
      }
      lastPos = { x, y };
  
      // determine how many images to show based on movement
      let count = Math.floor(movementAccum / pxPerImage);
      if (count <= 0 && (movementAccum > 0)) count = 1;
      count = Math.min(count, images.length);
  
      for (let i = 0; i < count; i++) {
        const img = images[i];
        img.src = currentSet[i % currentSet.length];
  
        const offsetX = imgWidth * overlapX * i;
        const offsetY = imgHeight * overlapY * i;
  
        let posX = x + offsetX;
        let posY = y + offsetY;
  
        // clamp inside container
        posX = Math.min(Math.max(posX, 0), rect.width - imgWidth);
        posY = Math.min(Math.max(posY, 0), rect.height - imgHeight);
  
        gsap.to(img, {
          x: posX,
          y: posY,
          opacity: 1,
          scale: 1,
          duration: animationDuration,
          ease: "power2.out"
        });
      }
  
      // hide remaining images
      for (let i = count; i < images.length; i++) {
        gsap.to(images[i], { opacity: 0, scale: 0.3, duration: 0.15 });
      }
  
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(resetImages, inactivityMs);
    });
  
    container.addEventListener("mouseleave", resetImages);
  });
  
  
  });