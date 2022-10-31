// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title)
// console.log(document.head)
// console.log(document.all)
// document.all[0].textContent = "hello"
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)


//get element by id

// console.log(document.getElementById('header-title'));
var h1 = document.getElementById('header-title')
var mainheader = document.getElementById('main-header')
var title = document.getElementById('title')


console.log(h1)
console.log(title)

// console.log(h1.innerText)
// console.log(h1.textContent)
// h1.textContent = " Hello USER !!"
//h1.innerHTML = '<h2>Hello World</h2>'

mainheader.style.borderBottom = 'solid 3px #000';
title.style.color = "green"
title.style.fontWeight = "bold"

/get element by classname
var allList = document.getElementsByClassName('list-group-item');
console.log(allList)
console.log(allList[1]);

// allList[1].textContent = "Hello 2"



allList[2].style.backgroundColor = "green"

// iterating throuh all list and styling coz its an array
for(var i =0; i < allList.length; i++){
    allList[i].style.fontWeight = "bold"
}

