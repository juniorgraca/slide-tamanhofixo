let totalSlider = document.querySelectorAll('.slider--item').length;
let currentSlider = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width =`${sliderWidth * totalSlider}px`;

document.querySelector('.slider--controls').style.width =`${sliderWidth}px`;
document.querySelector('.slider--controls').style.height=`${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    currentSlider--;
if(currentSlider < 0 ){
    currentSlider = totalSlider -1;
}
    updateMargin()
}
function goNext(){
    currentSlider ++;
    if(currentSlider >(totalSlider-1)){
        currentSlider = 0;
    }
    updateMargin()
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlider * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
    `-${newMargin}px`;
}

setInterval(goNext,(5000));