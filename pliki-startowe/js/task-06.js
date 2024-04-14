
  const input = document.getElementById('validation-input');
  const requiredLength = parseInt(input.dataset.length, 10);  // Użycie dataset dla lepszej czytelności

  function validateInput() {
    if (input.value.length === requiredLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  }

  input.addEventListener('blur', validateInput);

