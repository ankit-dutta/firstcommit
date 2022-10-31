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

//get element by classname
var allList = document.getElementsByClassName('list-group-item');
console.log(allList)
console.log(allList[1]);

// allList[1].textContent = "Hello 2"



allList[2].style.backgroundColor = "green"

// iterating throuh all list and styling coz its an array
for(var i =0; i < allList.length; i++){
    allList[i].style.fontWeight = "bold"
}

//get element by tag name

let li = document.getElementsByTagName('li');
console.log(li);



//query selector for select one item 
//Make the 2nd item have green background color

let firstlist = document.querySelector('li:first-child');
firstlist.style.backgroundColor = "green"

// Make the 3rd item invisible
let hidelist = document.querySelector('li:nth-child(3)');

hidelist.style.visibility = "hidden"

// hidelist.style.display = "none";


//query selector all

 //2nd list font color green 
let listtwo = document.querySelectorAll('li');
listtwo[1].style.color = "green";

//Choose all the odd elements and make their background green using QuerySelectorALL﻿
let odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd + "odd")

for(let i = 0; i< odd.length; i++){
    odd[i].style.backgroundColor = "green"
    
}

// PART 2

var itemlist = document.querySelector('#items');
//parentNode
// console.log(itemlist.parentnode)
// itemlist.parentNode.style.backgroundColor = 'grey'

//PARENT ELEMENT
// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor = 'grey'

//children
// console.log(itemlist.children)
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = "yellow";

//First child
// console.log(itemlist.firstChild);

//firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "Hello 1 "

//lastChild
// console.log(itemlist.lastChild);

//lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = "Hello 4"

//nextSibling
// console.log(itemlist.nextSibling);

//nextElementSibling
// console.log(itemlist.nextElementSibling)

//previousSibling
// console.log(itemlist.previousElementSibling)

//previousElementSibling
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color ="red";

//methods for creating ---

//createElement
var newdiv = document.createElement('div');

//Add class
newdiv.className = 'hello';

//Add id
newdiv.id = "hello 1"

//Add attr
newdiv.setAttribute('title','hello div')

//create text node
var newdivtext = document.createTextNode('hello world')

//add text to div
 newdiv.appendChild(newdivtext);


let parentnode = document.getElementById('items')
let newli = document.createElement('li');
newli.textContent = "Hello World "
console.log(newli)

console.log(parentnode.innerHTML)
 parentnode.innerHTML = '<li>Helloworld</li>' + ' <li class="list-group-item">Item 1</li>'+ '<li>Helloworld</li>' +parentnode.innerHTML
console.log(newdiv)

