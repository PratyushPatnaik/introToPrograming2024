document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  document.getElementById("started").addEventListener("click", function () {
    body.classList.remove("show"); // Start fade-out effect
    setTimeout(() => {
      window.location.href = "screen2.html"; // Redirect after fade-out
    }, 1000); // Match this duration to the CSS transition time
  });
});
