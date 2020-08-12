function changementtaillefenetre() {
    let projetTrigonMoodboard= document.getElementById("projetTrigonMoodboard");
    let projetTrigonCollages= document.getElementById("projetTrigonCollages");
    let projetTrigonPalette= document.getElementById("projetTrigonPalette");
    let projetTrigonGarment= document.getElementById("projetTrigonGarment");
    let projetTrigonMaterialManipulation= document.getElementById("projetTrigonMaterialManipulation");

    if (document.body.clientWidth >= 680) {
        projetTrigonMoodboard.src = 'images/trigonMoodboard_beige.jpg';
        projetTrigonCollages.src = 'images/trigonCollage.jpg';
        projetTrigonPalette.src = 'images/trigonColorPalette.jpg';
        projetTrigonGarment.src = 'images/trigonGarment.jpg';
        projetTrigonMaterialManipulation.src = 'images/trigonMaterialManipulation.jpg';
    } else if (document.body.clientWidth < 680) {
        projetTrigonMoodboard.src = 'images/trigonMoodboardPhone_beige.jpg';
        projetTrigonCollages.src = 'images/trigonCollagePhone.jpg';
        projetTrigonPalette.src = 'images/trigonColorPalettePhone.jpg';
        projetTrigonGarment.src = 'images/trigonGarmentPhone.jpg';
        projetTrigonMaterialManipulation.src = 'images/trigonMaterialManipulationPhone.jpg';
    }
}

