// Vanila script Validation
const form = document.querySelector('#form')
const fullName = document.querySelector('#name')
const userEmail = document.querySelector('#email')
const userSubject = document.querySelector('#subject')
const userPhone = document.querySelector('#phone')
const userMsg = document.querySelector('#message')
let submitBtn = document.querySelector('#submit')

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
  // UserName
  if (fullName.value.trim() == '') {
    setError(fullName, 'field must not be empty!')
  } else if (
    fullName.value.trim().length < 3 ||
    fullName.value.trim().lenghth > 20
  ) {
    setError(fullName, 'enter a valid name')
  } else {
    setSuccess(fullName)
  }

  // Email
  if (userEmail.value.trim() == '') {
    setError(userEmail, 'field must not be empty!')
  } else if (isEmailValid(userEmail.value)) {
    setSuccess(userEmail)
  } else {
    setError(userEmail, 'enter a valid email address!')
  }

  // UserSubject
  if (userSubject.value.trim() == '') {
    setError(userSubject, 'field must not be empty!')
  } else if (
    userSubject.value.trim().length < 5 ||
    userSubject.value.trim().lenghth > 50
  ) {
    setError(userSubject, 'enter a valid subject!')
  } else {
    setSuccess(userSubject)
  }

  // Userphone
  if (userPhone.value.trim() == '') {
    setError(userPhone, 'field must not be empty!')
  } else if (!validatePhoneNumber(userPhone.value)) {
    setError(userPhone, 'number should contain a country code(+xxx)')
  } else {
    setSuccess(userPhone)
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
    const paragraph = parent.querySelector('#error-msg')
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

  function validatePhoneNumber(phoneNumber) {
    // var phoneNumberRegex = /^(\+\d{1,3})?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/
    var phoneNumberRegex = /^\+[1-9]{1}[0-9]{1,14}$/
    return phoneNumberRegex.test(phoneNumber)
  }
}

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset()
  }
}


// Almost complete but not working as expected
// Vanila script Validation
// const form = document.querySelector('#form')
// const fullName = document.querySelector('#name')
// const userEmail = document.querySelector('#email')
// const userSubject = document.querySelector('#subject')
// const userPhone = document.querySelector('#phone')
// const userMsg = document.querySelector('#message')
// let submitBtn = document.querySelector('#submit')

// form.addEventListener('submit', (event) => {
//   validateForm()
//   if (isFormValid() === true) {
//     form.submit()
//     successSubmission()
//   } else {
//     event.preventDefault()
//   }
// })

// // Validating the submission process
// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.form-group')
//   let result = true
//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false
//     }
//   })
//   return result
// }

// Form Validation
// function validateForm() {
//   // UserName
//   if (fullName.value.trim() == '') {
//     setError(fullName, 'field must not be empty!')
//   } else if (
//     fullName.value.trim().length < 3 ||
//     fullName.value.trim().lenghth > 20
//   ) {
//     setError(fullName, 'enter a valid name')
//   } else {
//     setSuccess(fullName)
//   }

//   // Email
//   if (userEmail.value.trim() == '') {
//     setError(userEmail, 'field must not be empty!')
//   } else if (isEmailValid(userEmail.value)) {
//     setSuccess(userEmail)
//   } else {
//     setError(userEmail, 'enter a valid email address!')
//   }

//   // UserSubject
//   if (userSubject.value.trim() == '') {
//     setError(userSubject, 'field must not be empty!')
//   } else if (
//     userSubject.value.trim().length < 5 ||
//     userSubject.value.trim().lenghth > 50
//   ) {
//     setError(userSubject, 'enter a valid subject!')
//   } else {
//     setSuccess(userSubject)
//   }

//   // Userphone
//   if (userPhone.value.trim() == '') {
//     setError(userPhone, 'field must not be empty!')
//   } else if (!validatePhoneNumber(userPhone.value)) {
//     setError(userPhone, 'number should contain a country code(+xxx)')
//   } else {
//     setSuccess(userPhone)
//   }

//   // UserMsg
//   if (userMsg.value.trim() == '') {
//     setError(userMsg, 'field must not be empty!')
//   } else if (
//     userMsg.value.trim().length < 10 ||
//     userMsg.value.trim().lenghth > 500
//   ) {
//     setError(userMsg, 'Message should not exceed 500 characters!')
//   } else {
//     setSuccess(userMsg)
//   }

//   // Defining the error function
//   function setError(element, errorMessage) {
//     const parent = element.parentElement
//     if (parent.classList.contains('success')) {
//       parent.classList.remove('success')
//     }
//     parent.classList.add('error')
//     const paragraph = parent.querySelector('#error-msg')
//     paragraph.textContent = errorMessage
//   }

