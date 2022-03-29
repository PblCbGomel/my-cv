const discordContact = document.querySelector('.discord')

discordContact.addEventListener('click', () => {
    navigator.clipboard.writeText('Envy#8637')
    alert('Discord ID(added to clipboard): Envy#8637')
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