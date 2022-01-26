const callBtn = document.querySelector('.call-btn')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const header = document.querySelector('.header')
const header__scroll = document.querySelector('.header__scroll')
const myContainer = document.querySelector('.container')



callBtn.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('header__scroll')
    } else {
        header.classList.remove('header__scroll')

    }

})

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        myContainer.classList.remove('container')
    }
    else {
        myContainer.classList.add('container')

    }

})