//   function setSuccess(element) {
//     const parent = element.parentElement
//     if (parent.classList.contains('error')) {
//       parent.classList.remove('error')
//     }
//     parent.classList.add('success')
//   }

//   // Email validation
//   function isEmailValid(email) {
//     const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
//     return reg.test(email)
//   }

//   function validatePhoneNumber(phoneNumber) {
//     // var phoneNumberRegex = /^(\+\d{1,3})?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/
//     var phoneNumberRegex = /^\+[1-9]{1}[0-9]{1,14}$/
//     return phoneNumberRegex.test(phoneNumber)
//   }
// }

// window.onbeforeunload = () => {
//   for (const form of document.getElementsByTagName('form')) {
//     form.reset()
//   }
// }


// Some parts Not working as expected
// Vanila script Validation
// const form = document.querySelector('#form')
// const fullName = document.querySelector('#name')
// const userEmail = document.querySelector('#email')
// const userSubject = document.querySelector('#subject')
// const userPhone = document.querySelector('#phone')
// const userMsg = document.querySelector('#message')
// let submitBtn = document.querySelector('#submit')

// form.addEventListener('submit', (event) => {
//   validateForm()
//   if (isFormValid() === true) {
//     form.submit()
//     successSubmission()
//   } else {
//     event.preventDefault()
//   }
// })

// // Validating the submission process
// function isFormValid() {
//   const inputContainers = form.querySelectorAll('.form-group')
//   let result = true
//   inputContainers.forEach((container) => {
//     if (container.classList.contains('error')) {
//       result = false
//     }
//   })
//   return result
// }

// // Form Validation
// function validateForm() {
//   // UserName
//   if (fullName.value.trim() == '') {
//     setError(fullName, 'field must not be empty!')
//   } else if (
//     fullName.value.trim().length < 3 ||
//     fullName.value.trim().lenghth > 20
//   ) {
//     setError(fullName, 'enter a valid name')
//   } else {
//     setSuccess(fullName)
//   }

//   // Email
//   if (userEmail.value.trim() == '') {
//     setError(userEmail, 'field must not be empty!')
//   } else if (isEmailValid(userEmail.value)) {
//     setSuccess(userEmail)
//   } else {
//     setError(userEmail, 'enter a valid email address!')
//   }

//   // UserSubject
//   if (userSubject.value.trim() == '') {
//     setError(userSubject, 'field must not be empty!')
//   } else if (
//     userSubject.value.trim().length < 5 ||
//     userSubject.value.trim().lenghth > 50
//   ) {
//     setError(userSubject, 'enter a valid subject!')
//   } else {
//     setSuccess(userSubject)
//   }

//   // Userphone
//   if (userPhone.value.trim() == '') {
//     setError(userPhone, 'field must not be empty!')
//   } else if (!validatePhoneNumber(userPhone.value)) {
//     setError(userPhone, 'number should contain a country code(+xxx)')
//   } else {
//     setSuccess(userPhone)
//   }

//   // UserMsg
//   if (userMsg.value.trim() == '') {
//     setError(userMsg, 'field must not be empty!')
//   } else if (
//     userMsg.value.trim().length < 10 ||
//     userMsg.value.trim().lenghth > 500
//   ) {
//     setError(userMsg, 'Message should not exceed 500 characters!')
//   } else {
//     setSuccess(userMsg)
//   }

//   // Defining the error function
//   function setError(element, errorMessage) {
//     const parent = element.parentElement
//     if (parent.classList.contains('success')) {
//       parent.classList.remove('success')
//     }
//     parent.classList.add('error')
//     const paragraph = parent.querySelector('#error-msg')
//     paragraph.textContent = errorMessage
//   }

//   function setSuccess(element) {
//     const parent = element.parentElement
//     if (parent.classList.contains('error')) {
//       parent.classList.remove('error')
//     }
//     parent.classList.add('success')
//   }

//   // Email validation
//   function isEmailValid(email) {
//     const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
//     return reg.test(email)
//   }

//   function validatePhoneNumber(phoneNumber) {
//     // var phoneNumberRegex = /^(\+\d{1,3})?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/
//     var phoneNumberRegex = /^\+[1-9]{1}[0-9]{1,14}$/
//     return phoneNumberRegex.test(phoneNumber)
//   }
// }

// window.onbeforeunload = () => {
//   for (const form of document.getElementsByTagName('form')) {
//     form.reset()
//   }
// }