import {postData} from '../services/services';

function modal(modalCloseSelector, modalSelector, formSelector) {
    const modal = document.querySelector(modalSelector),
          forms = document.querySelectorAll(formSelector);

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
        document.body.style.overflow = 'hidden';
        modal.classList.add('show');
        modal.append(thanksModal);
        setTimeout(() => {
            modalClose();
        }, 2000);
    }

    function modalClose() {
        modal.classList.remove('show');
        thanksModal.remove();
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute(modalCloseSelector) == '' || e.target.closest('.modal__close')) {
            modalClose();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            modalClose();
        }
    });

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
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

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                showThanksModal(message.success);
                console.log(`Ответ от сервера: ${JSON.stringify(data)}`);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
                console.error(`Ошибка при отправке запроса: ${json}`);
                statusMessage.remove();
            })
            .finally(() => {
                form.reset();
            });

        });
    }
}

export default modal;