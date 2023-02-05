// Vanila script Validation
const form = document.querySelector('#newsletterForm')
const userEmail = document.querySelector('#newsletter-email')
let submitBtn = document.querySelector('#newsletter-submit')

form.addEventListener('submit', (event) => {
  validateForm()
  if (isFormValid() === true) {
    form.submit()
    successSubmission()
  } else {
    event.preventDefault()
  }
})

// Validating the submission process
function isFormValid() {
  const inputContainers = form.querySelectorAll('.form-group')
  let result = true
  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false
    }
  })
  return result
}

// Form Validation
function validateForm() {
  // Email
  if (userEmail.value.trim() == '') {
    setError(userEmail, 'field must not be empty!')
  } else if (isEmailValid(userEmail.value)) {
    setSuccess(userEmail)
  } else {
    setError(userEmail, 'enter a valid email address!')
  }

  // UserMsg
  if (userMsg.value.trim() == '') {
    setError(userMsg, 'field must not be empty!')
  } else if (
    userMsg.value.trim().length < 10 ||
    userMsg.value.trim().lenghth > 500
  ) {
    setError(userMsg, 'Message should not exceed 500 characters!')
  } else {
    setSuccess(userMsg)
  }

  // Defining the error function
  function setError(element, errorMessage) {
    const parent = element.parentElement
    if (parent.classList.contains('success')) {
      parent.classList.remove('success')
    }
    parent.classList.add('error')
    const paragraph = parent.querySelector('#error-mssg')
    paragraph.textContent = errorMessage
  }

  function setSuccess(element) {
    const parent = element.parentElement
    if (parent.classList.contains('error')) {
      parent.classList.remove('error')
    }
    parent.classList.add('success')
  }

  // Email validation
  function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return reg.test(email)
  }
}

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset()
  }
}
