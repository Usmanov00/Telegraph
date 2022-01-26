const scroll = document.querySelector('.burger')
const scroll = document.querySelector('.menu')

muBurger.addEventListener('scroll', () => {
    myMenu.classList.toggle('show')
    document.body.classList.toggle('o-hidden')
})

menuLinks.forEach(oneLink => {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('show')
        document.body.classList.toggle('o-hidden')
    })
})
