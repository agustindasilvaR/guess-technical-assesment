  document.addEventListener("DOMContentLoaded", () => {

    const leftDrawer = document.querySelector(".drawer--left");
    const closeLeftBtn = document.getElementById("closeDrawer");
    const openLeftBtn = document.getElementById("openDrawer");
    const openLeftMenu = document.getElementById("drawerMenuOpen");


    function openLeftDrawer() {
      leftDrawer.classList.add("open");
    }

    function closeLeftDrawer() {
      leftDrawer.classList.remove("open");
    }

    if (openLeftBtn) openLeftBtn.addEventListener("click", openLeftDrawer);
    if (openLeftMenu) openLeftMenu.addEventListener("click", openLeftDrawer);
    closeLeftBtn.addEventListener("click", closeLeftDrawer);

    const rightDrawer = document.querySelector(".drawer--right");
    const closeRightBtn = document.getElementById("closeDrawerRight");
    const openRightBtn = document.getElementById("openDrawerRight");

    function openRightDrawer() {
      rightDrawer.classList.add("open");
    }

    function closeRightDrawer() {
      rightDrawer.classList.remove("open");
    }

    if (openRightBtn) openRightBtn.addEventListener("click", openRightDrawer);
    closeRightBtn.addEventListener("click", closeRightDrawer);
  });
