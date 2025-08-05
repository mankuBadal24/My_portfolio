// ========== show menu =======
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() =>
    {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

// contact form submit

const contactForm = document.getElementById("contact--form");
const contactMessage = document.getElementById("contact-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_4kplxog', 'template_b6tgjzd', '#contact--form', 'gGXySDvisuTSsDi-_')
    .then(() => {
      contactMessage.textContent = "✅ Message sent successfully!";
      contactMessage.style.color = "green";
      contactForm.reset();

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    }, (error) => {
      contactMessage.textContent = "❌ Message failed to send. Try again.";
      contactMessage.style.color = "red";
    });
});



// === Change Backgroud header ===
    

// const blurHeader = () =>{
//     const header = document.getElementById('header')

//     this.scrollY >= 50 ? header.classList.add('blur-header')
//                        : header.classList.remove('blur-header')
// }
//     window.addEventListener('scroll',blurHeader)



    