fetch('assets/data/gallery.json')
.then(response => response.json())
.then(images => {

    let index = 0;

    const img =
    document.getElementById('galleryImage');

    function changeImage(){

        img.src = images[index].image;

        index++;

        if(index >= images.length){
            index = 0;
        }
    }

    changeImage();

    setInterval(changeImage,4000);

});