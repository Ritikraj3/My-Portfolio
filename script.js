const downloadBtn = document.getElementById('downloadResume');
const toast = document.getElementById('toast');

downloadBtn.addEventListener('click', function () {
  const isMobile = window.innerWidth <= 640;

  // Reset state
  toast.classList.remove('hidden', 'show');

  // Set initial off-screen position before showing
  toast.style.transform = isMobile ? 'translateY(-20px)' : 'translateY(20px)';
  toast.style.opacity = '0';

  // Force reflow to ensure the browser registers the initial state
  void toast.offsetWidth;

  // Now show it and animate in
  toast.classList.add('show');
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  // Hide after 3 seconds
  setTimeout(() => {
    toast.style.transform = isMobile ? 'translateY(-20px)' : 'translateY(20px)';
    toast.style.opacity = '0';

    // Wait for animation to finish before hiding
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hidden');
    }, 400); // match the CSS transition duration
  }, 3000);
});








// ==============hire me button

const textSpan = document.getElementById('hireMe');

  if (window.innerWidth < 640) { // Tailwind's sm breakpoint (640px)
    textSpan.textContent = 'Hire Me';
  }

  // Optional: Update on resize as well
  window.addEventListener('resize', () => {
    if (window.innerWidth < 640) {
      textSpan.textContent = 'Hire Me';
    } else {
      textSpan.textContent = "Let's Work together";
    }
  });
















document.addEventListener('DOMContentLoaded', function () {
    const ticker = document.getElementById('ticker-content');
    const duplicate = document.getElementById('ticker-duplicate');
  
    // Clone original items into the duplicate container
    duplicate.innerHTML = ticker.innerHTML;
  
    // Measure width and set animation duration dynamically
    const tickerTrack = document.querySelector('.smooth-ticker-track');
    const totalWidth = ticker.offsetWidth;
  
    // Adjust speed: larger width = longer duration
    const speed = 150; // pixels per second
    const duration = totalWidth * 2 / speed; // doubled because of duplication
    tickerTrack.style.animationDuration = `${duration}s`;
  });

  
  













// document.addEventListener('DOMContentLoaded', function () {
//   const projectCards = document.querySelectorAll('.project-card');

//   projectCards.forEach(card => {
//     const glowColor = card.getAttribute('data-glow') || '#fc815c';

//     const glowEffect = document.createElement('div');
//     glowEffect.className = 'glow-effect';

//     // Custom glow style based on card
//     glowEffect.style.background = `radial-gradient(circle, ${hexToRgba(glowColor, 0.2)} 0%, ${hexToRgba(glowColor, 0)} 70%)`;

//     card.appendChild(glowEffect);

//     card.addEventListener('mousemove', function (e) {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       glowEffect.style.left = x + 'px';
//       glowEffect.style.top = y + 'px';
//       glowEffect.style.opacity = '1';
//     });

//     card.addEventListener('mouseleave', function () {
//       glowEffect.style.opacity = '0';
//     });
//   });

//   // Helper function to convert HEX to RGBA
//   function hexToRgba(hex, alpha) {
//     const r = parseInt(hex.slice(1, 3), 16),
//           g = parseInt(hex.slice(3, 5), 16),
//           b = parseInt(hex.slice(5, 7), 16);
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
//   }
// });











  

























document.addEventListener('DOMContentLoaded', function () {
  // === For Project Cards ===
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const glowColor = card.getAttribute('data-glow') || '#fc815c';

    const glowEffect = document.createElement('div');
    glowEffect.className = 'glow-effect';
    glowEffect.style.background = `radial-gradient(circle, ${hexToRgba(glowColor, 0.2)} 0%, ${hexToRgba(glowColor, 0)} 70%)`;

    card.appendChild(glowEffect);

    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glowEffect.style.left = x + 'px';
      glowEffect.style.top = y + 'px';
      glowEffect.style.opacity = '1';

    });

    card.addEventListener('mouseleave', function () {
      glowEffect.style.opacity = '0';
    });
  });

  // === For Skill Cards ===
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    const glowColor = card.getAttribute('data-skill-glow') || '#888';

    const glowEffect = document.createElement('div');
    glowEffect.className = 'skill-glow-effect';
    glowEffect.style.background = `radial-gradient(circle, ${hexToRgba(glowColor, 0.2)} 0%, ${hexToRgba(glowColor, 0)} 60%)`;

    card.appendChild(glowEffect);

    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glowEffect.style.left = x + 'px';
      glowEffect.style.top = y + 'px';
      glowEffect.style.opacity = '1';

      card.style.borderColor = glowColor;
    });

    card.addEventListener('mouseleave', function () {
      glowEffect.style.opacity = '0';
      card.style.borderColor = ''; // Reset to default
    });
  });

  // === HEX to RGBA Helper ===
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
});


  



















