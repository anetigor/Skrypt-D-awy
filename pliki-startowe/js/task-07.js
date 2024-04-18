
  document.addEventListener('DOMContentLoaded', function() {
    const fontSizeControl = document.getElementById('font-size-control');
    const textSpan = document.getElementById('text');

   
    textSpan.style.fontSize = fontSizeControl.value + 'px';

   
    function adjustFontSize() {
      textSpan.style.fontSize = fontSizeControl.value + 'px';
    }

    
    fontSizeControl.addEventListener('input', adjustFontSize);
  });
