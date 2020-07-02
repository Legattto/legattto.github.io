let serveseTab = document.querySelectorAll(".js-servese-tabs"),
  serveseTabContent = document.querySelectorAll(".js-servese-tabs-content"),
  mapModale = document.querySelector(".js-map-modale"),
  jsMapButton = document.querySelector(".js-map"),
  closeButton = document.querySelectorAll(".button-close"),
  cartModale = document.querySelector(".js-cart-modale"),
  jsCartbutton = document.querySelectorAll(".js-cart"),
  contineClose = document.querySelector(".js-contine"),
  jsFormButton = document.querySelector(".js-form"),
  jsFormModale = document.querySelector(".js-form-modale"),
  jsName = document.querySelector(".js-name"),
  jsEmail = document.querySelector(".js-email"),
  jsSubmit = document.querySelector(".js-submit"),
  jsForm = document.querySelector(".form-flex-box");
contineClose.addEventListener("click", function (e) {
  e.preventDefault(), cartModale.classList.remove("modal-show")
});
for (let e of closeButton) e.addEventListener("click", function (e) {
  e.preventDefault(), cartModale.classList.remove("modal-show"), jsFormButton && jsFormModale && mapModale && jsFormModale && (mapModale.classList.remove("modal-show"), jsFormModale.classList.remove("modal-show"))
});
for (let e of jsCartbutton) e.addEventListener("click", function (e) {
  e.preventDefault(), cartModale.classList.add("modal-show")
});
if (jsFormButton && jsFormModale && jsFormButton.addEventListener("click", function (e) {
    e.preventDefault(), jsFormModale.classList.add("modal-show")
  }), mapModale && jsMapButton && jsMapButton.addEventListener("click", function (e) {
    e.preventDefault(), mapModale.classList.add("modal-show")
  }), window.addEventListener("keydown", function (e) {
    27 === e.keyCode && (cartModale.classList.contains("modal-show") && (e.preventDefault(), cartModale.classList.remove("modal-show")), mapModale && jsMapButton && mapModale.classList.contains("modal-show") && (e.preventDefault(), mapModale.classList.remove("modal-show")), jsFormButton && jsFormModale && jsFormModale.classList.contains("modal-show") && (e.preventDefault(), jsFormModale.classList.remove("modal-show"), jsFormModale.classList.remove("modal-error")))
  }), jsFormButton && jsFormModale && jsForm.addEventListener("submit", function (e) {
    jsName.value && jsEmail.value || (e.preventDefault(), jsFormModale.classList.remove("modal-error"), jsFormModale.offsetWidth = jsFormModale.offsetWidth, jsFormModale.classList.add("modal-error"))
  }), serveseTab && serveseTabContent) {
  let e = function () {
    serveseTabContent.forEach(function (e) {
      e.classList.add("hidden")
    })
  };
  serveseTab.forEach(function (t, o) {
    t.addEventListener("click", function (s) {
      s.preventDefault(), activeTab = document.querySelector(".servese-slider-active"), activeTab.classList.remove("servese-slider-active"), e(), serveseTabContent[o] && serveseTabContent[o].classList.remove("hidden"), t.classList.add("servese-slider-active")
    })
  })
}
let buttonArrow = document.querySelectorAll(".button-slide"),
  mainSlider = document.querySelectorAll(".js-slider"),
  mainSliderButton = document.querySelectorAll(".button-slide-active"),
  hideSlideContent = function () {
    mainSlider.forEach(function (e) {
      e.classList.add("hidden")
    })
  };
mainSlider && mainSliderButton && (mainSliderButton.forEach(function (e, t) {
  e.addEventListener("click", function (o) {
    o.preventDefault(), document.querySelector(".button-slide-active-current").classList.remove("button-slide-active-current"), hideSlideContent(), mainSlider[t] && mainSlider[t].classList.remove("hidden"), e.classList.add("button-slide-active-current")
  })
}), buttonArrow.forEach(function (e, t) {
  e.addEventListener("click", function (e) {
    e.preventDefault(), document.querySelector(".button-slide-active-current").classList.remove("button-slide-active-current"), hideSlideContent(), mainSlider[t] && mainSlider[t].classList.remove("hidden"), mainSliderButton[t].classList.add("button-slide-active-current")
  })
}));
