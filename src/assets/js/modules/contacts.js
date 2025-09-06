const multipleText = () => {
    const typed = new Typed('.multiple-text', {
        strings: ['Facebook', 'Telegram', 'Instagram'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

function toggleSocial(socialItem) {
    const social = document.querySelectorAll(socialItem);

    social.forEach((item, index) => {
        item.setAttribute('data-aos-delay', `${500 + index * 200}`);
    });
}


export {multipleText};
export {toggleSocial};