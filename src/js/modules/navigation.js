function navigation(linkSelector, activeClass) {
    const links = document.querySelectorAll(linkSelector);

    function navigationShow() {
        links.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function navigationHide() {
        links.forEach((item) => {
            item.addEventListener('click', function() {
                item.classList.add(activeClass);
            });
        });
    }


}

export default navigationMenu;