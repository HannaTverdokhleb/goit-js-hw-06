const cats = document.querySelectorAll('.item');
console.log("Number of categories:", cats.length);

cats.forEach( cat => {
    const h2 = cat.querySelector('h2');
    console.log("Category:", h2.innerText);
    const subItems = cat.querySelectorAll('ul li');
    console.log("Elements:", subItems.length);

})
