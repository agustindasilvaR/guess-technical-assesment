  document.addEventListener("DOMContentLoaded", () => {
      const faqItems = document.querySelectorAll(".accordion__item");
    
      faqItems.forEach((item) => {
        const question = item.querySelector(".accordion__question");
    
        question.addEventListener("click", () => {

          faqItems.forEach((i) => {
            if (i !== item) {
              i.classList.remove("active");
            }
          });
    
          item.classList.toggle("active");
        });
      });
    });
    s