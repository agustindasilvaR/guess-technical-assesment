    document.addEventListener("DOMContentLoaded", function() {

        const emailInput = document.getElementById("mail");
        const sendFormBtn = document.getElementById("sendForm");
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        sendFormBtn.addEventListener("click", function(event) {

        event.preventDefault();
        

        const emailValue = emailInput.value.trim();
        
        if (emailValue === "") {
            alert("Please enter an email address.");
            return;
        }
        
        if (emailRegex.test(emailValue)) {
            alert("Email entered: " + emailValue);
        } else {
            alert("The email address entered is not valid. Please check it and try again.");
        }
        });
    });
    