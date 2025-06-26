const scriptURL = 'https://script.google.com/macros/s/AKfycbzIrnWIrn5J4hE_8tAfr8IJ28AnOIHcxO8I6XWA8t0Te0xHEG5uiQbUDXnwxebuXVub6A/exec'; // Replace with your deployed Apps Script URL
const form = document.forms['contactForm']; // Assuming your form has name="contact-form"
const statusMessageDiv = document.getElementById('formStatusMessage');
form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent default form submission

statusMessageDiv.textContent = '';
  statusMessageDiv.style.color = '';



  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // You might want to parse response.json() if your Apps Script returns JSON
      // console.log(response); 
      alert('نورتنا يا يا كبير !');
      window.location.reload(); // Reload the page after successful submission
    })
    .catch(error => console.error('Error!', error.message));
});