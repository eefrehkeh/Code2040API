var xhr = new XMLHttpRequest();
var register = '{"email":"qcity1000@gmail.com","github":"https://github.com/eefrehkeh/Code2040API"}';
xhr.open("POST", "http://challenge.code2040.org/api/register", true);
xhr.send(register);
