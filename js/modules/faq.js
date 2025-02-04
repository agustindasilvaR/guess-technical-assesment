document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq__item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq__question");
  
      question.addEventListener("click", () => {

        faqItems.forEach((i) => {
          if (i !== item) {
            i.classList.remove("active");
          }
        });
  
        // Alterna la clase 'active' en el item actual
        item.classList.toggle("active");
      });
    });
  });
  