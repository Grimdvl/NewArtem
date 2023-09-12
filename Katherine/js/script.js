'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.querySelectorAll('.navigation__circles__item'),
          navigationMenu = document.querySelector('.navigation'),
          hamburger = document.querySelector('.promo__hamburger'),
          menu = document.querySelector('.menu'),
          modal = document.querySelector('.modal'),
          savedLang = localStorage.getItem('lang'),
          forms = document.querySelectorAll('form'),
          buttons = document.querySelectorAll('.promo__buttons__item'),
          wrappers = document.querySelectorAll('.contacts__wrapper'),
          nameLeft = document.querySelector('.name-left'),
          surNameLeft = document.querySelector('.surname-left'),
          rightProfession = document.querySelector('.right-profession'),
          languageElements = document.querySelectorAll('.language'),
          sections = document.querySelectorAll('section'),
          lightMode = document.querySelector('.promo__switch__moon'),
          darkMode = document.querySelector('.promo__switch__sun'),
          themeLink = document.querySelector('.theme'),
          contactsDark = document.querySelector('.contacts__social.dark'),
          contactsLight = document.querySelector('.contacts__social.light'),
          savedTheme = localStorage.getItem('theme'),
          languages = {
            "en": {
                "title": "Katherine Chafer",
                "navigation__circles__about": "About me",
                "navigation__circles__experience": "Work experience",
                "navigation__circles__education": "Education",
                "navigation__circles__contacts": "Contacts",
                "name-right": "KATHERINE",
                "name-left": "KATHERINE",
                "surname-right": "CHAFER",
                "surname-left": "CHAFER",
                "right-profession": "Cosmetologist",
                "left-profession": "Cosmetologist",
                "about__subtitle": "About me",
                "about__description1": "Hello! My name is Katya, and I am excited to start my career in cosmetology. My passion for beauty and skincare has driven me to choose this captivating profession. I am full of enthusiasm and determination to apply my knowledge and skills to help people feel beautiful and confident.",
                "about__description2": "My advantage as a novice professional in this field is my eagerness for continuous learning and growth. I am willing to put in all the effort to achieve the best results. I am ready to take on challenges and apply my skills to assist our clients in feeling beautiful and confident. If you are looking for a young and energetic specialist, I would be delighted to help. Get in touch with me, and together we will create a unique cosmetic care experience that enhances the natural beauty of our clients.",
                "education__subtitle": "Education",
                "education__years": "2021—Present",
                "education__institution": "Cherkasy Medical Academy",
                "education__description": "I am studying and acquiring fundamental knowledge and skills necessary for my future career as a cosmetologist. Here, I am learning anatomy, physiology, and the basics of medical practice. My practical experience in medical institutions allows me to apply the knowledge I have gained in practice and develop communication skills with patients. I am determined to build a successful career in the field of cosmetology.",
                "contacts__subtitle": "Contact Me",
                "contacts__address": "Ukraine, Cherkasy",
                "footer__creator": "Website created by",
                "footer__creator__name": "Artem Sokur © 2023",
                "success": "Thank you! I will call you",
                "failure": "Ops! Something went wrong..."
            },
            "ru": {
                "title": "Екатерина Хрущ",
                "navigation__circles__about": "Обо меня",
                "navigation__circles__experience": "Опыт работы",
                "navigation__circles__education": "Образование",
                "navigation__circles__contacts": "Контакты",
                "name-right": "ЕКАТЕРИНА",
                "name-left": "ЕКАТЕРИНА",
                "surname-right": "ХРУЩ",
                "surname-left": "ХРУЩ",
                "right-profession": "Косметолог",
                "left-profession": "Косметолог",
                "about__subtitle": "Обо мне",
                "about__description1": "Привет! Меня зовут Катя, и я с нетерпением начинаю свою карьеру в косметологии. Моя страсть к красоте и уходу за кожей побудила меня выбрать эту захватывающую профессию. Я полна энтузиазма и решимости применить свои знания и навыки, чтобы помочь людям почувствовать себя прекрасно и уверенно.",
                "about__description2": "Мою преимущество как начинающего специалиста в этой области - мое стремление к постоянному обучению и росту. Я готова вкладывать все усилия, чтобы достичь наилучших результатов. Я готова принять вызов и применить свои навыки, чтобы помочь нашим клиентам почувствовать себя красивыми и уверенными. Если вы ищете молодого и энергичного специалиста, я буду рада помочь. Свяжитесь со мной, и вместе мы создадим уникальный опыт косметического ухода, который подчеркнет натуральную красоту наших клиенто.",
                "education__subtitle": "Образование",
                "education__years": "2021—Н. В.",
                "education__institution": "Черкасская Медицинская Академия",
                "education__description": "Я обучаюсь и получаю фундаментальные знания и навыки, необходимые для моей будущей карьеры косметолога. Здесь я изучаю анатомию, физиологию и основы медицинской практики. Моя практика в медицинских учреждениях позволяет мне применять полученные знания на практике и развивать навыки общения с пациентами. Я стремлюсь построить успешную карьеру в сфере косметологии.",
                "contacts__subtitle": "Свяжитесь со мной",
                "contacts__address": "Украина, г. Черкассы",
                "footer__creator": "Сайт создал",
                "footer__creator__name": "Артём Сокур © 2023",
                "success": "Спасибо! Я свяжусь с вами",
                "failure": "Упс! Что-то пошло не так..."
            },
            "ua": {
                "title": "Катерина Хрущ",
                "navigation__circles__about": "Про мене",
                "navigation__circles__experience": "Досвід роботи",
                "navigation__circles__education": "Освіта",
                "navigation__circles__contacts": "Контакти",
                "name-right": "КАТЕРИНА",
                "name-left": "КАТЕРИНА",
                "surname-right": "ХРУЩ",
                "surname-left": "ХРУЩ",
                "right-profession": "Косметолог",
                "left-profession": "Косметолог",
                "about__subtitle": "Про мене",
                "about__description1": "Привіт! Мене звати Катя, і я з нетерпінням починаю свою кар\'єру в косметології. Моя страсть до краси та догляду за шкірою спонукала мене обрати цю захоплюючу професію. Я повна ентузіазму та рішучості застосовувати свої знання та навички, щоб допомогти людям почуватися прекрасно і впевнено.",
                "about__description2": "Мою перевагу як початкуючого фахівця в цій галузі - моє прагнення до постійного навчання та зростання. Я готова вкладати всі зусилля, щоб досягти найкращих результатів. Я готова прийняти виклик і застосувати свої навички, щоб допомогти нашим клієнтам почуватися красивими та впевненими. Якщо ви шукаєте молодого та енергійного фахівця, я буду рада допомогти. Зв\'яжіться зі мною, і разом ми створимо унікальний досвід косметичного догляду, який підкреслить природну красу наших клієнтів.",
                "education__subtitle": "Освіта",
                "education__years": "2021—Н. Ч.",
                "education__institution": "Черкаська Медична Академія",
                "education__description": "Я навчаюся та отримую фундаментальні знання і навички, необхідні для моєї майбутньої кар\'єри косметолога. Тут я вивчаю анатомію, фізіологію та основи медичної практики. Мій практичний досвід у медичних установах дозволяє мені застосовувати отримані знання на практиці та розвивати навички спілкування з пацієнтами. Я прагну побудувати успішну кар\'єру в галузі косметології.",
                "contacts__subtitle": "Зв\'яжіться зі мною",
                "contacts__address": "Україна, м. Черкаси",
                "footer__creator": "Сайт створив",
                "footer__creator__name": "Артем Сокур © 2023",
                "success": "Дякую! Я зв'яжусь з вами",
                "failure": "Ой! Щось пішло не так..."
            }
        };
    let message = {
        loading: 'img/icons/spinner.svg',
        success: 'Спасибо! Я свяжусь с вами',
        failure: 'Упс! Что-то пошло не так...'
    };

    //ЛОКАЛЬНОЕ ХРАНИЛИЩЕ
    if (savedLang) {
        changeLanguage(savedLang);
    }
    if (savedTheme) {
        switchTheme(savedTheme);
    }

    //СМЕНА ТЕМЫ
    function switchTheme(theme) {
        if (theme === 'moon') {
            themeLink.classList.remove('theme__light');
            themeLink.classList.add('theme__dark');
            themeLink.href = 'css/styleDark.min.css';
            contactsDark.style.display = 'flex';
            contactsLight.style.display = 'none';

            darkMode.classList.add('promo__switch__sun__active');
            lightMode.classList.remove('promo__switch__moon__active');

            // darkMode.classList.add('promo__switch__sun__active__hamburger');
            // lightMode.classList.remove('promo__switch__moon__active__hamburger');

            localStorage.setItem('theme', theme);
        } else {
            themeLink.classList.add('theme__light');
            themeLink.classList.remove('theme__dark');
            themeLink.href = 'css/style.min.css';
            contactsDark.style.display = 'none';
            contactsLight.style.display = 'flex';

            lightMode.classList.add('promo__switch__moon__active');
            darkMode.classList.remove('promo__switch__sun__active');

            // darkMode.classList.remove('promo__switch__sun__active__hamburger');
            // lightMode.classList.add('promo__switch__moon__active__hamburger');

            localStorage.setItem('theme', theme);
        }
    }

    lightMode.addEventListener('click', function (e) {
        e.preventDefault();
        const theme = this.id;
        localStorage.setItem('theme', theme);

        darkMode.classList.add('promo__switch__sun__active__hamburger');
        lightMode.classList.remove('promo__switch__moon__active__hamburger');
        
        switchTheme(theme);
    });

    darkMode.addEventListener('click', function (e) {
        e.preventDefault();
        const theme = this.id;
        localStorage.setItem('theme', theme);

        darkMode.classList.remove('promo__switch__sun__active__hamburger');
        lightMode.classList.add('promo__switch__moon__active__hamburger');

        switchTheme(theme);
    });

    //НАВИГАЦИОННОЕ МЕНЮ + ГАМБУРГЕР
    navigation.forEach(item => {
        const parent = item.parentNode;

        parent.addEventListener('mouseenter', () => {
            if (!parent.classList.contains("active")) {
                item.classList.add('active'); 
                parent.classList.add('li-active');
            }
        });

        parent.addEventListener('mouseleave', () => {
            item.classList.remove('active');
            parent.classList.remove('li-active');
        });

        parent.addEventListener('click', () => {
            const link = parent.querySelector('a');

            if (link && link.href) {
                window.location.href = link.href;
            }
        });
        
        hamburger.addEventListener('click', () => {
            item.classList.toggle('activeMenu');
            menu.classList.toggle('active');
            hamburger.classList.toggle('promo__hamburger__active');
            navigationMenu.classList.toggle('navigation__active');
            if (themeLink.classList.contains('theme__light')) {
                lightMode.classList.toggle('promo__switch__moon__active__hamburger');
            } else if (themeLink.classList.contains('theme__dark')) {
                darkMode.classList.toggle('promo__switch__sun__active__hamburger');
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                item.classList.remove('activeMenu');
                menu.classList.remove('active');
                hamburger.classList.remove('promo__hamburger__active');
                navigationMenu.classList.remove('navigation__active');
            }
        });
    });

    //НАВИГАЦИЯ ПО СКРОЛУ
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
      
        sections.forEach(section => {
            const top = window.scrollY,
                  offset = section.offsetTop - 300,
                  height = section.offsetHeight;

            if (top >= offset && top < offset + height) {

                navigation.forEach(navigation => {
                    const link = document.querySelector(`a[href="#${section.id}"]`),
                          linkParent = link.closest('li'),
                          navigationParent = navigation.parentNode;

                    section.classList.remove('animation');
                    section.classList.add('animation__animated');

                    navigation.classList.remove('activeScroll');
                    link.classList.add('activeScroll');
                    navigationParent.classList.remove('li-activeScroll');
                    linkParent.classList.add('li-activeScroll');
                });
            } else if (top <= 400) {

                navigation.forEach(navigation => {
                    const navigationParent = navigation.parentNode;
      
                    navigation.classList.remove('activeScroll');
                    navigationParent.classList.remove('li-activeScroll');
                });
            }
        });
    });
    
    //СМЕНА ЯЗЫКА
    function getMessageForLanguage(lang, messageType) {
        return languages[lang][messageType];
    }
    function updateMessage(lang) {
        message.success = getMessageForLanguage(lang, "success");
        message.failure = getMessageForLanguage(lang, "failure");
    }
    function changeLanguage(lang) {
        languageElements.forEach(element => {
            const key = element.getAttribute('key');
            if (languages[lang][key]) {
                element.textContent = languages[lang][key];
            }
        });
        
        sections.forEach(section => {
            section.classList.remove('animation__animated');
            section.classList.add('animation');
        })

        buttons.forEach(button => {
            if (button.id === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    
        document.querySelector(`#${lang}`).classList.add('active');
    
        if (lang === 'ua') {
            surNameLeft.classList.remove('en');
            nameLeft.classList.remove('en');
            rightProfession.classList.remove('en');
            nameLeft.classList.add('ua');
        } else if (lang === 'ru') {
            nameLeft.classList.remove('ua');
            surNameLeft.classList.remove('en');
            nameLeft.classList.remove('en');
            rightProfession.classList.remove('en');
        }
        else if (lang === 'en') {
            nameLeft.classList.remove('ua');
            surNameLeft.classList.add('en');
            nameLeft.classList.add('en');
            rightProfession.classList.add('en');
        }

        updateMessage(lang);
        localStorage.setItem('lang', lang);
        wrappers.forEach(wrapper => wrapper.style.display = 'none');
        document.querySelector(`.contacts__wrapper.${lang}`).style.display = 'flex';
    }
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.id;
            localStorage.setItem('lang', lang);
            changeLanguage(lang);
        });
    });

    //ПОСТ ЗАПРОС ФОРМЫ + МОДАЛЬНОЕ ОКНО
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
});