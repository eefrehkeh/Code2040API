var xhr = new XMLHttpRequest();
var register = '{"email":"qcity1000@gmail.com","github":"https://github.com/eefrehkeh/Code2040API"}';
xhr.open("POST", "http://challenge.code2040.org/api/register", true);
var key;
xhr.onreadystatechange = function() {//Call a function when the state changes.
  if(xhr.readyState == 4 && xhr.status == 200) {
        key = xhr.responseText;
  }
};
xhr.send(register);
