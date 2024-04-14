document.addEventListener('DOMContentLoaded', function() {
    // Pobranie elementów input i span
    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');
  
    // Funkcja, która aktualizuje zawartość spana
    function updateOutput() {
      output.textContent = input.value || "Anonymous"; // Użyj wartości input lub "Anonymous" jeśli input jest pusty
    }
  
    // Dodanie nasłuchiwacza zdarzeń na zdarzenie "input" w elemencie input
    input.addEventListener('input', updateOutput);
  });