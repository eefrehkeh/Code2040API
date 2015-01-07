var xhr = new XMLHttpRequest();
var token = '{"token":"05JAOQ1jhi"}';
xhr.open("POST", "http://challenge.code2040.org/api/getstring", true);
var key;
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200) {
        key = xhr.responseText;
	key = "" + key;
  }
};
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
var key2;
xhr2.onreadystatechange = function() {
  if(xhr2.readyState == 4 && xhr2.status == 200) {
        key2 = xhr2.responseText;
	key2 = "" + key2;
  }
};
xhr2.send(response);