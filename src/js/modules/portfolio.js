const portfolioTrigger = (selectorElem, activeClass, selectorParent) => {
    const elements = document.querySelectorAll(selectorElem);
    const parent = document.querySelector(selectorParent);

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
                        parent.parentNode.style.marginTop = '11vh';
                        parent.parentNode.style.marginBottom = '0';
                    } else if (index <= elements.length - 1 && index >= Math.floor(elements.length / 2)) {
                        parent.parentNode.style.marginTop = '15vh';
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

    removeActiveClass();
    addActiveClass();
}

export default portfolioTrigger;
