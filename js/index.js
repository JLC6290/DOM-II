// // Your code goes here

// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//   }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)


// hide paragraphs and images
let paragraphs = document.querySelectorAll("p");
// let images = document.querySelectorAll("img");
// images.forEach(function (item){
//     item.style.visibility = "hidden";
// });

// show paragraphs on mouseover
// function showText(event) {
//     event.target.style.visibility = "visible";
// }
// paragraphs.forEach(function (item) {
//     item.style.visibility = "hidden";
//     item.addEventListener('mouseover', showText);
// })

function redBackground(event) {
    document.querySelector("body").style.backgroundColor = 'red';
}
document.querySelector("nav").addEventListener('mouseover', redBackground);

document.querySelector('.intro img').addEventListener('mousedown', (event) => {
    event.target.style.visibility = 'visible';
})

document.querySelector('h1').addEventListener('mousedown', (event) => {
    event.target.style.fontSize = '6rem'
})

function clearBackground(event) {
    document.querySelector("body").style.backgroundColor = 'white';
}
document.querySelector("header").addEventListener('click', clearBackground);

function colorText(event) {
    event.target.style.color = 'green';
    console.log("text is green");
}
function revertText(event) {
    event.target.style.color = 'black';
    console.log("text is black");
}
paragraphs.forEach(function (item) {
    item.addEventListener('mouseover', colorText);
    item.addEventListener('mouseleave', revertText);
})

function changeFont(event) {
    event.target.style.fontFamily = "arial";
}
function revertFont(event) {
    event.target.style.fontFamily = "Roboto";
}

paragraphs.forEach(function (item) {
    item.addEventListener('click', changeFont);
    item.addEventListener('dblclick', revertFont);
})
