document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const emailInput = loginForm.elements.email;
      const passwordInput = loginForm.elements.password;

      // Sprawdzanie, czy wszystkie pola są wypełnione
      if (!emailInput.value || !passwordInput.value) {
        alert("Proszę wypełnić wszystkie pola.");
      } else {
      
        const formData = {
          email: emailInput.value,
          password: passwordInput.value
        };

        console.log(formData);

       
        loginForm.reset();
      }
    });
  });
