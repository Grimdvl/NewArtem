const resume = () => {
    const resumeUl = document.querySelector('.resume__column-list');
    const resumeLi = document.querySelectorAll('.resume__column-list-item');

    const duration = 0.5;
    const initialDelay = 1.2;
    const totalDuration = duration * resumeLi.length;

    resumeLi.forEach((item, i) => {
        const delay = initialDelay + (i * duration);
        item.style.setProperty('--delay', `${delay}s`);
        item.style.setProperty('--delay-item', `${delay + 0.5}s`);
        item.style.setProperty('--duration', `${duration}s`);
    });

    resumeUl.style.setProperty('--totalDuration', `${totalDuration}s`);
};

export default resume;
