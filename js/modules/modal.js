    document.addEventListener("DOMContentLoaded", () => {
        
        const modal = document.getElementById("modal");
        const openModalBtn = document.getElementById("openModal");
        const closeModalBtn = document.getElementById("closeModal");
    
        function openModal() {
        modal.classList.add("active");
        }
    
        function closeModal() {
        modal.classList.remove("active");
        }
    
        openModalBtn.addEventListener("click", openModal);
    
        closeModalBtn.addEventListener("click", closeModal);
    
 
        modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
        });
    });
    