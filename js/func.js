//alert('Hello World');
const name = document.querySelector('.name');
const button = document.querySelector('button');
const print = document.querySelector('#output');

button.addEventListener('click', function(event) {
    print.innerHTML = name.value;
    event.preventDefault();
}, false);