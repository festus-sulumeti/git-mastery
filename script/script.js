// script.js
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const navLinks = document.querySelector(".nav-links");

    dropdownToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Toggle the dropdown visibility
    });
});
