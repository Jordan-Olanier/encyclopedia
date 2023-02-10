const theme = {
    // récupération du body
    htmlBody: document.querySelector("body"),
    // je récupère l'image
    htmlswitchThemeImage: document.querySelector('#theme-switch-img'),

    // Méthode initiale (obligatoire)
    init: function() {
        theme.manageEvent();
        // j'appelle la méthode qui gère la préférence du theme
        theme.loadPreferenceTheme();
    },

    // Méthode qui gère les actions 
    manageEvent: function() {
        // récupération du bouton qui switch les thèmes
        const htmlswitchThemeButton = document.querySelector('#theme-switch-button');
        // action sur le clique du bouton qui fait changé le thème
        htmlswitchThemeButton.addEventListener('click', theme.handleSwitchTheme);
    },

    // Méthode qui permet de switcher entre le mode sombre et le mode clair
    handleSwitchTheme: function() {
        // j'ajoute ou je supprime la classe "theme-dark" sur la balise <body>
        theme.htmlBody.classList.toggle("theme-dark");
        // j'appelle la méthode qui change l'image en fonction du thème choisi
        theme.switchThemeImg();
        // je sauvegarde la préférence dans le localStorage
        theme.saveToLocalStorage();
    },

    // Méthode qui permet de changer l'image du bouton "switch-theme"
    switchThemeImg: function() {
        // si le body contient la classe "theme-dark"...
        if (theme.htmlBody.classList.contains("theme-dark")){
            // ...alors je mets le logo du soleil...
            theme.htmlswitchThemeImage.src = "../img/logo_soleil.png";
        } else {
            // ...sinon je mets le logo de la lune
            theme.htmlswitchThemeImage.src = "../img/logo_lune.png";
        };
    },

    // Méthode qui permet de sauvegarder les préfrence dans le localStorage
    saveToLocalStorage: function() {
        // je vérifie si le body a la classe "theme-dark" où pas
        const themeDark = theme.htmlBody.classList.contains("theme-dark");
        // je transforme la donnée en string... 
        const themeDarkJson = JSON.stringify(themeDark);
        // ...pour la stocker dans le localStorage
        localStorage.setItem("theme", themeDarkJson);
    },

    // Méthode qui permet de récupérer la préférence de l'utilisateur
    loadPreferenceTheme: function() {
        // on récupère l'info du thème actuel
        const preferenceThemeJson = localStorage.getItem("theme");
        // on transforme la valeur en booléen
        const preferenceThemeBool = JSON.parse(preferenceThemeJson);
        // si la préféence est le thème dark... 
        if (preferenceThemeBool) {
            //...alors je mets la classe theme-dark, et l'image du soleil...
            theme.htmlBody.classList.add("theme-dark")
            theme.htmlswitchThemeImage.src = "../img/logo_soleil.png";
        } else {
            //...sinon je l'enlève et je mets l'image de la lune
            theme.htmlBody.classList.remove("theme-dark")
            theme.htmlswitchThemeImage.src = "../img/logo_lune.png";
        }
    },

}
// Lancement de la méthode init
document.addEventListener('DOMContentLoaded', theme.init);