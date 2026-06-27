// ===============================
// BABAR TEC FRAMEWORK V1
// SCRIPT.JS (FINAL)
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1200);
});

// ===============================
// Dark Mode Toggle
// ===============================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        themeBtn.innerHTML = `<i class="fas fa-moon"></i>`;
    }
});

// ===============================
// Scroll To Top Button
// ===============================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// Sticky Header Shadow
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }
});

// ===============================
// Contact Form Alert
// ===============================
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("✅ Message Sent Successfully!");
        contactForm.reset();
    });
}

// ===============================
// Smooth Scroll (Nav Links)
// ===============================
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Active Nav Highlight
// ===============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===============================
// Scroll Reveal Animation
// ===============================
const elements = document.querySelectorAll(
    ".service-card, .feature-card, .portfolio-card, .price-card, .team-card, .testimonial-card, .stat-box"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});

// ===============================
// Console Message
// ===============================
console.log("🚀 Babar TEC Framework V1 Loaded Successfully!");
console.log("👨‍💻 Developed by Babar Akram");
