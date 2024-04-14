document.addEventListener('DOMContentLoaded', function() {
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');
  
    createBtn.addEventListener('click', function() {
      const amount = document.getElementById('box-amount').value;
      createBoxes(amount);
    });
  
    destroyBtn.addEventListener('click', destroyBoxes);
  
    function createBoxes(amount) {
      let boxesMarkup = '';
      let initialSize = 30;
      for (let i = 0; i < amount; i++) {
        const size = initialSize + i * 10;
        boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
      }
      boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
    }
  
    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
  
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
  });
  