// import {postData} from '../services/services';

function modal() {
    const modal = document.querySelector('.modal'),
          forms = document.querySelectorAll('form');

    let message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо! Я свяжусь с вами',
        failure: 'Упс! Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const content = document.querySelector('.modal__content');
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            openModal();
            content.append(statusMessage);
            // form.insertAdjacentElement('afterend', statusMessage)

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            // request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    const formInputs = form.querySelectorAll('input');
                    formInputs.forEach(function(input) {
                        input.value = '';
                    });
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                    statusMessage.remove();
                }
            });
        });
    }

    function openModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        // modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '' || e.target.closest('.modal__close')) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>
                    <span></span>
                    <span></span>
                </div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        modal.append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 2000);
    }
}

export default modal;