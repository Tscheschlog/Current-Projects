//Global for ease of access
let id = "";

function onClickRefreshButton() {

    setAllImages();

    setImageVisible("body", true);
    setImageVisible("mouth", true);
    setImageVisible("eyes", true);
    setBellyVisible("belly");

    encodeCanvas();
}

document.addEventListener("DOMContentLoaded", function (event) {
    //we ready baby

    //ALL START HIDDEN BY DEAFAULT
    setAllImages();


    //Show the Images via button
    document.getElementById("refreshBtn").addEventListener("click", onClickRefreshButton);
});

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Description: Set body parts to be visible
 */
function setImageVisible(id, visible) {

    let rand = getRandomNumberBetween(1, 5).toString();

    var img = document.getElementById(id + rand);
    img.style.visibility = (visible ? 'visible' : 'hidden');

}

function setBellyVisible(id) {

    let rand = getRandomNumberBetween(1, 2);

    let visible = false;

    if (rand == 1) {
        visible = true;
    }

    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');

}

function setImageHidden(id) {

    var img = document.getElementById(id);
    img.style.visibility = "hidden";

}

function setAllImages() {

    let bodyPartList = ["eyes", "body", "mouth", "belly"];

    //Set Belly hidden
    setImageHidden(bodyPartList[3]);

    //Set all others hidden
    for (let j = 0; j < 3; j++) {
        for (let i = 1; i < 6; i++) {
            setImageHidden(bodyPartList[j] + i);
        }
    }
}

function createId(id) {

    document.getElementById("palID").textContent = '#' + id;

}

function encodeCanvas() {
    const canvas = document.getElementById('myCanvas');
    // return canvas.toDataURL();
    console.log(canvas.toDataURL());
}