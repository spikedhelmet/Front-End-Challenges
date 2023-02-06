const markAsRead = document.querySelector(`.read`);
const notifications = document.querySelectorAll(`.notification`);
const notifCount = document.querySelector(`.notif-count`);
// const dot = document.querySelectorAll(`.dot`);

notifCount.innerHTML = document.querySelectorAll(`.container .unread`).length;

function removeDots(elem) {
  const dot = elem.querySelector(".dot");
  dot.classList.add(`hidden`);
}

notifications.forEach(function (i) {
  i.addEventListener(`click`, function () {
    i.classList.remove(`unread`);
    removeDots(i);
    notifCount.innerHTML =
      document.querySelectorAll(`.container .unread`).length;
    if (document.querySelectorAll(`.container .unread`).length <= 0) {
      notifCount.classList.add(`hidden`);
    }
  });
});

markAsRead.addEventListener(`click`, function () {
  notifications.forEach(function (i) {
    i.classList.remove(`unread`);
    removeDots(i);
    notifCount.innerHTML =
      document.querySelectorAll(`.container .unread`).length;
    if (document.querySelectorAll(`.container .unread`).length <= 0) {
      notifCount.classList.add(`hidden`);
    }
  });
});
