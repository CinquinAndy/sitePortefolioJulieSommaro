function changementtaillefenetre() {
    let imageBackground = document.getElementById("backgroundAccueil");
    let premiereImage = document.getElementById("premierProjetCarroussel");
    let deuxiemeImage = document.getElementById("deuxiemeProjetCarroussel");
    let troisiemeImage = document.getElementById("troisiemeProjetCarroussel");
    let quatriemeImage = document.getElementById("quatriemeProjetCarroussel");
    let cinquiemeImage = document.getElementById("cinquiemeProjetCarroussel");

    if (document.body.clientWidth >= 680) {
        imageBackground.src = 'images/backgroundDesktop.jpg';
        //todo projets liens vers moodboard Desktop version
        premiereImage.src = 'images/cinquinMaeva.png';
        deuxiemeImage.src = 'images/Conseils.png';
        troisiemeImage.src = 'images/Ifrocean.png';
        quatriemeImage.src = 'images/CinquinAndy.png';
        cinquiemeImage.src = 'images/BewSite.png';
    } else if (document.body.clientWidth < 680) {
        imageBackground.src = 'images/backgroundPhone.jpg';
        //todo projets liens vers moodboard Phone version
        premiereImage.src = 'images/cinquinMaevaPhone.png';
        deuxiemeImage.src = 'images/ConseilsPhone.png';
        troisiemeImage.src = 'images/IfroceanPhone.png';
        quatriemeImage.src = 'images/CinquinAndyPhone.png';
        cinquiemeImage.src = 'images/BewSitePhone.png';
    }
}

