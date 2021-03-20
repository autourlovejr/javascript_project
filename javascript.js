// let Henry = ['yes'];
// let name = prompt('Hello, What is your name?')
// let search = prompt('Do you make over $100,000 a year?')

// if (Henry.includes(search.toLowerCase())) {
//     message = `Hello, ${name.toUpperCase()}, How may we serve you? `;
// } else {
//     message =  `This service may not be for you, ${name.toUpperCase()}, sorry!`;
// }




// document.querySelector('main').innerHTML = `<p>${message}</p>`;


const nameInput = document.getElementById("name");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

// Can only contain letters a-z
function isValidName(name) {
    return /^[a-z]+$/.test(name);
}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
    return /^\(\s\d{3}\)\d{3}-\d{4}$/.test(telephone);
}

// Must be a valid email address
function isValidEmail(email) {
    return /^[^@]+@[^@.]*\.[a-z]*$/i.test(email);
}

function formatTelephone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    return text.replace(regex, '($1) $2-$3');
}



function showOrHideTip(show, element) {
    if (show) {
        element.style.display = 'inherent';
    } else {
        element.style.display = 'none';
    }
}

function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
}
  
nameInput.addEventListener("input", createListener(isValidName));
  
telephoneInput.addEventListener("input", createListener(isValidTelephone));
telephoneInput.addEventListener("blur", e => {
    e.target.value = formatTelephone(e.target.value);
});
  
emailInput.addEventListener("input", createListener(isValidEmail));