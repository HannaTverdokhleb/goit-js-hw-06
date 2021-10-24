const catsNumber = document.querySelectorAll('.item').length;
console.log("Number of categories:", catsNumber);

const firstCatText = document.querySelector(".item h2");
const firstCatsNumberOfChildren = document.querySelectorAll('#categories .item:first-child ul li').length;
console.log("Category:", firstCatText.innerHTML);
console.log("Elements:", firstCatsNumberOfChildren);

const secondCatText = document.querySelector(".item:nth-child(2) h2");
const secondCatsNumberOfChildren = document.querySelectorAll('#categories .item:nth-child(2) ul li').length;
console.log("Category:", secondCatText.innerHTML);
console.log("Elements:", secondCatsNumberOfChildren);

const thirdCatText = document.querySelector(".item:nth-child(3) h2");
const thirdCatsNumberOfChildren = document.querySelectorAll('#categories .item:nth-child(3) ul li').length;
console.log("Category:", thirdCatText.innerHTML);
console.log("Elements:", thirdCatsNumberOfChildren);


