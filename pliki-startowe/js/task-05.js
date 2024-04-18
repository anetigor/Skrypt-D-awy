document.addEventListener('DOMContentLoaded', function() {
 
    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');
  
 
    function updateOutput() {
      output.textContent = input.value || "Anonymous"; 
    }
  
   
    input.addEventListener('input', updateOutput);
  });
