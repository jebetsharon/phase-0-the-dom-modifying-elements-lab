// Write your code here!

const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'SHARON is the champion';
document.body.appendChild(newHeader);
