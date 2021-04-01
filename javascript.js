// let Henry = ['yes'];
// let name = prompt('Hello, What is your name?')
// let search = prompt('Do you make over $100,000 a year?')

// if (Henry.includes(search.toLowerCase())) {
//     message = `Hello, ${name.toUpperCase()}, How may we serve you? `;
// } else {
//     message =  `This service may not be for you, ${name.toUpperCase()}, sorry!`;
// }




// document.querySelector('main').innerHTML = `<p>${message}</p>`;






// fetch('https://api.pexels.com/v1/photo/black-toyota-4-door-truck-1149137/')
//     .then(response => response.json())
//     .then(data => generateImage(data.message))

// function generateImage(data) {
//     const html = `
//         <img src='${data}'alt>
//     `;
//     background.innerHTML = html;
// }



//***REGEX***
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");
const form = document.querySelector('form');
const service = document.getElementById('service');


// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
    return /^\(\s\d{3}\)\d{3}-\d{4}$/.test(telephone);
}

// Must be a valid email address
function isValidEmail(email) {
    return /^[^@]+@[^@.]*\.[a-z]*$/i.test(email);
}


//Format Telephone//
function formatTelephone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    return text.replace(regex, '($1) $2-$3');
}



function showOrHideTip(show, element) {
    if (show) {
        element.style.display = 'inherent';
    } else {
        element.style.display = 'none';
    };
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


  

  telephoneInput.addEventListener("input", createListener(isValidTelephone));
  

  

telephoneInput.addEventListener("blur", e => {
    e.target.value = formatTelephone(e.target.value);
});

//------------------------------------------------------
//Post Data//
//------------------------------------------------------

form.addEventListener('submit', postData);

function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }


function postData (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, telephone, email, service })
    })
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}