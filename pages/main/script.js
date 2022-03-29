const discordContact = document.querySelector('.discord')

discordContact.addEventListener('click', () => {
    navigator.clipboard.writeText('Envy#8637')
    alert('Discord ID(added to clipboard): Envy#8637')
})