window.onload = () => {
    if (localStorage.leftHand != null && localStorage.leftHandIcon != null) {
        document.getElementById('text').innerHTML = `${leftHand}`;
        document.getElementById('icon').innerHTML = `${leftHandIcon}`;

    } if (localStorage.rightHand != null && localStorage.rightHandIcon != null) {
        document.getElementById('text').innerHTML = `${rightHand}`;
        document.getElementById('icon').innerHTML = `${rightHandIcon}`;
    
    } if (localStorage.leftFoot != null && localStorage.leftFootIcon != null) {
        document.getElementById('text').innerHTML = `${leftFoot}`;
        document.getElementById('icon').innerHTML = `${leftFootIcon}`;

    } if (localStorage.rightFoot != null && localStorage.rightFootIcon != null) {
        document.getElementById('text').innerHTML = `${rightFoot}`;
        document.getElementById('icon').innerHTML = `${rightFootIcon}`;

    } if (localStorage.leftStomach != null && localStorage.leftStomachIcon != null) {
        document.getElementById('text').innerHTML = `${leftStomach}`;
        document.getElementById('icon').innerHTML = `${leftStomachIcon}`;

    } if (localStorage.rightStomach != null && localStorage.rightStomachIcon != null) {
        document.getElementById('text').innerHTML = `${rightStomach}`;
        document.getElementById('icon').innerHTML = `${rightStomachIcon}`;

    }

}

let leftHand = "<h1 class='title'>Dernière injection dans <span>la main droite</span>";
let leftHandIcon = "<img src='assets/img/Nouveau projet (3) (2).png' class='img1'  alt=''>";

let rightHand = "<h1 class='title'>Dernière injection dans <span>la main gauche</span>";
let rightHandIcon = "<img src='assets/img/Nouveau projet (3) (2).png' class='img2' alt=''>";

let rightFoot = "<h1 class='title'>Dernière injection dans <span>le pied gauche</span>";
let rightFootIcon = "<img src='assets/img/Nouveau projet (3) (2).png' class='img3' alt=''>";

let leftFoot = "<h1 class='title'>Dernière injection dans <span>le pied droit</span>";
let leftFootIcon = "<img src='assets/img/Nouveau projet (3) (2).png' class='img4' alt=''>";

let leftStomach = "<h1 class='title'>Dernière injection dans <span>le ventre côté droit</span>";
let leftStomachIcon = "<img src='assets/img/Nouveau projet (3) (2).png' class='img5' alt=''>";

let rightStomach = "<h1 class='title'>Dernière injection dans <span>le ventre côté gauche</span>";
let rightStomachIcon = "<img src='assets/img/Nouveau projet (3) (2).png' class='img6' alt=''>";


document.getElementById('mainDroite').onclick = () => {
    document.getElementById('text').innerHTML = leftHand;
    document.getElementById('icon').innerHTML = leftHandIcon;
    localStorage.clear();
    localStorage.setItem("leftHand", leftHand);
    localStorage.setItem("leftHandIcon", leftHandIcon);

}
document.getElementById('mainGauche').onclick = () => {
    document.getElementById('text').innerHTML = rightHand;
    document.getElementById('icon').innerHTML = rightHandIcon;
    localStorage.clear();
    localStorage.setItem("rightHand", rightHand);
    localStorage.setItem("rightHandIcon", rightHandIcon);
}
document.getElementById('piedDroit').onclick = () => {
    document.getElementById('text').innerHTML = leftFoot;
    document.getElementById('icon').innerHTML = leftFootIcon;
    localStorage.clear();
    localStorage.setItem("leftFoot", leftFoot);
    localStorage.setItem("leftFootIcon", leftFootIcon);
}

document.getElementById('piedGauche').onclick = () => {
    document.getElementById('text').innerHTML = rightFoot;
    document.getElementById('icon').innerHTML = rightFootIcon;
    localStorage.clear();
    localStorage.setItem("rightFoot", rightFoot);
    localStorage.setItem("rightFootIcon", rightFootIcon);

}
document.getElementById('ventreDroit').onclick = () => {
    document.getElementById('text').innerHTML = leftStomach;
    document.getElementById('icon').innerHTML = leftStomachIcon;
    localStorage.clear();
    localStorage.setItem("leftStomach", leftStomach);
    localStorage.setItem("leftStomachIcon", leftStomachIcon);
}
document.getElementById('ventreGauche').onclick = () => {
    document.getElementById('text').innerHTML = rightStomach;
    document.getElementById('icon').innerHTML = rightStomachIcon;

    localStorage.clear();
    localStorage.setItem("rightStomach", rightStomach);
    localStorage.setItem("rightStomachIcon", rightStomachIcon);

}
