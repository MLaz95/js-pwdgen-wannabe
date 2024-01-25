document.getElementById('button').addEventListener('click', function(){

let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let color = prompt("What is your favorite color?");

document.getElementById('password').innerHTML = 
(`Your password is ${firstName}${lastName}${color}23. You're welcome.`)
})


