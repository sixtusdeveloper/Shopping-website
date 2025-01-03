document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#newsletterForm'); // Form element
  const userEmail = document.querySelector('#newsletter-email'); // Email input
  const errorMssg = document.querySelector('#error-mssg-newsletter'); // Error message span
  const successMssg = document.querySelector('#success-mssg-newsletter'); // Success message span

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Reset message visibility
    hideMessages();

    // Validate the form fields
    if (validateForm()) {
      const email = userEmail.value.trim();

      if (isEmailSubscribed(email)) {
        displayMessage(
          'This email is already subscribed.',
          'error'
        );
      } else {
        storeEmail(email);
        displayMessage(
          "Subscribed successfully!",
          'success'
        );
        userEmail.value = ''; // Clear the input field
      }
    }
  });

  // Hide all messages
  function hideMessages() {
    errorMssg.style.display = 'none';
    successMssg.style.display = 'none';
  }

  // Validate the email input field
  function validateForm() {
    if (userEmail.value.trim() === '') {
      displayMessage('Field must not be empty!', 'error');
      return false;
    } else if (!isEmailValid(userEmail.value)) {
      displayMessage('Enter a valid email address!', 'error');
      return false;
    }
    return true;
  }

  // Display success or error message
  function displayMessage(message, type) {
    if (type === 'success') {
      successMssg.textContent = message;
      successMssg.style.display = 'block';

      // Automatically hide the success message after 3 seconds
      setTimeout(() => {
        successMssg.style.display = 'none';
      }, 3000);
    } else if (type === 'error') {
      errorMssg.textContent = message;
      errorMssg.style.display = 'block';

      // Automatically hide the error message after 3 seconds
      setTimeout(() => {
        errorMssg.style.display = 'none';
      }, 3000);
    }
  }

  // Validate email format using regex
  function isEmailValid(email) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
  }

  // Store email in localStorage
  function storeEmail(email) {
    let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    subscribedEmails.push(email);
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
  }

  // Check if the email is already subscribed
  function isEmailSubscribed(email) {
    const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    return subscribedEmails.includes(email);
  }
});



// Working but not as expected
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('#newsletterForm'); // Form element
//   const userEmail = document.querySelector('#newsletter-email'); // Email input
//   const formGroup = document.querySelector('.form-group'); // Parent container
//   const errorMssg = document.querySelector('#error-mssg'); // Error message span

//   form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission

//     // Validate the form fields
//     validateForm();

//     if (isFormValid()) {
//       const email = userEmail.value.trim();

//       if (isEmailSubscribed(email)) {
//         displayMessage('This email is already subscribed.', 'error');
//       } else {
//         storeEmail(email);
//         displayMessage("You've successfully subscribed to our newsletter!", 'success');
//         userEmail.value = ''; // Clear the input field
//       }
//     }
//   });

//   // Check if the form is valid (no error class present)
//   function isFormValid() {
//     return !formGroup.classList.contains('error');
//   }

//   // Validate the email input field
//   function validateForm() {
//     if (userEmail.value.trim() === '') {
//       setError('Field must not be empty!');
//     } else if (!isEmailValid(userEmail.value)) {
//       setError('Enter a valid email address!');
//     } else {
//       setSuccess();
//     }
//   }

//   // Set error state
//   function setError(errorMessage) {
//     formGroup.classList.add('error');
//     formGroup.classList.remove('success');
//     displayMessage(errorMessage, 'error');
//   }

//   // Set success state
//   function setSuccess() {
//     formGroup.classList.remove('error');
//     formGroup.classList.add('success');
//   }

//   // Display success or error message
//   function displayMessage(message, type) {
//     errorMssg.textContent = message;
//     errorMssg.style.color = type === 'success' ? 'green' : 'red';

//     // Automatically hide the message after 3 seconds
//     setTimeout(() => {
//       errorMssg.textContent = '';
//     }, 3000);
//   }

//   // Validate email format using regex
//   function isEmailValid(email) {
//     const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return reg.test(email);
//   }

//   // Store email in localStorage
//   function storeEmail(email) {
//     let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
//     subscribedEmails.push(email);
//     localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
//   }

//   // Check if the email is already subscribed
//   function isEmailSubscribed(email) {
//     const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
//     return subscribedEmails.includes(email);
//   }
// });



// Contain some typos
// An improved version including storing the email in a local storage for comparism with the email in the form field.
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('#newsletterForm'); // Form element
//   const userEmail = document.querySelector('#newsletter-email'); // Email input
//   const formGroup = document.querySelector('.form-group'); // Parent container
//   const errorMssg = document.createElement('p'); // Error message element
//   errorMssg.style.color = 'red';
//   errorMssg.style.marginTop = '10px';
//   formGroup.appendChild(errorMssg);

//   form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission

//     // Validate form fields
//     validateForm();

//     if (isFormValid()) {
//       const email = userEmail.value.trim();

