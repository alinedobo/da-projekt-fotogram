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

let headerRef = document.getElementById("header");
let sectionRef = document.getElementById("section");
let footerRef = document.getElementById("footer");

function showFullPicture(index) {
    dialogRef.showModal();

    headerRef.innerHTML = /*html*/`
        <p class="year">${arrPhotos[index]}</p>
    `

    sectionRef.innerHTML = /*html*/`
        <div class="full-picture">
            <img src="./assets/images/${arrPhotos[index]}.jpg" alt="photo of Loki in ${arrPhotos[index]}">
        </div>
    `
}

function closePopupWindow() {
    dialogRef.close();
}
