
  document.addEventListener('DOMContentLoaded', function() {
    const fontSizeControl = document.getElementById('font-size-control');
    const textSpan = document.getElementById('text');

    // Ustawienie początkowego rozmiaru czcionki z wartości początkowej suwaka
    textSpan.style.fontSize = fontSizeControl.value + 'px';

    // Funkcja, która aktualizuje rozmiar czcionki tekstu, kiedy wartość suwaka się zmienia
    function adjustFontSize() {
      textSpan.style.fontSize = fontSizeControl.value + 'px';
    }

    // Dodanie nasłuchiwacza na zdarzenie 'input'
    fontSizeControl.addEventListener('input', adjustFontSize);
  });
