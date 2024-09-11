window.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector('.modal');
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalClose = document.querySelector('.close-modal');

    const openModal = ({ target }) => {
        modal.classList.add('active');
        
        const parent = target.closest('.stories-list__item');

        const title = parent.querySelector('.stories-list__item__title').innerHTML;
        const descr = parent.querySelector('.stories-list__item__descr').innerHTML;

        document.querySelector('.stories-list__item__title').innerHTML = title;
        document.querySelector('.story__descr').innerHTML = descr;
    };

    const closeModal = () => {
        modal.classList.remove('active');
    };

    modalTriggers.forEach((el) => el.addEventListener('click', (e) => openModal(e)));

    modalClose.addEventListener('click', closeModal);

    const clipboardButton = document.querySelector(".clipboard");

    clipboardButton.addEventListener("click", function() {
        navigator.clipboard.writeText(window.location.href).then(function() {
            clipboardButton.innerHTML = 'Los ardes del sitio se copian'

            setTimeout(() => {
                clipboardButton.innerHTML = 'Compartir este sitio con amigos'
            }, 2000)
        }).catch(function(error) {
            console.error('Error:', error);
        });
    });

    if(localStorage.getItem('coockie')){
        document.querySelector('.coockie').classList.add('disabled');
    }

    const setCoockieConfirmation = () => {
        localStorage.setItem('coockie', 'ok');
        document.querySelector('.coockie').classList.add('disabled');
    };

    document.querySelectorAll('.coockie__button').forEach((el) => el.addEventListener('click', setCoockieConfirmation))

});