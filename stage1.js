var xhr = new XMLHttpRequest();
var token = '{"token":"05JAOQ1jhi"}';
xhr.open("POST", "http://challenge.code2040.org/api/getstring", true);
xhr.send(token);

var json = JSON.parse(key);
var holder = reverse(json.result);

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

token = JSON.parse(token);

var response = new Object;
response.token = token.token;
response.string = holder;
response = JSON.stringify(response);

var xhr2 = new XMLHttpRequest();
xhr2.open("POST", "http://challenge.code2040.org/api/validatestring", true);
xhr2.send(response);