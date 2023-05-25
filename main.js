function setEventSwiper() {
  let width = window.innerWidth;

  if (width >= 1200) {
    document.querySelector(".slide-1").classList.add("swiper-slide");
    document.querySelector(".slide-2").classList.add("swiper-slide");
    document.querySelector(".slide-3").classList.add("swiper-slide");
    document.querySelector(".slide-7").classList.add("swiper-slide");
    document.querySelector(".slide-8").classList.add("swiper-slide");
    document.querySelector(".slide-9").classList.add("swiper-slide");

    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      slidesPerGroup: 4,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    document
      .querySelector(".slide-1")
      .classList.remove("swiper-slide-active", "swiper-slide");
    document
      .querySelector(".slide-2")
      .classList.remove("swiper-slide-active", "swiper-slide");
    document
      .querySelector(".slide-3")
      .classList.remove("swiper-slide-active", "swiper-slide");
    document
      .querySelector(".slide-7")
      .classList.remove("swiper-slide-active", "swiper-slide");
    document
      .querySelector(".slide-8")
      .classList.remove("swiper-slide-active", "swiper-slide");
    document
      .querySelector(".slide-9")
      .classList.remove("swiper-slide-active", "swiper-slide");

    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

setEventSwiper();

let swiper = new Swiper(".gallerySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function setGallerySwiper() {
  let total;
  let width = window.innerWidth;
  if (width < 768) {
    total = 1;
  } else if (width >= 768 && width < 992) {
    total = 3;
  } else {
    total = 5;
  }
  const galleryWidth = document.getElementById("gallery-wrapper").offsetWidth;
  const galleryItems = document.getElementsByClassName("gallery-slide");
  [...galleryItems].forEach((e) => {
    e.style.width = `${(galleryWidth - (total - 1) * 20) / total}px`;
  });

  let swiper = new Swiper(".gallerySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

setGallerySwiper();

window.addEventListener("resize", function () {
  setEventSwiper();
  setGallerySwiper();
});
