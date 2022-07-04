function themeSwitcher() {
    const body = document.body;
    const bttn = document.getElementById("theme-toggle");

    if(body.className == "dark-theme"){
        body.classList.replace('dark-theme', 'light-theme');
        bttn.innerHTML = "dark theme";
        return;
    }
    if(body.className == "light-theme"){
        body.classList.replace('light-theme', 'dark-theme');
        bttn.innerHTML = "light theme";
        return;
    }
}
