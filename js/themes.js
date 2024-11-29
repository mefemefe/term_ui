const themes = ['default', 'dark', 'ubuntu', 'light'];
let currentThemeIndex = 0;

export const toggleTheme = () => {
// Cycle through themes
currentThemeIndex = (currentThemeIndex + 1) % themes.length;
const theme = themes[currentThemeIndex];

// Set the data-theme attribute
document.documentElement.setAttribute('data-theme', theme);
};
