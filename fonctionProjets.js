function changementtaillefenetre() {
    let projetTrigonMoodboard = document.getElementById("projetTrigonMoodboard");
    let projetTrigonPalette = document.getElementById("projetTrigonPalette");
    let projetTrigonCollages = document.getElementById("projetTrigonCollages");
    let projetTrigonGarment = document.getElementById("projetTrigonGarment");
    let projetTrigonMaterialManipulation = document.getElementById("projetTrigonMaterialManipulation");

    let projetUniteMoodboard = document.getElementById("projetUniteMoodboard");
    let projetUniteColorPalette = document.getElementById("projetUniteColorPalette");
    let projetUniteCollectionLineup = document.getElementById("projetUniteCollectionLineup");
    let projetUniteCollectionLineup2 = document.getElementById("projetUniteCollectionLineup2");

    let projetStarRunnerMoodboard = document.getElementById("projetStarRunnerMoodboard");
    let projetStarRunnerColorPalette = document.getElementById("projetStarRunnerColorPalette");
    let projetStarRunnerCollectionLineup = document.getElementById("projetStarRunnerCollectionLineup");
    let projetStarRunnerCollectionLineup2 = document.getElementById("projetStarRunnerCollectionLineup2");

    let projetStarRunnerPrintsMoodboard = document.getElementById("projetStarRunnerPrintsMoodboard");
    let projetStarRunnerPrintsColorPalette = document.getElementById("projetStarRunnerPrintsColorPalette");
    let projetStarRunnerPrintsCollectionLineup = document.getElementById("projetStarRunnerPrintsLineup");
    let projetStarRunnerPrintsCollectionLineup2 = document.getElementById("projetStarRunnerPrintsLineup2");

    let projetStarRunnerTheseMoodboard = document.getElementById("projetStarRunnerTheseMoodboard");
    let projetStarRunnerTheseColorPalette = document.getElementById("projetStarRunnerTheseColorPalette");
    let projetStarRunnerTheseCollectionLineup = document.getElementById("projetStarRunnerTheseLineup");
    let projetStarRunnerTheseCollectionLineup2 = document.getElementById("projetStarRunnerTheseLineup2");

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
        projetUniteCollectionLineup.src = 'images/uniteCollectionLineup.jpg';
        projetUniteCollectionLineup2.src = 'images/uniteCollectionLineup2.jpg';

        //StarRunner desktop
        projetStarRunnerMoodboard.src = 'images/starRunnerMoodboard.jpg';
        projetStarRunnerColorPalette.src = 'images/starRunnerColorPalette.jpg';
        projetStarRunnerCollectionLineup.src = 'images/starRunnerCollectionLineup.jpg';
        projetStarRunnerCollectionLineup2.src = 'images/starRunnerCollectionLineup2.jpg';

        //StarRunner Prints desktop
        projetStarRunnerPrintsMoodboard.src = 'images/starRunnerPrintsMoodboard.jpg';
        projetStarRunnerPrintsColorPalette.src = 'images/starRunnerPrintsColorPalette.jpg';
        projetStarRunnerPrintsCollectionLineup.src = 'images/starRunnerPrintsLineup.jpg';
        projetStarRunnerPrintsCollectionLineup2.src = 'images/starRunnerPrintsLineup2.jpg';

        //StarRunner These desktop
        projetStarRunnerTheseMoodboard.src = 'images/starRunnerTheseMoodboard.jpg';
        projetStarRunnerTheseColorPalette.src = 'images/starRunnerColorPaletteThese.jpg';
        projetStarRunnerTheseCollectionLineup.src = 'images/starRunnerTheseCollectionLineup.jpg';
        projetStarRunnerTheseCollectionLineup2.src = 'images/starRunnerTheseCollectionLineup2.jpg';
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
        projetUniteCollectionLineup.src = 'images/uniteCollectionLineupPhone.jpg';
        projetUniteCollectionLineup2.src = 'images/uniteCollectionLineup2Phone.jpg';

        //StarRunner Phone
        projetStarRunnerMoodboard.src = 'images/starRunnerMoodboardPhone.jpg';
        projetStarRunnerColorPalette.src = 'images/starRunnerColorPalettePhone.jpg';
        projetStarRunnerCollectionLineup.src = 'images/starRunnerCollectionLineupPhone.jpg';
        projetStarRunnerCollectionLineup2.src = 'images/starRunnerCollectionLineup2Phone.jpg';

        //StarRunner Prints Phone
        projetStarRunnerPrintsMoodboard.src = 'images/starRunnerPrintsMoodboardPhone.jpg';
        projetStarRunnerPrintsColorPalette.src = 'images/starRunnerPrintsColorPalettePhone.jpg';
        projetStarRunnerPrintsCollectionLineup.src = 'images/starRunnerPrintsLineupPhone.jpg';
        projetStarRunnerPrintsCollectionLineup2.src = 'images/starRunnerPrintsLineup2Phone.jpg';

        //StarRunner These Phone
        projetStarRunnerTheseMoodboard.src = 'images/starRunnerTheseMoodboardPhone.jpg';
        projetStarRunnerTheseColorPalette.src = 'images/starRunnerColorPaletteThesePhone.jpg';
        projetStarRunnerTheseCollectionLineup.src = 'images/starRunnerTheseCollectionLineupPhone.jpg';
        projetStarRunnerTheseCollectionLineup2.src = 'images/starRunnerTheseCollectionLineup2Phone.jpg';
    }
}

