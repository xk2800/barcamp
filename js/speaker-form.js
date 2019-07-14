
const scriptURL_speaker = 'https://script.google.com/macros/s/AKfycbzwvVwkJl85eKCB4bgis9osHyLztWqOm3jeelKEbod2GR8ymks5/exec';
const form_speaker = document.forms['speaker-form'];

form_speaker.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL_speaker, { method: 'POST', body: new FormData(form_speaker)})
    .then(response => {
        document.querySelector(".success-message-speaker").innerHTML = "Success! Thank you for your submission :)";
        console.log('Success!', response);
        document.getElementById("speaker-form").reset();
    })
    .catch(error => console.error('Error!', error.message))
});

