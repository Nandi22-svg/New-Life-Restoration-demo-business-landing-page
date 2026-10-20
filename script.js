const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// MOBILE MENU
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// FORM HANDLING (SIMULATION ONLY)
const forms = document.querySelectorAll(".form");

forms.forEach(form => {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! Your submission has been received.");
        form.reset();
    });
});