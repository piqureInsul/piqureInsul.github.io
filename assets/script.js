window.onload = () => {
    if (localStorage.leftHand != null) {
        document.getElementById('text').innerHTML = `${leftHand}`;

    } if (localStorage.rightHand != null) {
        document.getElementById('text').innerHTML = `${rightHand}`;

    } if (localStorage.leftFoot != null) {
        document.getElementById('text').innerHTML = `${leftFoot}`;

    } if (localStorage.rightFoot != null) {
        document.getElementById('text').innerHTML = `${rightFoot}`;

    }if (localStorage.leftStomach != null) {
        document.getElementById('text').innerHTML = `${leftStomach}`;

    } if (localStorage.rightStomach != null) {
        document.getElementById('text').innerHTML = `${rightStomach}`;

    }

}

let leftHand = "<h1 class='title'>Dernière injection dans <span>la main droite</span>";
let rightHand = "<h1 class='title'>Dernière injection dans <span>la main gauche</span>";
let rightFoot = "<h1 class='title'>Dernière injection dans <span>le pied gauche</span>";
let leftFoot = "<h1 class='title'>Dernière injection dans <span>le pied droit</span>";
let leftStomach = "<h1 class='title'>Dernière injection dans <span>le ventre côté droit</span>";
let rightStomach = "<h1 class='title'>Dernière injection dans <span>le ventre côté gauche</span>";

document.getElementById('mainDroite').onclick = () => {
    document.getElementById('text').innerHTML = leftHand;
    localStorage.clear();
    localStorage.setItem("leftHand", leftHand);
}
document.getElementById('mainGauche').onclick = () => {
    document.getElementById('text').innerHTML = rightHand;
    localStorage.clear();
    localStorage.setItem("rightHand", rightHand);
}
document.getElementById('piedDroit').onclick = () => {
    document.getElementById('text').innerHTML = leftFoot;
    localStorage.clear();
    localStorage.setItem("leftFoot", leftFoot);
}
document.getElementById('piedGauche').onclick = () => {
    document.getElementById('text').innerHTML = rightFoot;
    localStorage.clear();
    localStorage.setItem("rightFoot", rightFoot);
}
document.getElementById('ventreDroit').onclick = () => {
    document.getElementById('text').innerHTML = leftStomach;
    localStorage.clear();
    localStorage.setItem("leftStomach", leftStomach);
}
document.getElementById('ventreGauche').onclick = () => {
    document.getElementById('text').innerHTML = rightStomach;
    localStorage.clear();
    localStorage.setItem("rightStomach", rightStomach);
}