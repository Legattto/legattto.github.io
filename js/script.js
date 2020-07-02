let serveseTab = document.querySelectorAll(".js-servese-tabs");
let serveseTabContent = document.querySelectorAll(".js-servese-tabs-content");

let mapModale = document.querySelector(".js-map-modale");
let jsMapButton = document.querySelector(".js-map");

let closeButton = document.querySelectorAll(".button-close")

let cartModale = document.querySelector(".js-cart-modale");
let jsCartbutton = document.querySelectorAll(".js-cart");
let contineClose = document.querySelector(".js-contine");

let jsFormButton = document.querySelector(".js-form");
let jsFormModale = document.querySelector(".js-form-modale");
let jsName = document.querySelector(".js-name");
let jsEmail = document.querySelector(".js-email");
let jsSubmit = document.querySelector(".js-submit");
let jsForm = document.querySelector(".form-flex-box");



contineClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModale.classList.remove("modal-show");
});

for (let closeButtons of closeButton) {
  closeButtons.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModale.classList.remove("modal-show");
    if (jsFormButton && jsFormModale && mapModale && jsFormModale) {
      mapModale.classList.remove("modal-show");
      jsFormModale.classList.remove("modal-show");
    }
  })
};

for (let cartbutton of jsCartbutton) {
  cartbutton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModale.classList.add("modal-show");
  })
};

if (jsFormButton && jsFormModale) {
  jsFormButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    jsFormModale.classList.add("modal-show");
  });
};

if (mapModale && jsMapButton) {
  jsMapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModale.classList.add("modal-show");
  });
};


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartModale.classList.contains("modal-show")) {
      evt.preventDefault();
      cartModale.classList.remove("modal-show");
    }
    if (mapModale && jsMapButton) {
      if (mapModale.classList.contains("modal-show")) {
        evt.preventDefault();
        mapModale.classList.remove("modal-show");
      }
    }
    if (jsFormButton && jsFormModale) {
      if (jsFormModale.classList.contains("modal-show")) {
        evt.preventDefault();
        jsFormModale.classList.remove("modal-show");
        jsFormModale.classList.remove("modal-error");
      }
    }
  }
});

if (jsFormButton && jsFormModale) {
  jsForm.addEventListener("submit", function (evt) {
    if (!jsName.value || !jsEmail.value) {
      evt.preventDefault();
      jsFormModale.classList.remove("modal-error");
      jsFormModale.offsetWidth = jsFormModale.offsetWidth;
      jsFormModale.classList.add("modal-error");
    }
  });
};

if (serveseTab && serveseTabContent) {
  let hideContent = function () {
    serveseTabContent.forEach(function (el) {
      el.classList.add("hidden");
    });
  }
  serveseTab.forEach(function (el, index) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      activeTab = document.querySelector(".servese-slider-active");
      activeTab.classList.remove("servese-slider-active");
      hideContent();
      if (serveseTabContent[index]) {
        serveseTabContent[index].classList.remove("hidden");
      }
      el.classList.add("servese-slider-active");
    })
  });
};

let buttonArrow = document.querySelectorAll(".button-slide");
let mainSlider = document.querySelectorAll(".js-slider");
let mainSliderButton = document.querySelectorAll(".button-slide-active");


let hideSlideContent = function () {
  mainSlider.forEach(function (el) {
    el.classList.add("hidden");
  });
};

if (mainSlider && mainSliderButton) {
  mainSliderButton.forEach(function (el, index) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      let sliderButton = document.querySelector(".button-slide-active-current");
      sliderButton.classList.remove("button-slide-active-current");
      hideSlideContent();
      if (mainSlider[index]) {
        mainSlider[index].classList.remove("hidden");
      }
      el.classList.add("button-slide-active-current");
    });
  });
  buttonArrow.forEach(function (el, index) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      let sliderButton = document.querySelector(".button-slide-active-current");
      sliderButton.classList.remove("button-slide-active-current");
      hideSlideContent();
      if (mainSlider[index]) {
        mainSlider[index].classList.remove("hidden");
      }
      mainSliderButton[index].classList.add("button-slide-active-current");
    });
  })

};
