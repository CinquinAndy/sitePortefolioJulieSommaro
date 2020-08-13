function changementtaillefenetre() {
    let projetTrigonMoodboard= document.getElementById("projetTrigonMoodboard");
    let projetTrigonPalette= document.getElementById("projetTrigonPalette");
    let projetTrigonCollages= document.getElementById("projetTrigonCollages");
    let projetTrigonGarment= document.getElementById("projetTrigonGarment");
    let projetTrigonMaterialManipulation= document.getElementById("projetTrigonMaterialManipulation");

    let projetUniteMoodboard = document.getElementById("projetUniteMoodboard");
    let projetUniteColorPalette= document.getElementById("projetUniteColorPalette");
    let projetUniteOutfit1= document.getElementById("projetUniteOutfit1");
    let projetUniteOutfit2= document.getElementById("projetUniteOutfit2");
    let projetUniteOutfit3= document.getElementById("projetUniteOutfit3");
    let projetUniteOutfit4= document.getElementById("projetUniteOutfit4");

    if (document.body.clientWidth >= 680) {
        //Trigon desktop
        projetTrigonMoodboard.src = 'images/trigonMoodboard_beige.jpg';
        projetTrigonCollages.src = 'images/trigonCollage.jpg';
        projetTrigonPalette.src = 'images/trigonColorPalette.jpg';
        projetTrigonGarment.src = 'images/trigonGarment.jpg';
        projetTrigonMaterialManipulation.src = 'images/trigonMaterialManipulation.jpg';

        //Unite desktop
        projetUniteMoodboard.src = 'images/uniteMoodboard.jpg';
        projetUniteColorPalette.src = 'images/uniteColorPalette.jpg';
        projetUniteOutfit1.src = 'images/uniteOutfit1.jpg';
        projetUniteOutfit2.src = 'images/uniteOutfit2.jpg';
        projetUniteOutfit3.src = 'images/uniteOutfit3.jpg';
        projetUniteOutfit4.src = 'images/uniteOutfit4.jpg';
    } else if (document.body.clientWidth < 680) {
        //Trigon Phone
        projetTrigonMoodboard.src = 'images/trigonMoodboardPhone_beige.jpg';
        projetTrigonCollages.src = 'images/trigonCollagePhone.jpg';
        projetTrigonPalette.src = 'images/trigonColorPalettePhone.jpg';
        projetTrigonGarment.src = 'images/trigonGarmentPhone.jpg';
        projetTrigonMaterialManipulation.src = 'images/trigonMaterialManipulationPhone.jpg';

        //Unite Phone
        projetUniteMoodboard.src = 'images/uniteMoodboardPhone.jpg';
        projetUniteColorPalette.src = 'images/uniteColorPalettePhone.jpg';
        projetUniteOutfit1.src = 'images/uniteOutfit1Phone.jpg';
        projetUniteOutfit2.src = 'images/uniteOutfit2Phone.jpg';
        projetUniteOutfit3.src = 'images/uniteOutfit3Phone.jpg';
        projetUniteOutfit4.src = 'images/uniteOutfit4Phone.jpg';
    }
}

