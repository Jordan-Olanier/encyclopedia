const theme = {
    htmlBody: document.querySelector("body"),

    handleSwitchTheme: function() {
        theme.htmlBody.classList.toggle("theme-dark");
        theme.switchThemeImg();
    },
    
    switchThemeImg: function() {
        const switchThemeImage = document.querySelector('#theme-switch-img');
        if (theme.htmlBody.classList.contains("theme-dark")){
            switchThemeImage.src = "../img/logo_soleil.png";
        } else {
            switchThemeImage.src = "../img/logo_lune.png";
        };
    },
    
    manageEvent: function() {
        const switchThemeButton = document.querySelector('#theme-switch');
        switchThemeButton.addEventListener('click', theme.handleSwitchTheme);
    },

    init: function() {
        theme.manageEvent();
    },
    
}

document.addEventListener('DOMContentLoaded', theme.init);