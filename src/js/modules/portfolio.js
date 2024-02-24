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
                removeActiveClass();
                event.target.parentNode.classList.add(activeClass);
                parent.classList.add(activeClass);
                
                if (index === 0) {
                    parent.parentNode.style.marginTop = '20vh';
                    parent.parentNode.style.marginBottom = '0';
                }
                if (index === 1) {
                    parent.parentNode.style.marginTop = '15vh';
                    parent.parentNode.style.marginBottom = '0';
                }
                if (index === 2) {
                    parent.parentNode.style.marginTop = '10vh';
                    parent.parentNode.style.marginBottom = '0';
                }
    
                if (index === elements.length - 1) {
                    parent.parentNode.style.marginBottom = '20vh';
                    parent.parentNode.style.marginTop = '0';
                }
                if (index === elements.length - 2) {
                    parent.parentNode.style.marginBottom = '15vh';
                    parent.parentNode.style.marginTop = '0';
                }
                if (index === elements.length - 3) {
                    parent.parentNode.style.marginBottom = '10vh';
                    parent.parentNode.style.marginTop = '0';
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
