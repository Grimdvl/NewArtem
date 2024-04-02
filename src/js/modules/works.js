const works = () => {
    let nextDom = document.querySelector('.carousel__arrows--prev');
    let prevDom = document.querySelector('.carousel__arrows--next');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel__list');
    let thumbnailBorderDom = document.querySelector('.carousel__thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.carousel__thumbnail-item');
    let timeDom = document.querySelector('.carousel__time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 2000;
    let timeAutoNext = 7000;

    nextDom.onclick = function(){
        showSlider('next');    
    }

    prevDom.onclick = function(){
        showSlider('prev');    
    }
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
    function showSlider(type){
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel__list-item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel__thumbnail-item');
        
        if(type === 'next'){
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        }else{
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext)
    }
}

export default works;