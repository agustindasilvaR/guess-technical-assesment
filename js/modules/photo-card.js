document.addEventListener("DOMContentLoaded", () => {
    const photoCards = document.querySelectorAll('.photo-card');
    
    const modal = document.getElementById('modal');
    const modalImage = modal.querySelector('.modal__image');
    const closeModalBtn = document.getElementById('closeModal');
  
    function openModalWithImage(imgSrc, altText) {
      modalImage.src = imgSrc;
      modalImage.alt = altText;
      modal.classList.add('active');
    }
  
    photoCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.photo-card__image');
        if (img) {
          openModalWithImage(img.src, img.alt);
        }
      });
    });
  
    function closeModal() {
      modal.classList.remove('active');
    }
  
    closeModalBtn.addEventListener('click', closeModal);
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  });
  