document.addEventListener('DOMContentLoaded', function() {
 
  const categories = document.querySelectorAll('#categories .item');
  

  console.log(`Number of categories: ${categories.length}`);
  
 
  categories.forEach(category => {
   
    const headerText = category.querySelector('h2').innerText;
    console.log(`Category: ${headerText}`);
    
    
    const itemsCount = category.querySelectorAll('ul li').length;
    console.log(`Elements: ${itemsCount}`);
  });
});

