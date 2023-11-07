// INPUT
const dayInp = document.getElementById('day');
const monthInp = document.getElementById('month');
const yearInp = document.getElementById('year');

// OUTPUT
const dayOtp = document.getElementById('DD');
const monthOtp = document.getElementById('MM');
const yearOtp = document.getElementById('YY');

// FORM ELEMENT
const submitBtn = document.querySelector('.submit-btn'); 

submitBtn.addEventListener('click', handleSubmit); 

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'This field is required'; 
            validator = false;
        } else if (monthInp.value > 12) { 
            i.style.borderColor = 'red'; 
            parent.querySelector('small').innerText = 'Must be a valid month'; 
            validator = false;
        } else {
            i.style.borderColor = 'black';
            parent.querySelector('small').innerText = '';
        }
    });
    return validator;
}

function handleSubmit(e) { 
    e.preventDefault();
    if (validate()) {
        if (dayInp.value > day) {
            day = day + months[month - 2];
            month = month - 1;
        }
        if (monthInp.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayInp.value;
        const m = month - monthInp.value;
        const y = year - yearInp.value;

        dayOtp.innerHTML = d;
        monthOtp.innerHTML = m;
        yearOtp.innerHTML = y;
        
        dayInp.value = '';
        monthInp.value = '';
        yearInp.value = '';
    }

}
