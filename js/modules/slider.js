// slider.js
document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector(".hero__slides");
    const dots = document.querySelectorAll(".hero__dot");
    let currentIndex = 0;
    let interval;
    const totalSlides = dots.length;
  
    function showSlide(index) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
      currentIndex = index;
    }
  
    function nextSlide() {
      let nextIndex = (currentIndex + 1) % totalSlides;
      showSlide(nextIndex);
    }
  
    function prevSlide() {
      let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(prevIndex);
    }
  
    function startAutoSlide() {
      interval = setInterval(nextSlide, 3000);
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    // Inicia el slider
    showSlide(currentIndex);
    startAutoSlide();
  
    // Agregar eventos a los dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        stopAutoSlide();
        startAutoSlide();
      });
    });
  
    // Si decides usar flechas de navegación, descomenta y asegúrate de agregarlas en el HTML
    /*
    const nextButton = document.querySelector(".hero__next");
    const prevButton = document.querySelector(".hero__prev");
    if (nextButton && prevButton) {
      nextButton.addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    
      prevButton.addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    }
    */
  });
  