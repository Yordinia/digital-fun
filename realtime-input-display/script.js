const bookAmh = document.querySelector('#መጽሀፍ')
const displayBooks = document.querySelector('.display')
const btn = document.querySelector('#btn')
const stored = document.querySelector('.stored-books')
const book = [];

function storedDisplay(){
book.push(bookAmh.value);
bookAmh.value = ''
btn.classList.replace('show','hide')
displayBooks.classList.replace('show-visibility','hide-visibility');
stored.innerHTML += `
<li> 
${book[book.length-1]}
</li>
`
stored.classList.replace('hide','show')
}

function display() {
btn.classList.replace('hide','show')
displayBooks.classList.replace('hide-visibility','show-visibility');
displayBooks.style.padding = 0;
const x = document.createElement('div');
x.innerHTML = `
<h3> ${bookAmh.value}</h3>
`
if(displayBooks.querySelector('div')) displayBooks.removeChild(displayBooks.querySelector('div'));
displayBooks.appendChild(x);
}

bookAmh.addEventListener('keyup', display)
btn.addEventListener('click',storedDisplay)