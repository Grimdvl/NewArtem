function navigation(linkSelector, activeClass) {
    const links = document.querySelectorAll(linkSelector);

    links.forEach((link) => {
        link.addEventListener('click', function() {
            links.forEach((items) => {
                items.classList.remove(activeClass);
            });

            link.classList.add(activeClass);
        });
    });
}

export default navigation;