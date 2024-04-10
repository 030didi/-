let slideIndex=0;

function fetchRandomDogImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.message);

            let image = document.querySelectorAll(".image");
            image[slideIndex].src = data.message;
        });
}



function showSlides(props){
    let i;

    let slides = document.getElementsByClassName("singleSlide");

    if (props >= slides.length){
        slideIndex = 0;
    }else if (props < 0) {
        slideIndex = slides.length - 1;
    }else {
        slideIndex = props;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    fetchRandomDogImage();
    slides[slideIndex].style.display = "flex";
}

function plusSlides(a) {
    showSlides(slideIndex + a);
}

showSlides(slideIndex);

