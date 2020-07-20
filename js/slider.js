function activateSlider( slides, dotsWrapper,dots, prev, next){
    let slideIndex = 0;
    showSlides(slideIndex);
    prev.addEventListener('click', () => { moveByN(-1); });
    next.addEventListener('click', () => { moveByN(1); });
    dotsWrapper.addEventListener('click', function(event){
        for (let i=0; i<dots.length; i++){
            if (event.target == dots[i] && event.target.classList.contains('dot')){
                moveToSlide(i);
            } 
        }
    });

    function showSlides(index){
        console.log(slides.length);
        if (index > slides.length-1){slideIndex = 0;}
        if (index < 0){slideIndex = slides.length-1;}
        slides.forEach((element) => element.style.display = 'none');
        dots.forEach((element) => element.classList.remove('dot-active'));
        slides[slideIndex].style.display = 'block';
        dots[slideIndex].classList.add('dot-active');

    }
    function moveByN(n){
        showSlides(slideIndex+=n);
        
    }
    function moveToSlide(index){
        slideIndex = index;
        showSlides(index);
        
    }
}

module.exports = activateSlider;