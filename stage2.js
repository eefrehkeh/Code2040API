var xhr = new XMLHttpRequest();
var token = '{"token":"05JAOQ1jhi"}';
xhr.open("POST", "http://challenge.code2040.org/api/haystack", false);
var key;
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200) {
        key = xhr.responseText;
	key = "" + key;
  }
};
xhr.send(token);
var needle = JSON.parse(xhr.response).result.needle;
var haystack = JSON.parse(xhr.response).result.haystack
token = JSON.parse(token);
var response = new Object;
response.token = token.token;
for (var i=0; i < haystack.length ; i++){
	if(haystack[i] == needle){
		var xhr2 = new XMLHttpRequest();
		var holder = String(i)
		response.needle = holder;
		xhr2.open("POST", "http://challenge.code2040.org/api/validateneedle", false);
		response = JSON.stringify(response);
		xhr2.send(response);
		break;
	}
}