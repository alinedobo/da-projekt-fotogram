const arrPhotos = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
];

function render() {
    let contentRef = document.getElementById("content");

    for (i = 0; i < arrPhotos.length; i++) {
        contentRef.innerHTML += /*html*/ `
            <div class="photo-preview">
                <img src="./assets/images/${arrPhotos[i]}.jpg" alt="photo of Loki in ${arrPhotos[i]}" onclick="showFullPicture(${i})">
    </div>
        `;
    }
}

const dialogRef = document.getElementById("photo-popup");
const headerRef = document.getElementById("header");
const yearRef = document.getElementById("year");
const sectionRef = document.getElementById("section");
const footerRef = document.getElementById("footer");
const counterRef = document.getElementById("slide-counter");

function showFullPicture(index) {
    dialogRef.showModal();

    yearRef.innerHTML = /*html*/ `
        ${arrPhotos[index]}
    `;

    sectionRef.innerHTML = /*html*/ `
        <div class="full-picture">
            <img src="./assets/images/${arrPhotos[index]}.jpg" alt="photo of Loki in ${arrPhotos[index]}">
        </div>
    `;

    counterRef.innerHTML = /*html*/ `
    ${index+1}/${arrPhotos.length}
    `;
}

function goToPreviousPhoto(){

}

function closePopupWindow() {
    dialogRef.close();
}
