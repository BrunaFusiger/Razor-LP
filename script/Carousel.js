const back = document.querySelector("#carousel-container #back");
const go = document.querySelector("#carousel-container #go");
const images = document.querySelectorAll("#carousel-container .img");

//saber o index do atual slide
let indxCurrentSlide = 0;

//numero máximo de slides
let maxSlide = images.length - 1;

//aumentar index quando clica em go e se indx = max slide, volta pra 0
go.addEventListener("click", () => {
  if (indxCurrentSlide === maxSlide) {
    indxCurrentSlide = 0;
  } else {
    indxCurrentSlide++;
  }

  // indx 1 = 100% (padrão)
  // 100 x index da imagem - index atual
  images.forEach((img, indx) => {
    img.style.transform = `translateX(${100 * (indx - indxCurrentSlide)}%)`;
  });
});

back.addEventListener("click", () => {
    if (indxCurrentSlide === 0) {
      indxCurrentSlide = maxSlide;
    } else {
      indxCurrentSlide--;
    }
  
    images.forEach((img, indx) => {
      img.style.transform = `translateX(${100 * (indx - indxCurrentSlide)}%)`;
    });
  });


  

