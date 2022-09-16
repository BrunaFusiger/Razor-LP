const back = document.querySelector("#carousel-container #back");
const go = document.querySelector("#carousel-container #go");
const images = document.querySelectorAll("#carousel-container .img");

//saber o index do atual slide
let indexCurrentSlide = 2;

//numero máximo de slides
let maxSlide = images.length - 1;

//aumentar index quando clica em go e se index = max slide, volta pra 0
go.addEventListener("click", () => {
  if (indexCurrentSlide === maxSlide) {
    indexCurrentSlide = 0;
  } else {
    indexCurrentSlide++;
  }

  // index 1 = 100% (padrão)
  // 100 x index da imagem - index atual
  images.forEach((img, index) => {
    img.style.transform = `translateX(${100 * (index - indexCurrentSlide)}%)`;
  });
});

back.addEventListener("click", () => {
    if (indexCurrentSlide === 0) {
      indexCurrentSlide = maxSlide;
    } else {
      indexCurrentSlide--;
    }
  
    images.forEach((img, index) => {
      img.style.transform = `translateX(${100 * (index - indexCurrentSlide)}%)`;
    });
  });


  

