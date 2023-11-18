const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal_close');
const triggerModal = document.querySelector('#btn-get');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

triggerModal.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick =  (event) => {
        if (event.target === modal || event.target === closeModalBtn) closeModal()
}

let modalOpened = false
hideModal = () => {
        openModal()
        window.removeEventListener("scroll", footerScroll)
}

footerScroll = () => {
        if (window.scrollY + window.innerHeight >= footer.offsetTop) {
            autoModal()
        }
}

const autoModal = () => {
        if (!modalOpened) {
            modalOpened = true
            openModal()
            window.removeEventListener("scroll", footerScroll)
        }
}

window.addEventListener("scroll", footerScroll)
setTimeout(autoModal, 10000)