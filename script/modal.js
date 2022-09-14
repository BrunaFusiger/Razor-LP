const modal = document.querySelector(".modal");
const imageBeforeModal = document.querySelector(".imageBeforeModal");
const close = document.querySelector(".close");
const body = document.querySelector("body")

imageBeforeModal.addEventListener("click", () => {
  modal.style.display = "block";
  body.classList.add('overflow')
  setTimeout(() => {
    modal.classList.add('show');
  }, 0);
});



close.addEventListener("click", () => {
  modal.classList.remove('show');
  body.classList.remove('overflow')
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});
