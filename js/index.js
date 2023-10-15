let tab
let header
window.onscroll = () => {
  header = document.querySelector('header');
  tab = document.querySelector('.tab')
  if(window.pageYOffset > tab.scrollHeight) {
    header.className = 'sticky';
  } else{    
      header.classList.remove('sticky');
    }
}

window.addEventListener("load", function() {
  let buttonsContact = document.querySelectorAll(".header__contacts button")
  let modal1Window = document.querySelector("#modal1")
  let body
  buttonsContact.forEach((buttonContact)=> {
    buttonContact.onclick = function () {
      modal1Window.classList.add('is_visible')
      body = document.querySelector("body")
      body.classList.add('stopedScroll')

    }
  })
  let modalClose = document.querySelector(".modal__close")
  modalClose.onclick = function () {
    modal1Window.classList.remove('is_visible')
    body.classList.remove('stopedScroll')
  }
  let modal1Close = document.querySelector(".modal")
  modal1Close.onclick = function () {
    modal1Window.classList.remove('is_visible')
    body.classList.remove('stopedScroll')
  }
  let modalContent = document.querySelector(".modal__content")
  modalContent.onclick = function (e) {
    e.stopPropagation()
  }

  let modalPhone = document.querySelector(".modal__phone select")
  let phoneIcon
  modalPhone.onchange = function () {
    phoneIcon = document.querySelector(".modal__phoneicon")
    phoneIcon.innerHTML = '<img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/' + modalPhone.value + '.svg"/>'
  }

  function removeError (field) {
    inputField = field.querySelector('input')
    if(inputField.classList.contains("error__input")) {
      inputField.classList.remove("error__input")
      field.querySelector('.error__text').remove()
      field.querySelector('.modal__field input').addEventListener('blur', ()=>{addError(field)})
    }
  }

  function addError(field) {
    inputField = field.querySelector('input')
    if(inputField.value == '' && !inputField.classList.contains("error__input")) {
      inputField.classList.add("error__input")
      field.innerHTML += '<div class="error__text">This field is required.</div>'
      field.querySelector(".modal__field input").addEventListener('focus', () => {removeError(field)})
    }
  }

  let fieldsTemp
  let switchSend
  let required_fields = document.querySelectorAll('label.required')
  required_fields.forEach((field) => {
    field.querySelector('input').onchange = () => {
      fieldsTemp = document.querySelectorAll('label.required')
      switchSend = true
      fieldsTemp.forEach((fieldTemp) => {
        if(fieldTemp.querySelector("input").value == '') {
          switchSend = false
        }
      })
      if(switchSend) {
        document.querySelector('#contacts_send').disabled = false
      } else {
        document.querySelector('#contacts_send').disabled = true
      }
    }
    field.querySelector('input').onblur = function () {
      addError(field)
    }
  })

})
