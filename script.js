// ✅ Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ✅ Initialize AOS Animations
AOS.init({
  duration: 1000,
  once: true,
});

// Ensure AOS works after full page load
window.addEventListener("load", () => {
  AOS.refresh();
});

// 🌙 Dark Mode Toggle
const toggleSwitch = document.getElementById("dark-mode-toggle");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// 😜 Clickbait prank logic
const fakeBtn = document.getElementById("resume-fake");
const realBtn = document.getElementById("resume-real");
const prankMsg = document.getElementById("clickbait-msg");

if (fakeBtn) {
  fakeBtn.addEventListener("click", () => {
    fakeBtn.classList.add("hidden");
    prankMsg.classList.remove("hidden");
    realBtn.classList.remove("hidden");
  });
}

