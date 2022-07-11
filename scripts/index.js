function themeSwitcher() {
    const body = document.body;
    let theme = localStorage.getItem('theme');
    let button = document.getElementById("theme-toggle")
/*
    alert(theme);
    if (theme != null){
       body.classList.add(theme);
    }
    
*/

    if(body.className == "dark-theme"){
        body.classList.replace("dark-theme", "light-theme");
        button.innerHTML = "dark theme";
        theme.setItem("theme", "dark-theme");
        return;
    }
    if(body.className == "light-theme"){
        body.classList.replace("light-theme", "dark-theme");
        button.innerHTML = "light theme";
        localStorage.setItem("theme", "light-theme");
        return;
    }
}