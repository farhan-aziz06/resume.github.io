const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX - spotlight.clientWidth / 2; 
    const y = e.clientY - spotlight.clientHeight / 2;

    spotlight.style.transform = `translate(${x}px, ${y}px)`;
});

const text = document.querySelector('h1');
const textContent = text.textContent;


text.textContent = '';

const characters = textContent.split('');

const tl = gsap.timeline();

characters.forEach((char, index) => {
    tl.to(text, {
        textContent: textContent.substring(0, index + 1),
        duration: 0.2,
        ease: "power3.inOut", 
        delay: index * 0.1,  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwmDWHEPxco48lUrx0qlVufKTCF0oic1vMxtOUX9-QVpfs_Oq9Chhkzb769Zhx972-X/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          msg.innerHTML = "Form Submitted Successfully";
          setTimeout(function() {
            msg.innerHTML = "";
          }, 1000);
          form.reset();
        } else {
          console.error('Form submission failed with status:', response.status);
        }
      })
      .catch(error => {
        console.error('Error occurred during form submission:', error.message);
      });
  });


