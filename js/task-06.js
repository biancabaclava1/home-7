const validationInput = document.getElementById('validation-input');
const validationDataLength = validationInput.getAttribute('data-length');



validationInput.addEventListener('blur', validateInput);

function validateInput() {
  validationInput.value.trim().length === Number(validationDataLength)
    ? changeClass('valid', 'invalid')
    : changeClass('invalid', 'valid');
}

function changeClass(firstClass, secondClass) {
  validationInput.classList.add(firstClass);
  validationInput.classList.remove(secondClass);
}