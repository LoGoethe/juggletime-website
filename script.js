//hamburger menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});        

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("imageModal");
  if (!modal) return; // Exit if modal not present


//gallery modal
  const modalImg = document.getElementById("modalImage");
  const closeBtn = modal.querySelector(".modal-close");
  const prevBtn = modal.querySelector(".modal-prev");
  const nextBtn = modal.querySelector(".modal-next");
  const prevZone = modal.querySelector(".modal-click-prev");
  const nextZone = modal.querySelector(".modal-click-next");
  const images = Array.from(document.querySelectorAll(".clickable-image"));
  let currentIndex = 0;
  

  function openModal(index) {
    currentIndex = index;
    const img = images[currentIndex];
    modalImg.src = img.dataset.full;
    modalImg.alt = img.alt;
    modal.classList.add("is-active");

    // Reset and then trigger zoom-in animation
    modalImg.classList.remove("show");
    void modalImg.offsetWidth; // Force reflow to restart animation
    modalImg.classList.add("show");
  }

  function closeModal() {
    modalImg.classList.remove("show");
    setTimeout(() => {
      modal.classList.remove("is-active");
      modalImg.src = "";
    }, 400); // match your CSS transition time
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    openModal(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openModal(currentIndex);
  }

    // Attach click handlers for navigation
  if (prevZone) prevZone.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });
  if (nextZone) nextZone.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });

    // Attach click handlers to images
 images.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();      // Prevent default anchor or browser action
    e.stopPropagation();     // Prevent bubbling to parent elements
    openModal(index);
  });
});

  // close modal when anything outside the iamge is clicked
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener('click', (e) => {
    const isImage = e.target.id === "modalImage";
    const isArrow = e.target.classList.contains("modal-prev") || e.target.classList.contains("modal-next");
    const isClose = e.target.classList.contains("modal-close");
    const isClickZone = e.target.classList.contains("modal-click-prev") || e.target.classList.contains("modal-click-next");
    if (!isImage && !isArrow && !isClose && !isClickZone) {
      closeModal();
    }
  });

  // Keyboard nav
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  });
});



  
  // Testiomonials carousel
  document.addEventListener("DOMContentLoaded", () => {
  const testimonialText = document.getElementById("testimonialText");
  const testimonialAuthor = document.getElementById("testimonialAuthor");

  const testimonials = [
    {
      text: "“JuggleTime brought the perfect blend of polish and whimsy to our gala. Logan adapted on the fly, interacted gracefully with VIPs, and elevated the entire atmosphere. Worth every penny.”",
      author: "— Emily Choi, Cirrus Foundation"
    },
    {
      text: "“There are performers you hire, and then there are artists you trust with your audience. Logan is the latter. He delivers precision, charisma, and an undeniable spark onstage.”",
      author: "— Juliana Veo, Luminate Arts Festival"
    },
    {
      text: "“Logan had the entire block mesmerized. Kids were screaming with laughter, and even the adults were wide-eyed and grinning. I’ve never had so many neighbors thank me for a party before!”",
      author: "— Danielle Rainier, East Brainerd Community Organizer"
    }
  ];

  let current = 0;

  function showTestimonial(index) {
    testimonialText.style.opacity = 0;
    testimonialAuthor.style.opacity = 0;

    setTimeout(() => {
      testimonialText.textContent = testimonials[index].text;
      testimonialAuthor.textContent = testimonials[index].author;

      testimonialText.style.opacity = 1;
      testimonialAuthor.style.opacity = 1;
    }, 300);
  }

  showTestimonial(current);
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 7000);
});






  // Line animations
document.addEventListener("DOMContentLoaded", () => {
  const observers = document.querySelectorAll(".animate-lines");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target); // Animate once
        }
      });
    },
    { threshold: 0.5 }
  );

  observers.forEach((el) => observer.observe(el));
});

