const portfolioTrigger = (selectorElem, activeClass) => {
    const elements = document.querySelectorAll(selectorElem);

    const removeActiveClass = () => {
        elements.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    const addActiveClass = () => {
        elements.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                removeActiveClass();
                event.target.parentNode.classList.add(activeClass);
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
