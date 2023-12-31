document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }

    const projects = document.querySelectorAll(".project");
    for (const project of projects) {
        project.classList.add("fade-in");
    }

    const fadeElems = document.querySelectorAll(".fade-in");
    const fadeOptions = {
        rootMargin: "0px 0px -50px 0px",
        threshold: 0
    };

    const fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                fadeObserver.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    fadeElems.forEach(elem => {
        fadeObserver.observe(elem);
    });
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
}
