let galleryImages = [];
let currentIndex = 0;
let autoplay;

const imageElement =
    document.getElementById("galleryImage");

const captionElement =
    document.getElementById("galleryCaption");

fetch("assets/data/gallery.json")
    .then(response => response.json())
    .then(data => {

        galleryImages = data;

        if (galleryImages.length === 0) {
            return;
        }

        showImage(currentIndex);

        autoplay = setInterval(() => {
            nextImage();
        }, 5000);

    })
    .catch(error => {
        console.error("Gallery error:", error);
    });

function showImage(index) {

    imageElement.style.opacity = 0;

    setTimeout(() => {

        imageElement.src =
            galleryImages[index].image;

        captionElement.textContent =
            galleryImages[index].caption || "";

        imageElement.style.opacity = 1;

    }, 300);
}

function nextImage() {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
}

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    showImage(currentIndex);
}