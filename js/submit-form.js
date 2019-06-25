
const scriptURL = 'https://script.google.com/macros/s/AKfycbwzcrherJ-FkfGVIqpglnkm6HwPo3Mp94LymeEb7dJWOCHY9NE/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        document.querySelector(".message").innerHTML = "Success! Thank you for your submission :)";
        console.log('Success!', response);
        document.getElementById("form").reset();
    })
    .catch(error => console.error('Error!', error.message))
});