// filepath: /Users/vadymbas/Documents/Projects/my-frontend-project/scripts.js
function setTheme(theme) {
  document.documentElement.setAttribute("theme", theme);
}

// Set initial theme on page load
document.addEventListener("DOMContentLoaded", function() {
  setTheme("Light"); // Or "Dark (WIP)" if you prefer dark as the default
});

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("theme");
  setTheme(currentTheme === "Light" ? "Dark" : "Light");
}

// Example usage
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

document.addEventListener("keydown", function(event) {
  if (event.key === "t") {
    toggleTheme();
  }
});