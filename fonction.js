function changementtaillefenetre() {
    let imageBackground = document.getElementById("backgroundAccueil");
    let premiereImage = document.getElementById("premierProjetCarroussel");
    let deuxiemeImage = document.getElementById("deuxiemeProjetCarroussel");
    let troisiemeImage = document.getElementById("troisiemeProjetCarroussel");
    let quatriemeImage = document.getElementById("quatriemeProjetCarroussel");
    let cinquiemeImage = document.getElementById("cinquiemeProjetCarroussel");


    if (document.body.clientWidth >= 680) {
        imageBackground.src = 'images/backgroundDesktop.jpg';

        premiereImage.src = 'images/trigonPresentation_Red.jpg';
        deuxiemeImage.src = 'images/unitePresentation.jpg';
        troisiemeImage.src = 'images/trigonPresentation_Red.jpg';
        quatriemeImage.src = 'images/trigonPresentation_Red.jpg';
        cinquiemeImage.src = 'images/trigonPresentation_Red.jpg';
    } else if (document.body.clientWidth < 680) {
        imageBackground.src = 'images/backgroundPhone.jpg';

        premiereImage.src = 'images/trigonPresentationPhone_Red.jpg';
        deuxiemeImage.src = 'images/unitePresentationPhone.jpg';
        troisiemeImage.src = 'images/trigonPresentationPhone_Red.jpg';
        quatriemeImage.src = 'images/trigonPresentationPhone_Red.jpg';
        cinquiemeImage.src = 'images/trigonPresentationPhone_Red.jpg';
    }
}

