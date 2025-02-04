// drawer.js
document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.getElementById("drawer");
    const closeButton = document.getElementById("closeDrawer");
    const menu = document.getElementById("openDrawer");
    const menuAlt = document.getElementById("openDrawer-alt");
    const overlay = document.getElementById(".overlay")
  
    // Define la dirección del drawer ("left" o "top")
    let drawerDirection = "left"; // Cambia a "top" si se desea
  
    // Asigna la clase de dirección al drawer
    drawer.classList.add(drawerDirection);
  
    // Función para abrir el drawer
    function openDrawer() {
      drawer.classList.add("open");
      overlay.classList.add("active");
    }
  
    // Función para cerrar el drawer
    function closeDrawer() {
      drawer.classList.remove("open");
    }
  
    // Eventos de apertura y cierre

    menu.addEventListener("click", openDrawer);    
    closeButton.addEventListener("click", closeDrawer);
  });
  