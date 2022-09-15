const detailsElements = document.querySelectorAll("details");

function handleClickOnDetails() {
  //pega detail abertos
  let detailsOpened = document.querySelectorAll("details[open]");

  //para cada item dentro dos details abertos
  for (const item of detailsOpened) {
    // se o clicado atual for diferente do item que está, então remove open do item que está para abrir this
    if (this != item) {
      item.removeAttribute("open");
    }
  }
}

detailsElements.forEach(function (item) {
  item.addEventListener("click", handleClickOnDetails);
});
