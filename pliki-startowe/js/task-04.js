document.addEventListener('DOMContentLoaded', function() {
    let counterValue = 0; 
    const valueSpan = document.getElementById('value'); 
    const decrementButton = document.querySelector('button[data-action="decrement"]');
    const incrementButton = document.querySelector('button[data-action="increment"]');
  
    
    function updateDisplay() {
      valueSpan.textContent = counterValue;
    }
  
   
    decrementButton.addEventListener('click', function() {
      counterValue--; // dekrementacja wartości licznika
      updateDisplay(); // aktualizacja wyświetlacza
    });
  

    incrementButton.addEventListener('click', function() {
      counterValue++; 
      updateDisplay(); 
    });
  
    updateDisplay(); 
  });