//       if (isEmailSubscribed(email)) {
//         displayMessage('This email is already subscribed.', 'error');
//       } else {
//         storeEmail(email);
//         displayMessage("You've successfully subscribed to our newsletter!", 'success');
//         userEmail.value = ''; // Clear the input field
//       }
//     }
//   });

//   // Check if the form is valid (no error class present)
//   function isFormValid() {
//     return !form.querySelector('.error');
//   }

//   // Validate the email input field
//   function validateForm() {
//     if (userEmail.value.trim() === '') {
//       setError(userEmail, 'Field must not be empty!');
//     } else if (!isEmailValid(userEmail.value)) {
//       setError(userEmail, 'Enter a valid email address!');
//     } else {
//       setSuccess(userEmail);
//     }
//   }

//   // Set error state
//   function setError(element, errorMessage) {
//     const parent = element.parentElement;
//     parent.classList.add('error');
//     parent.classList.remove('success');
//     displayMessage(errorMessage, 'error');
//   }

//   // Set success state
//   function setSuccess(element) {
//     const parent = element.parentElement;
//     parent.classList.remove('error');
//     parent.classList.add('success');
//   }

//   // Display success or error message
//   function displayMessage(message, type) {
//     errorMssg.textContent = message;
//     errorMssg.style.color = type === 'success' ? 'green' : 'red';

//     // Automatically hide the message after 3 seconds
//     setTimeout(() => {
//       errorMssg.textContent = '';
//     }, 3000);
//   }

//   // Validate email format using regex
//   function isEmailValid(email) {
//     const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return reg.test(email);
//   }

//   // Store email in localStorage
//   function storeEmail(email) {
//     let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
//     subscribedEmails.push(email);
//     localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
//   }

//   // Check if the email is already subscribed
//   function isEmailSubscribed(email) {
//     const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
//     return subscribedEmails.includes(email);
//   }
// });





// // Vanilla JS Validation
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('#newsletterForm'); // Form element
//   const userEmail = document.querySelector('#newsletter-email'); // Email input
//   const errorMssg = document.querySelector('#error-mssg'); // Error message span

//   form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission

//     // Validate form fields
//     validateForm();

//     if (isFormValid()) {
//       successSubmission();
//     }
//   });

//   // Check if the form is valid (no error class present)
//   function isFormValid() {
//     return !form.querySelector('.error');
//   }

//   // Validate the email input field
//   function validateForm() {
//     if (userEmail.value.trim() === '') {
//       setError(userEmail, 'Field must not be empty!');
//     } else if (!isEmailValid(userEmail.value)) {
//       setError(userEmail, 'Enter a valid email address!');
//     } else {
//       setSuccess(userEmail);
//     }
//   }

//   // Set error state
//   function setError(element, errorMessage) {
//     const parent = element.parentElement;
//     parent.classList.add('error');
//     parent.classList.remove('success');
//     errorMssg.textContent = errorMessage;
//   }

//   // Set success state
//   function setSuccess(element) {
//     const parent = element.parentElement;
//     parent.classList.remove('error');
//     parent.classList.add('success');
//     errorMssg.textContent = ''; // Clear error message
//   }

//   // Validate email format using regex
//   function isEmailValid(email) {
//     const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return reg.test(email);
//   }

//   // Show success message and clear input field
//   function successSubmission() {
//     errorMssg.textContent = ''; // Clear error messages
//     const successMessage = document.createElement('p');
//     successMessage.textContent = "You've successfully subscribed to our newsletter!";
//     successMessage.style.color = 'green';
//     successMessage.style.marginTop = '10px';

//     // Remove any existing success message before adding a new one
//     const existingMessage = form.querySelector('.success-message');
//     if (existingMessage) {
//       existingMessage.remove();
//     }

//     successMessage.classList.add('success-message');
//     form.querySelector('.form-group').appendChild(successMessage);

//     // Clear the input field
//     userEmail.value = '';
//   }
// });



// // Vanila script Validation
// const form = document.querySelector('#nnewsletterForm')
// const userEmail = document.querySelector('#newsletter-email')
// let submitBtn = document.querySelector('#newsletter-submit')

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
//   // Email
//   if (userEmail.value.trim() == '') {
//     setError(userEmail, 'field must not be empty!')
//   } else if (isEmailValid(userEmail.value)) {
//     setSuccess(userEmail)
//   } else {
//     setError(userEmail, 'enter a valid email address!')
//   }

//   // Defining the error function
//   function setError(element, errorMessage) {
//     const parent = element.parentElement
//     if (parent.classList.contains('success')) {
//       parent.classList.remove('success')
//     }
//     parent.classList.add('error')
//     const paragraph = parent.querySelector('#error-mssg')
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
// }

// window.onbeforeunload = () => {
//   for (const form of document.getElementsByTagName('form')) {
//     form.reset()
//   }
// }
