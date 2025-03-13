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
    // link is the <a> element that was clicked
    const selectedValue = link.dataset.value;
    const buttonContent = button.querySelector('.button-content');
    const dropdownContent = button.nextElementSibling;

    // Check if the same item is clicked again
    if (buttonContent.innerText.includes(selectedValue)) {
        buttonContent.innerHTML = `Secondary Dropdown <span id="${buttonId.replace('Button', 'Icon')}" class="material-symbols-rounded">arrow_drop_down</span>`;
    } else {
        buttonContent.innerHTML = `${selectedValue} <span id="${buttonId.replace('Button', 'Icon')}" class="material-symbols-rounded">arrow_drop_down</span>`;

        // Remove 'brand' and 'secondary' class from other links and add to the selected link
        const links = dropdownContent.querySelectorAll('a'); // Select all <a> elements
        links.forEach(a => {
            a.classList.remove('brand');
            a.classList.add('secondary');
        });
        link.classList.remove('secondary');
        link.classList.add('brand'); // Add 'brand' class to the clicked <a> element
    }

    button.classList.remove('elevated');
    button.classList.add('pushed');

    // Hide the dropdown after selecting an option
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