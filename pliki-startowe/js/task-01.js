document.addEventListener('DOMContentLoaded', function() {
  // Znajdź wszystkie kategorie (elementy 'li.item') wewnątrz 'ul#categories'
  const categories = document.querySelectorAll('#categories .item');
  
  // Wypisz liczbę kategorii
  console.log(`Number of categories: ${categories.length}`);
  
  // Iteruj przez wszystkie kategorie
  categories.forEach(category => {
    // Znajdź i wypisz tekst nagłówka h2
    const headerText = category.querySelector('h2').innerText;
    console.log(`Category: ${headerText}`);
    
    // Znajdź wszystkie elementy 'li' wewnątrz danej kategorii i policz je
    const itemsCount = category.querySelectorAll('ul li').length;
    console.log(`Elements: ${itemsCount}`);
  });
});

