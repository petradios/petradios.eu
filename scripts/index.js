const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

const theme = localStorage.getItem('theme');

darkButton.onclick = () => {
    body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  };
  
  lightButton.onclick = () => {
    body.classList.replace('dark-theme', 'light-theme');
  
    localStorage.setItem('theme', 'light-theme');
  };
