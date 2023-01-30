const ratingPage = document.querySelector(`.all`);
const thankYou = document.querySelector(`.thankyou-component`);
const submit = document.querySelector(`.submit`);

const ratingBtn = document.querySelectorAll(`.btn`);
let rating = document.querySelector(`.rating-number`);

//* Hiding the elements

const hide = function () {
  console.log(`Rating submitted!`);
  ratingPage.classList.add(`hidden`);
  thankYou.classList.remove(`hidden`);
};
submit.addEventListener(`click`, hide);

//* Changing the rating value & disabling submit button before the rating is chosen
submit.disabled = true;

ratingBtn.forEach(function (i) {
  i.addEventListener(`click`, function (a) {
    rating.textContent = a.target.innerHTML;
    if (rating.textContent === `?`) {
      submit.disabled = true;
    } else {
      submit.disabled = false;
    }
  });
});

// const enable = function () {
//   submit.disabled = false;
// };

// ratingBtn.forEach(function (i) {
//   i.addEventListener(`click`, enable)
// }

// ratingBtn.addEventListener(`click`, enable);

// console.log(document.querySelector(`.btn`).value);

// const refresh = function () {
//   thankYou.classList.add(`hidden`);
//   ratingPage.classList.remove(`hidden`);
// };

// window.onload = function () {
//   var reloading = sessionStorage.getItem("reloading");
//   if (reloading) {
//     sessionStorage.removeItem("reloading");
//     refresh();
//   }
// };

// function reloadP() {
//   sessionStorage.setItem("reloading", "true");
//   document.location.reload();
// }
