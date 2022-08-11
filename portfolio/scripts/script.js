// Mobile Menu Toggle Button JavaScript
const hamburgerButton =document.getElementById("hamburger");
const navList =document.getElementById("navList");
function toggleButton(){
  navList.classList.toggle('show');
}
 hamburgerButton.addEventListener('click',toggleButton);

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "omayma.akrach@edu.uiz.ac.ma",
    Password : "Omayma@123",
    To : 'omaymaakrach1@gmail.com',
    From : document.getElementById("email").value,
    Subject : "new Contact form enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}