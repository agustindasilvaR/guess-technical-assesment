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

    showSlide(currentIndex);
    startAutoSlide();

    document.querySelector(".hero__next").addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    document.querySelector(".hero__prev").addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });


});
