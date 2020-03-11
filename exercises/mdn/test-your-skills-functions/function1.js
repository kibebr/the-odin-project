// For the first task, you have to create a simple function that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once.
// Try updating the live code below to recreate the finished example:


let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here

para.innerHTML = names[(Math.random() * (7 - 0) + 0)]

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
    
