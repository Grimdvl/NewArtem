// import {postData} from '../services/services';

function modal() {
    const modal = document.querySelector('.modal'),
          forms = document.querySelectorAll('form');

    const thanksModal = document.createElement('div'),
          content = document.createElement('div'),
          statusMessage = document.createElement('img');

    let message = {
        loading: 'Подождите! Идёт загрузка...',
        success: 'Спасибо! Я свяжусь с вами...',
        failure: 'Упс! Что-то пошло не так...'
    };

    function showThanksModal(message) {
        content.innerHTML = `
            <div class="modal__close" data-close>
                <span></span>
                <span></span>
            </div>
            <div class="modal__title">${message}</div>
        `;
        content.append(statusMessage);
        modal.classList.add('show');
        modal.append(thanksModal);
        setTimeout(() => {
            modal.classList.remove('show');
            thanksModal.remove();
        }, 2000);
    }

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            thanksModal.classList.add('modal__dialog');
            content.classList.add('modal__content');
            statusMessage.src = 'icons/spinner.svg';
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            thanksModal.append(content);

            showThanksModal(message.loading);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    forms.forEach(function(input) {
                        input.value = '';
                    });
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                    form.reset();
                    statusMessage.remove();
                }
            });
        });
    }

    forms.forEach(item => {
        postData(item);
    });
}

export default modal;