const { random, atan2, cos, sin, hypot } = Math;
const max = 200;
const canvas = document.createElement("canvas");
const $ = canvas.getContext('2d');
const body = document.body;
const particles = [];

body.style.backgroundColor = "black";
body.style.overflow = "auto";
body.appendChild(canvas);

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let point = { x: width / 2, y: height / 2 };
let hue = 0;

function Particle() {};

Particle.prototype = {
  init() {
    this.hue = random(0, 40); // Red to Orange hues
    this.alpha = 0;
    this.size = this.random(1, 5);
    this.x = this.random(0, width);
    this.y = this.random(0, height);
    this.velocity = this.size * .5;
    this.changed = null;
    this.changedFrame = 0;
    this.maxChangedFrames = 50;
    return this;
  },
  draw() {
    $.strokeStyle = `hsla(${(this.hue + hue) % 40}, 100%, 50%, ${this.alpha})`;
    $.beginPath();
    $.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    $.stroke();
    this.update();
  },
  update() {
    if (this.changed) {
      this.alpha *= .92;
      this.size += 2;
      this.changedFrame++;
      if (this.changedFrame > this.maxChangedFrames) {
        this.reset();
      }
    } else if (this.distance(point.x, point.y) < 50) {
      this.changed = true;
    } else {
      let dx = point.x - this.x;
      let dy = point.y - this.y;
      let angle = atan2(dy, dx);
      this.alpha += .01;
      this.x += this.velocity * cos(angle);
      this.y += this.velocity * sin(angle);
      this.velocity += .02;
    }
  },
  reset() {
    this.init();
  },
  distance(x, y) {
    return hypot(x - this.x, y - this.y);
  },
  random(min, max) {
    return random() * (max - min) + min;
  }
}

function animate() {
  $.fillStyle = `rgba(0,0,0, .2)`;
  $.fillRect(0, 0, width, height);
  particles.forEach((p) => p.draw());
  hue = (hue + 1) % 40; // Smooth color animation
  window.requestAnimationFrame(animate);
}

function touches(e) {
  point.x = e.touches ? e.touches[0].clientX : e.clientX;
  point.y = e.touches ? e.touches[0].clientY : e.clientY;
}

function setup() {
  canvas.addEventListener("mousemove", touches);
  canvas.addEventListener("touchmove", touches);
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  for (let i = 0; i < max; i++) {
    let p = new Particle().init();
    particles.push(p);
  }

  animate();
}

setup();








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

      card.style.borderColor = glowColor;
    });

    card.addEventListener('mouseleave', function () {
      glowEffect.style.opacity = '0';
      card.style.borderColor = ''; // Reset to default
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


  
