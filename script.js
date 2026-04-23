const themeBtn = document.getElementById("themeBtn") || document.getElementById("theme-toggle");
const iconMoon = document.getElementById("iconMoon") || document.getElementById("icon-moon");
const iconSun = document.getElementById("iconSun") || document.getElementById("icon-sun");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (iconMoon) iconMoon.style.display = "none";
    if (iconSun) iconSun.style.display = "block";
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        if (iconMoon && iconSun) {
            iconMoon.style.display = isDark ? "none" : "block";
            iconSun.style.display = isDark ? "block" : "none";
        }

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
const navToggle = document.getElementById("navToggle") || document.getElementById("close");
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navToggle) navToggle.checked = false;
    });
});
const modal = document.getElementById("pcModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".pc-item").forEach(pc => {
    pc.addEventListener("click", () => {
        modal.style.display = "flex";

        modalImg.src = pc.dataset.img;
        modalTitle.textContent = pc.dataset.name;
        modalPrice.textContent = "Prix : " + pc.dataset.price;
        modalDesc.textContent = pc.dataset.desc;
    });
});
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

