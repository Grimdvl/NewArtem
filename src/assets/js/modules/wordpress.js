const wordpress = () => {
    document.addEventListener('wpcf7submit', () => {
        const response = document.querySelector('.wpcf7-response-output');
        if (response) {
            response.style.display = '';
        }
    });

    document.addEventListener('wpcf7mailsent', () => {
        setTimeout(() => {
            const response = document.querySelector('.wpcf7-response-output');
            if (response) {
                response.style.display = 'none';
            }
        }, 7000);
    });
};

export default wordpress;
