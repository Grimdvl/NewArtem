// const portfolioTrigger = (selectorElem, activeClass, selectorParent, selectorNext, selectorPrev) => {
//     const elements = document.querySelectorAll(selectorElem);
//     const parent = document.querySelector(selectorParent);
//     const next = document.querySelector(selectorNext);
//     const prev = document.querySelector(selectorPrev);


//     parent.addEventListener('mousedown', (e) => {
//         startX = e.clientX;
//         isDragging = true;
//         document.body.style.userSelect = 'none'; // 🔒 блокує виділення
//     });

//     let isBlocked = false;
//     let startX = 0;
//     let currentX = 0;
//     let isDragging = false;

//     let slideIndex = Array.from(elements).findIndex(el => el.classList.contains(activeClass));
//     if (slideIndex === -1) slideIndex = 0;

//     const showSlide = (n) => {
//         slideIndex = Math.max(0, Math.min(n, elements.length - 1));
//         elements.forEach(el => el.classList.remove(activeClass));
//         elements[slideIndex].classList.add(activeClass);

//         prev.classList.toggle(activeClass, slideIndex === 0);
//         next.classList.toggle(activeClass, slideIndex === elements.length - 1);
//     };

//     showSlide(slideIndex);

//     const nextSlide = () => showSlide(slideIndex + 1);
//     const prevSlide = () => showSlide(slideIndex - 1);

//     next.addEventListener('click', () => {
//         if (isBlocked || slideIndex === elements.length - 1) return;
//         // isBlocked = true;
//         nextSlide();
//         // setTimeout(() => isBlocked = false, 500);
//     });

//     prev.addEventListener('click', () => {
//         if (isBlocked || slideIndex === 0) return;
//         isBlocked = true;
//         prevSlide();
//         // setTimeout(() => isBlocked = false, 500);
//     });

//     parent.addEventListener('mousedown', (e) => {
//         startX = e.clientX;
//         isDragging = true;
//     });

//     parent.addEventListener('mousemove', (e) => {
//         if (!isDragging) return;
//         currentX = e.clientX;
//     });

//     document.addEventListener('mouseup', () => {
//         if (!isDragging) return;

//         const deltaX = currentX - startX;

//         if (Math.abs(deltaX) > 50) {
//             if (deltaX < 0 && slideIndex < elements.length - 1) nextSlide();
//             else if (deltaX > 0 && slideIndex > 0) prevSlide();
//         }

//         isDragging = false;
//         document.body.style.userSelect = '';
//     });

//     parent.addEventListener('touchstart', (e) => {
//         startX = e.touches[0].clientX;
//     });

//     parent.addEventListener('touchmove', (e) => {
//         currentX = e.touches[0].clientX;
//     });

//     parent.addEventListener('touchend', () => {
//         const deltaX = currentX - startX;

//         if (Math.abs(deltaX) > 50) {
//             if (deltaX < 0 && slideIndex < elements.length - 1) nextSlide();
//             else if (deltaX > 0 && slideIndex > 0) prevSlide();
//         }
//     });
// };

// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const portfolioTrigger = (
    selectorElem,
    activeClass,
    selectorParent,
    selectorNext,
    selectorPrev,
    wrapperSelector
) => {
    var swiper = new Swiper(wrapperSelector, {
        // loop: true,
        // initialSlide: 0,
        // slidesPerView: 1,
        // navigation: {
        //     nextEl: selectorNext,
        //     prevEl: selectorPrev,
        // }
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 4,
        speed: 500,
        preventClicks: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 350,
            modifier: 1,
            slideShadows: true,
        },
        on: {
            click(event) {
                swiper.slideTo(this.clickedIndex);
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

export default portfolioTrigger;

