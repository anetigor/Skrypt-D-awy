document.addEventListener('DOMContentLoaded', function() {
    let counterValue = 0; // inicjalizacja zmiennej licznika
    const valueSpan = document.getElementById('value'); // element, który pokazuje wartość licznika
    const decrementButton = document.querySelector('button[data-action="decrement"]');
    const incrementButton = document.querySelector('button[data-action="increment"]');
  
    // Funkcja do aktualizacji tekstu w elemencie <span>
    function updateDisplay() {
      valueSpan.textContent = counterValue;
    }
  
    // Dodanie obsługi zdarzeń dla przycisku zmniejszającego wartość
    decrementButton.addEventListener('click', function() {
      counterValue--; // dekrementacja wartości licznika
      updateDisplay(); // aktualizacja wyświetlacza
    });
  
    // Dodanie obsługi zdarzeń dla przycisku zwiększającego wartość
    incrementButton.addEventListener('click', function() {
      counterValue++; // inkrementacja wartości licznika
      updateDisplay(); // aktualizacja wyświetlacza
    });
  
    updateDisplay(); // Początkowa aktualizacja wyświetlacza
  });