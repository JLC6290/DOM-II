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



let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (item){
    item.style.visibility = "hidden";
});
let images = document.querySelectorAll("img");
images.forEach(function (item){
    item.style.visibility = "hidden";});

document.querySelector("p").addEventListener('mouseover', showText);
function showText(event) {
    event.style.visibility = "visible";
}

function redBackground(event) {
    document.querySelector("body").style.backgroundColor = 'red';
}
document.querySelector("a").addEventListener('mouseover', redBackground);

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