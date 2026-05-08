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

function showFullPicture(index) {
    dialogRef.showModal();

    dialogRef.innerHTML = /*html*/ `
     <div id="popup-container">
        <header id="dialog-header">
            <p id="year">${arrPhotos[index]}</p>
            <button id="close-button" onclick="closePopupWindow()"><img src="./assets/icons/close-button.svg" alt="close button"></button>
        </header>
        <section id="dialog-content">
            <img src="./assets/images/${arrPhotos[index]}.jpg" alt="photo of Loki in ${arrPhotos[index]}">
        </section>
        <footer id="dialog-footer">
            <button id="previous-photo" onclick="goToPreviousPhoto(${index})"><img src="./assets/icons/Arrow-left.svg" alt="arrow to the left icon"></button>
            <p id="slide-counter">${index + 1}/${arrPhotos.length}</p>
            <button id="next-photo" onclick="goToNextPhoto(${index})"><img src="./assets/icons/Arrow-Right.svg" alt="arrow to the right icon"></button>
        </footer>
    </div>
    `;
}

function goToPreviousPhoto(index) {
    if(index === 0){
       showFullPicture(arrPhotos.length-1);
    } else {
        showFullPicture(index-1);
    }
}

function goToNextPhoto(index) {
    if(index === arrPhotos.length-1){
       showFullPicture(0);
    } else {
        showFullPicture(index+1);
    }
}

function closePopupWindow() {
    dialogRef.close();
}
