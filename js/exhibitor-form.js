
const scriptURL_exhibitor = 'https://script.google.com/macros/s/AKfycbzr4EsJW0_mNWFM8F383cXrnL_3rmfTWVyqyfd_WGmo7ha7TxQ/exec';
const form_exhibitor = document.forms['exhibitor-form'];

form_exhibitor.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL_exhibitor, { method: 'POST', body: new FormData(form_exhibitor)})
    .then(response => {
        document.querySelector(".success-message-exhibitor").innerHTML = "Success! Thank you for your submission :)";
        console.log('Success!', response);
        document.getElementById("exhibitor-form").reset();
    })
    .catch(error => console.error('Error!', error.message))
});

