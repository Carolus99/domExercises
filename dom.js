const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Here is a p element';
//inline style example follows
p.style.color = "red";

const h3 = document.createElement('h3');
content.classList.add('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color="blue";

const div = document.createElement('div');
content.classList.add('div');
div.style.borderColor="black";
div.style.backgroundColor="pink";

const h1 = document.createElement('h1');
content.classList.add('h1')
h1.textContent = "I'm in a div"

const pDiv = document.createElement('pDiv');
content.classList.add('p')
pDiv.textContent = "ME TOO!"

const btn = document.querySelector('#btn');
btn.onclick = () => alert('hello world');

div.appendChild(h1);
div.appendChild(pDiv);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);