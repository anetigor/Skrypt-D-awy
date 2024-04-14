const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// Pobranie elementu listy ul po ID
const ul = document.getElementById('ingredients');

// Tworzenie fragmentu dokumentu, który będzie przechowywał wszystkie li
const fragment = document.createDocumentFragment();

// Iteracja przez tablicę składników
ingredients.forEach(ingredient => {
    // Tworzenie elementu li
    const li = document.createElement('li');
    
    // Dodanie nazwy składnika jako zawartość tekstowa li
    li.textContent = ingredient;
    
    // Dodanie klasy 'item' do li
    li.classList.add('item');
    
    // Dodanie li do fragmentu dokumentu
    fragment.appendChild(li);
});

// Dodanie wszystkich elementów li do ul w jednej operacji
ul.appendChild(fragment);