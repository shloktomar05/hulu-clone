const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModel)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModel() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display= 'none'
}

function outsideClick(e) {
    if(e.target == modal){
        closeModal()
    }
}
