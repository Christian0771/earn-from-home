// Simple redirect after form submission
document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "waiting.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }
});
