// script.js
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement; // Refers to the <html> tag
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        htmlElement.classList.remove('light');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        htmlElement.classList.add('light');
        htmlElement.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
    localStorage.setItem('theme', theme); // Save preference
}

// Check for saved theme preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no preference saved, check system preference
    setTheme('dark');
} else {
    setTheme('light'); // Default to light mode
}

// Toggle theme on button click
darkModeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});
