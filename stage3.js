var xhr = new XMLHttpRequest();
var token = '{"token":"05JAOQ1jhi"}';
xhr.open("POST", "http://challenge.code2040.org/api/prefix", false);
var key;
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200) {
        key = xhr.responseText;
	key = "" + key;
  }
};
xhr.send(token);
var prefix = JSON.parse(xhr.response).result.prefix;
var array = JSON.parse(xhr.response).result.array
token = JSON.parse(token);
var response = new Object;
response.token = token.token;
var resultArr = new Array;
for (var i=0; i < array.length ; i++){
	if(array[i].substr(0,prefix.length) != prefix){
		resultArr.push(array[i]);
	}
}
response.array = resultArr;
response = JSON.stringify(response);
var xhr2 = new XMLHttpRequest();
xhr2.open("POST", "http://challenge.code2040.org/api/validateprefix", false);
xhr2.send(response);