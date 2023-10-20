const pageDiv = document.querySelector('.page');
const firstParagraph = document.createElement('p');
const headerThree = document.createElement('h3')
const secondDiv = document.createElement('div');
const headerOne = document.createElement('h1');
const secondParagraph = document.createElement('p');

firstParagraph.textContent = 'Hey I’m red!';
firstParagraph.classList.add('firstParagraph')
pageDiv.appendChild(firstParagraph);

headerThree.textContent = 'I’m a blue h3!';
headerThree.classList.add('header-three')
pageDiv.appendChild(headerThree);

secondDiv.classList.add('second-div')

headerOne.textContent = 'I’m in a div';
headerOne.classList.add('header-one')
secondDiv.appendChild(headerOne);

secondParagraph.textContent = 'Me too';
secondParagraph.classList.add('second-paragraph')
secondDiv.appendChild(secondParagraph);

pageDiv.appendChild(secondDiv);

