//1

const titulos = document.getElementsByClassName('titulos');
console.log(titulos);

//2

const titulosArray = Array.from(titulos);
console.log(titulosArray);

//3

titulosArray.forEach(function (item, index, array) {
console.log(item, index, array);
});

//4
const imgs = document.querySelectorAll('img');
console.log(imgs);

//5

let i = 0;
imgs.forEach((item) => {
console.log(i++)
});

//6
 
const paragrafos = document.querySelectorAll('p')
paragrafos.forEach((item => {
console.log(item.innerHTML)
}));


//7
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

