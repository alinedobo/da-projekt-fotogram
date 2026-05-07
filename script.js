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
    /*     "2013.jpg",
    "2014.jpg",
    "2015.jpg",
    "2016.jpg",
    "2017.jpg",
    "2018.jpg",
    "2019.jpg",
    "2020.jpg",
    "2022.jpg",
    "2023.jpg",
    "2024.jpg",
    "2025.jpg",
    "2026.jpg", */
];

function render() {
    let contentRef = document.getElementById("content");

    for (i = 0; i < arrPhotos.length; i++) {
        contentRef.innerHTML += /*html*/ `
            <div class="photo-preview">
                <img src="./assets/images/${arrPhotos[i]}.jpg" alt="photo of Loki in ${arrPhotos[i]}" onclick="showFullPicture()">
    </div>
        `;
    }
}

const dialogRef = document.getElementById("photo-popup");

function showFullPicture() {
    dialogRef.showModal();
}

function closePopupWindow() {
    dialogRef.close();
}
