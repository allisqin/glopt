//namburger
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

close.addEventListener('click', () => {
   menu.classList.remove('active');
});



//slider
const slides = document.querySelectorAll('.slide'); //Получаем все слайды
const prevBtn = document.querySelector('.arrow-prev');
const nextBtn = document.querySelector('.arrow-next');
const slideCount = slides.length;
let slideIndex = 1;
console.log('хуй');
nextBtn.addEventListener('click', function() { //Слушатель нажатия на кнопку "вперёд"
  slideIndex = (slideIndex + 1) % slideCount; //Высчитывание индекса следующего слайда
  updateSlider();
});

prevBtn.addEventListener('click', function() { //Слушатель нажатия на кнопку "назад"
  slideIndex = (slideIndex - 1 + slideCount) % slideCount; //Высчитывание индекса предыдущего слайда
  updateSlider();
});

function updateSlider() { //Функция для изменения классов всех слайдов при нажатии на кнопку
  const nextSlide = (slideIndex + 1) % slideCount;
  const prevSlide = (slideIndex - 1 + slideCount) % slideCount;

  document.querySelector('.slide-active').classList.remove("slide-active");
  slides[slideIndex].classList.add("slide-active");
  document.querySelector('.slide-next').classList.remove("slide-next");
  slides[nextSlide].classList.add("slide-next");
  document.querySelector('.slide-prev').classList.remove("slide-prev");
  slides[prevSlide].classList.add("slide-prev");
}


