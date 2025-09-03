const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",()=>{
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

// =======================
// HERO BUTTONS
// =======================
const orderBtn = document.querySelector(".order_now");
const contactBtn = document.querySelector(".contact-us");

// "Order Now" → scroll + alert
orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menu-section").scrollIntoView({ behavior: "smooth" });
  alert("☕ Thank you for your order! Your coffee is on the way!");
});

// "Contact Us" → scroll + alert
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
  alert("📞 We will contact you shortly. Thanks for reaching out!");
});

// =======================
// NAVBAR LINKS SCROLL
// =======================
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target.textContent.trim().toLowerCase();

    if (target === "home") {
      document.querySelector(".hero-section").scrollIntoView({ behavior: "smooth" });
    } else if (target === "about") {
      document.querySelector(".about-section").scrollIntoView({ behavior: "smooth" });
    } else if (target === "menu") {
      document.querySelector(".menu-section").scrollIntoView({ behavior: "smooth" });
    } else if (target === "testimonials") {
      document.querySelector(".testimonials-section").scrollIntoView({ behavior: "smooth" });
    } else if (target === "contact") {
      document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
    }

    // Close menu after clicking (for mobile)
    navMenuWrapper.classList.remove("active");
  });
});
