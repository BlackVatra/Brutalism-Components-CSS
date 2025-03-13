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

function updateDropdownText(buttonId, link) {
    const button = document.getElementById(buttonId);
    const dropdownIcon = document.getElementById(buttonId.replace('Button', 'Icon'));
    const selectedValue = link.dataset.value;

    // Check if the same item is clicked again
    if (button.innerText.includes(selectedValue)) {
        button.innerText = buttonId.replace('DropdownButton', ' Dropdown');
        dropdownIcon.innerText = 'arrow_drop_down'; // Reset to default icon
    } else {
        button.innerText = selectedValue;
        dropdownIcon.innerText = 'arrow_drop_down'; // Update icon
    }

    button.classList.remove('elevated');
    button.classList.add('pushed');

    // Hide the dropdown after selecting an option
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.remove('show');
}

function toggleDropdown(buttonId) {
    const dropdownContent = document.getElementById(buttonId).nextElementSibling;
    
    // Close other open dropdowns
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('show') && dropdowns[i] !== dropdownContent) {
            dropdowns[i].classList.remove('show');
        }
    }

    dropdownContent.classList.toggle('show');
}