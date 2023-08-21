import WOW from "wowjs";
// Animation with wowjs
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = WOW;//require("wowjs");
  }
  new WOW.WOW().init();
};

// Sidebar
export const sidebarToggle = () => {
  const body = document.querySelector("body");
  body.classList.toggle("side-content-visible");
};

// Sticky nav
const stickyNav_ = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".main-header");
  for (let i = 0; i < sticky.length; i++) {
    const stick = sticky[i];
    if (stick) {
      if (offset > 10) {
        stick.classList.add("fixed-header");
      } else {
        stick.classList.remove("fixed-header");
      }
    }
  }
};
export const stickyNav = (stickyClass) =>
  window.addEventListener("scroll", stickyNav_);

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};




export const showNotification = (colorName, text, placementFrom, placementAlign, animateEnter, animateExit) => {
  if (colorName === null || colorName === '') { colorName = 'pastel-danger'; }
  if (text === null || text === '') { text = 'alert'; }
  if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
  if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
  var allowDismiss = true;

  $.notify({
          message: text
      },
      {
          type: colorName,
          allow_dismiss: allowDismiss,
          newest_on_top: true,
          timer: 1000,
          placement: {
              from: placementFrom,
              align: placementAlign
          },
          animate: {
              enter: animateEnter,
              exit: animateExit
          },
  });
}

export const createRatings = (drating) =>{
  var rating = ``;
  if (drating != 0){
      if (drating > 0)
          rating = `<span class="fa fa-star checked"></span>`;
      else
          rating = `<span class="fa fa-star"></span>`;
      if (drating > 1)
          rating = `${rating}<span class="fa fa-star checked"></span>`;
      else
          rating = `${rating}<span class="fa fa-star"></span>`;
      if (drating > 2)
          rating = `${rating}<span class="fa fa-star checked"></span>`;
      else
          rating = `${rating}<span class="fa fa-star"></span>`;
      if (drating > 3)
          rating = `${rating}<span class="fa fa-star checked"></span>`;
      else
          rating = `${rating}<span class="fa fa-star"></span>`;
      if (drating > 4)
          rating = `${rating}<span class="fa fa-star checked"></span>`;
      else
          rating = `${rating}<span class="fa fa-star"></span>`;
  }
  return rating;
}
