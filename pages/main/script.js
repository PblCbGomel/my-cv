const discordContact = document.querySelector('.discord')

discordContact.addEventListener('click', () => {
    navigator.clipboard.writeText('Envy#8637')
    alert('Discord ID(added to clipboard): Envy#8637')
})

const phoneContactBtn = document.querySelector('.phone')
const phoneLink = document.querySelector('.call')

phoneContactBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('+375296618365')
    if(confirm("Make a call (number added to clipboard)?")) {
        location.href = "tel:+375296618365"
    }
})

const avatar = document.querySelector('.avatar')

avatar.addEventListener('mouseenter', () => {
    avatar.classList.add('avatar-me')
    avatar.classList.remove('avatar-lynx')
})

avatar.addEventListener('mouseleave', () => {
    avatar.classList.add('avatar-lynx')
    avatar.classList.remove('avatar-me')
})

const burger = document.querySelector('.adaptive-btn-menu')
const adaptiveNav = document.querySelector('.adaptive-nav')
const blackBlockAdaptive = document.querySelector('.black-adaptive')

burger.addEventListener('click', () => {
    burger.classList.toggle('adaptive-btn-menu')
    burger.classList.toggle('adaptive-btn-menu-active')
    adaptiveNav.classList.toggle('adaptive-nav')
    adaptiveNav.classList.toggle('adaptive-nav-active')
    blackBlockAdaptive.classList.toggle('black-adaptive')
    blackBlockAdaptive.classList.toggle('black-adaptive-active')
})

const navBlocksAdaptiveMee = adaptiveNav.querySelectorAll('a')

navBlocksAdaptiveMee.forEach((block) => {
    block.addEventListener('click', () => {
        adaptiveNav.classList.toggle('adaptive-nav')
        adaptiveNav.classList.toggle('adaptive-nav-active')
        blackBlockAdaptive.classList.toggle('black-adaptive')
        blackBlockAdaptive.classList.toggle('black-adaptive-active')
        burger.classList.toggle('adaptive-btn-menu')
        burger.classList.toggle('adaptive-btn-menu-active')
    })
})

