const descriptions = document.querySelectorAll(".description");

// for (let desc of descriptions.values()){
//     let content = desc.innerText;
//     console.log(content);
// }

// for (let desc of descriptions.values()){
//     let content = desc.innerText;

//     if(content.length > 250){
//         content = content.slice(0,250);
//         content = content + "...";
//     }
//     console.log(content);
// }

// for (let desc of descriptions.values()){
//     let content = desc.innerText;

//     if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = content + "...";
//     }
//     desc.innerText = content; 
// }

// 
// for (let desc of descriptions.values()){
//     let content = desc.innerText;

//     if (content.length > 250){
//         content = content.slice(0, 250);
//         content = content + '<a href="#">...</a>'
//     }

//     desc.innerText = content;
// }

for (let desc of descriptions.values()){
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating .value");

// for (let rating of ratings){
//     let ratingValue = parseFloat(rating.innerText);
//     console.log(ratingValue);
// }

// for (let rating of ratings){
//     let ratingValue = parseFloat(rating.innerText)

//     if (ratingValue > 4.7) {
//         rating.style.fontWeight = "bold";
//     }
// }

// for (let rating of ratings){
//     let ratingValue = parseFloat(rating.innerText);

//     if (ratingValue > 4.7) {
//         rating.style.fontWeight = "bold";
//         rating.style.color = "#3ba17c";
//     }
// }

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);

    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

//select the parks on the page using the park class as a selector
const parks = document.querySelectorAll(".park")

//Then get the number of parks using the length property of the list:
const numberParks = parks.length;

//create a new element. In this case use a <div>
const newElement = document.createElement("div");

//This creates an empty element, 
//You can set the text of this element with the innerText property

newElement.innerText = `${numberParks} exciting parks to visit`;

//Add this class to the new element as follows:
newElement.classList.add("header-statement");

//add the new element to the DOM 
//Select the <header> element and use the appendChild()
//method to add the new element <header>
const header = document.querySelector("header");
header.appendChild(newElement);

//get the parent element of all parks 
const main = document.querySelector("main");

//Select a single park
const park = main.querySelector(".park");

//remove that park
main.removeChild(park);
