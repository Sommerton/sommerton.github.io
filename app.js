document.addEventListener("DOMContentLoaded" , () => {

    const images = document.querySelectorAll("img");

    for(const image of images) {
        fetch("Photo by Victor Freitas: https://www.pexels.com/photo/man-carrying-barbel-791763/")
        .then(response => response.json ()) 
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;

        })
           
    }

})