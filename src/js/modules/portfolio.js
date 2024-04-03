const portfolioTrigger = (selectorElem, activeClass, selectorParent) => {
    const elements = document.querySelectorAll(selectorElem);
    const parent = document.querySelector(selectorParent);
    const portfolioItems = document.querySelectorAll('.portfolio__items-item');
    const portfolioItemsParent = document.querySelector('.portfolio__items');
    const next = document.querySelector('.portfolio__slide-next');
    const prev = document.querySelector('.portfolio__slide-prev');
    const mediaQuery = window.innerWidth <= 768;

    const slider = () => {
        const totalItems = portfolioItems.length;
        const itemsToShow = 10;
        const startIndex = Math.floor((totalItems - itemsToShow) / 2);
    
        let currentIndex = startIndex;
        let gapSizeRem = 0.4;
        let swipePositionRem;
    
        if (mediaQuery) { // Если ширина экрана 768 пикселей или меньше
            swipePositionRem = portfolioItems[0].offsetHeight / parseFloat(getComputedStyle(document.documentElement).fontSize) + gapSizeRem; // Прокрутка по оси Y
        } else {
            swipePositionRem = portfolioItems[0].offsetWidth / parseFloat(getComputedStyle(document.documentElement).fontSize) + gapSizeRem; // Прокрутка по оси X
        }
    
        let currentPositionRem = 0;
    
        const showItems = () => {
            for (let i = 0; i < totalItems; i++) {
                if (i >= currentIndex && i < currentIndex + itemsToShow) {
                    portfolioItems[i].style.opacity = '1';
                    portfolioItems[i].style.visibility = 'visible';
                } else {
                    portfolioItems[i].style.opacity = '0';
                    portfolioItems[i].style.visibility = 'hidden';
                }
            }
        };
        showItems();
    
        function nextSlide() {
            if (currentIndex < totalItems - itemsToShow) {
                currentIndex++;
                currentPositionRem -= swipePositionRem;
                if (mediaQuery) {
                    portfolioItemsParent.style.transform = `translateY(${currentPositionRem}rem)`; // Прокрутка по оси Y
                } else {
                    portfolioItemsParent.style.transform = `translateX(${currentPositionRem}rem)`; // Прокрутка по оси X
                }
                showItems();
            }
        }
    
        function prevSlide() {
            if (currentIndex > startIndex - itemsToShow && currentIndex > 0) {
                currentIndex--;
                currentPositionRem += swipePositionRem;
                if (mediaQuery) {
                    portfolioItemsParent.style.transform = `translateY(${currentPositionRem}rem)`; // Прокрутка по оси Y
                } else {
                    portfolioItemsParent.style.transform = `translateX(${currentPositionRem}rem)`; // Прокрутка по оси X
                }
                showItems();
            }
        }
    
        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);
    };
    
    const removeActiveClass = () => {
        elements.forEach((item) => {
            item.classList.remove(activeClass);
            parent.classList.remove(activeClass);
            parent.parentNode.classList.remove(activeClass);
            parent.parentNode.style.marginTop = '0';
            parent.parentNode.style.marginBottom = '0';
        });
    }

    const addActiveClass = () => {
        elements.forEach((elem, index) => {
            elem.addEventListener('click', (event) => {
                removeActiveClass();
                event.target.parentNode.classList.add(activeClass);
                parent.classList.add(activeClass);
                
                if (mediaQuery) {
                    if (index === 0 ) {
                        parent.parentNode.style.marginTop = '20vh';
                        parent.parentNode.style.marginBottom = '0';
                    } else if (index >= 0 && index <= Math.floor(elements.length / 2)) {
                        parent.parentNode.style.marginTop = '10vh';
                        parent.parentNode.style.marginBottom = '0';
                    } else if (index <= elements.length - 1 && index >= Math.floor(elements.length / 2)) {
                        parent.parentNode.style.marginTop = '5vh';
                        parent.parentNode.style.marginBottom = '10vh';
                    } else if (index === elements.length - 1) {
                        parent.parentNode.style.marginTop = '5vh';
                        parent.parentNode.style.marginBottom = '15vh';
                    } else {
                        parent.parentNode.style.marginTop = '0';
                        parent.parentNode.style.marginBottom = '0';
                    }
                }
            });
        });
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest(selectorElem)) {
            removeActiveClass();
        }
    });

    slider();
    removeActiveClass();
    addActiveClass();
}

export default portfolioTrigger;
