const portfolioTrigger = (selectorElem, activeClass, selectorParent) => {
    const elements = document.querySelectorAll(selectorElem);
    const parent = document.querySelector(selectorParent);
    const portfolioItems = document.querySelectorAll('.portfolio__items-item');
    const portfolioItemsParent = document.querySelector('.portfolio__items');
    const next = document.querySelector('.portfolio__slide-next');
    const prev = document.querySelector('.portfolio__slide-prev');
    let currentIndex = 0;

    const slider = () => {
        const showItems = () => {
            const visibleRange = 10;
            const startIndex = Math.max(0, Math.min(currentIndex, portfolioItems.length - visibleRange));
    
            for (let i = 0; i < portfolioItems.length; i++) {
                if (i >= startIndex && i < startIndex + visibleRange) {
                    portfolioItems[i].style.opacity = '1';
                    portfolioItems[i].style.visibility = 'visible';
                } else {
                    portfolioItems[i].style.opacity = '0';
                    portfolioItems[i].style.visibility = 'hidden';
                }
            }
        };

        currentIndex = Math.floor((portfolioItems.length - 10) / 2);
    
        showItems();
    
        function nextSlide() {
            if (currentIndex < portfolioItems.length - 10) {
                currentIndex++;
                let currentTranslate = parseFloat(portfolioItemsParent.style.transform.replace('translate(', '').replace('rem)', '')) || 0;
                currentTranslate -= 0.7;
                portfolioItemsParent.style.transform = `translate(${currentTranslate.toFixed(1)}rem)`;
                showItems();
            }
        }
        
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                let currentTranslate = parseFloat(portfolioItemsParent.style.transform.replace('translate(', '').replace('rem)', '')) || 0;
                currentTranslate += 0.7;
                portfolioItemsParent.style.transform = `translate(${currentTranslate.toFixed(1)}rem)`;
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
                const mediaQuery = window.innerWidth <= 768;

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
