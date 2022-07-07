const theme = localStorage.getItem('theme');

function themeSwitcher() {
    const body = document.body;
    
    alert(theme);
    //if (theme){
      //  body.classList.add(theme);
    //}



    if(body.className == "dark-theme"){
        body.classList.replace("dark-theme", "light-theme");
        theme.setItem(theme, dark-theme);
        bttn.innerHTML = "light theme";
        return;
    }
    if(body.className == "light-theme"){
        body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem(theme, light-theme);
        bttn.innerHTML = "dark theme";
        return;
    }
}

function themeSwitcher2(){
    const body = document.body;
    let check = document.getElementById("check");

    if (check.checked == true){
        body.classList.replace('dark-theme', 'light-theme');
    }
    else{
        body.classList.replace('light-theme', 'dark-theme');
    }
    
}
