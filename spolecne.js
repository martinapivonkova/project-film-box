const hamburger = document.querySelector('#menu-tlacitko')

hamburger.addEventListener('click', () => {
    document.querySelector('#menu-polozky').classList.toggle('show')
    hamburger.querySelector('i').classList.toggle('fa-bars')
    hamburger.querySelector('i').classList.toggle('fa-xmark')
})
