const container = document.querySelector('#container'); //object as attach point
const content = document.createElement('div'); //create new element in memory
content.classList.add('content'); //add a class
content.textContent = 'This is the glorious text-content!'; //add content
container.appendChild(content); //attach new element to anchor point

//a <p> with red text that says “Hey I’m red!”
const amRed = document.createElement('p');
amRed.textContent = 'Hey I\’m red!';
container.appendChild(amRed);


//an <h3> with blue text that says “I’m a blue h3!”
const amBlue = document.createElement('h3');
amBlue.textContent = 'I\’m a blue h3!';
container.appendChild(amBlue);

//a <div> with a black border and pink background color with the following elements inside of it:
const blackPink = document.createElement('div');
blackPink.style.cssText = 'border-color: black; background: pink'; 
blackPink.textContent = 'I\’m a blue h3!';
container.appendChild(blackPink);

//following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
//Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
const amaDiv = document.createElement('h1');
amaDiv.textContent = 'I\’m in a div';
blackPink.appendChild(amaDiv);

const meToo = document.createElement('p');
meToo.textContent = 'ME TOO!';
blackPink.appendChild(meToo);

