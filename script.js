// Portfolio Website JavaScript

console.log("Portfolio Loaded Successfully!");

// Display welcome message
window.onload = function () {
    alert("Welcome to My Portfolio!");
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});
