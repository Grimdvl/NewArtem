window.addEventListener('DOMContentLoaded', () => {
    const hamburger = require('./modules/hamburger'),
          btnPromo = require('./modules/btnPromo'),
          skills = require('./modules/skills');

    hamburger();
    btnPromo();
    skills();

    // async function translation() {
    //     const translateElements = document.querySelectorAll('.translate');
    
    //     translateElements.forEach(item => {
    //         item.addEventListener('click', async function() {
    //             const lang = this.getAttribute('id');
    //             const languageElements = document.querySelectorAll('.language');
                
    //             try {
    //                 const response = await fetch('./db.json');
    //                 const languageData = await response.json();
    
    //                 languageElements.forEach(function(langElement) {
    //                     const key = langElement.getAttribute('key');
    //                     langElement.textContent = languageData[lang][key];
    //                 });
    //             } catch (error) {
    //                 console.error('Error fetching data from db.json:', error);
    //             }
    //         });
    //     });
    // }
    // translation();

    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#consultation, #order').fadeOut();
    //         // $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });
});