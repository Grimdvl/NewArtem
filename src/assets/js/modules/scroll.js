const scroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });

            history.pushState("", document.title, window.location.pathname + window.location.search);
            }
        });
    });
}

export default scroll;