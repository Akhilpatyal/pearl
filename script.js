document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");
  const section = document.querySelector("#property");

  const runCounters = () => {
    counters.forEach((counter) => {
      let startValue = 0;
      const endValue = +counter.getAttribute("data-target");
      const sign = counter.getAttribute("data-sign");
      const duration = 2000;
      const increment = Math.ceil((endValue / duration) * 20);

      const updateCounter = () => {
        if (startValue < endValue) {
          startValue += increment;
          counter.innerText = Math.min(startValue, endValue);
          setTimeout(updateCounter, 20);
        } else {
          counter.innerHTML = `${endValue}<span class="sign"> ${
            sign || ""
          }</span>`;
        }
      };

      updateCounter();
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounters();
          observer.unobserve(section); // Run counters only once
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  observer.observe(section);
});

// fancy box
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind('[data-fancybox="gallery-swiper"]', {
    Toolbar: {
      display: ["zoom", "close"],
    },
    Thumbs: {
      autoStart: true,
    },
  });
});

// naviagtion bar

// slider
// banner slider
var proprtySwiper = new Swiper(".banner-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner-swiper-button-next",
    prevEl: ".banner-swiper-button-prev",
  },
  loop: true,
});

var masterSwiper = new Swiper(".masterplanSwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var ourVerticals = new Swiper(".Verticals", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

var floorSwiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// property slider
var proprtySwiper = new Swiper(".property-slider", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

// logo slider
var ourVerticals = new Swiper(".LogoSlider", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

var proprtySwiper = new Swiper(".amenities-slider", {
  spaceBetween: 60, // Default space
  navigation: {
    nextEl: ".swiper-button-next-amenities",
    prevEl: ".swiper-button-prev-amenities",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

var galleryslider = new Swiper(".gallery-slider", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: ".gallery-swiper-button-next",
    prevEl: ".gallery-swiper-button-prev",
  },
  autoplay: {
    delay: 2500000,
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// formModal-new

function openForm2() {
  document.getElementById("formModal-new").style.display = "block";
}

function closeForm2() {
  document.getElementById("formModal-new").style.display = "none";
}

function openForm() {
  document.getElementById("formModal").style.display = "block";
}

function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

function flooropenForm() {
  document.getElementById("floorformModal").style.display = "block";
}

function floorcloseForm() {
  document.getElementById("floorformModal").style.display = "none";
}

// form submition
const form = document.getElementById("form");
// form.addEventListener("input", () => {
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("exampleInputEmail1").value.trim();
//   const phone = document.getElementById("phonenumber").value.trim();
//   const checkbox = document.getElementById("exampleCheck1").checked;
//   const isValidPhone = /^[0-9]{10}$/.test(phone);

//   if (name && email && isValidPhone && checkbox) {
//     // form.submit();
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const popupform = document.getElementById("popupform");

  // popupform.addEventListener("input", () => {
  //   const name = document.getElementById("popup_name").value.trim();
  //   const phone = document.getElementById("popup_mobile").value.trim();
  //   const email = document.getElementById("popup_email").value.trim();
  //   const isValidEmail =
  //     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  //   const isValidPhone = /^[0-9]{10}$/.test(phone);

  //   // Check if name, email, and phone are valid and fully entered
  //   if (name && email && isValidEmail && isValidPhone) {
  //     // popupform.submit(); // Submit form if all fields are valid
  //   }
  // });
});

document.addEventListener("DOMContentLoaded", () => {
  const popupform1 = document.getElementById("popupform1");
});

// scrollinng to and redirect and close that hamburger menu

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    const offsetTop = section.offsetTop - 100;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    const offcanvas = document.querySelector(".offcanvas"); // Adjust selector based on your offcanvas container
    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide(); // Close the offcanvas menu
      }
    }
  }
}
