window.addEventListener('scroll', () => {
    const NAVBAR = document.querySelector('#navbar')
    NAVBAR.classList.toggle('sticky', window.scrollY > 5)
})
window.addEventListener('scroll', () => {
    const BORDER = document.querySelector('#border__animation')
BORDER.classList.toggle('border__bottom', window.scrollY > 500)
})