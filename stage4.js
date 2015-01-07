var xhr = new XMLHttpRequest();
var token = '{"token":"05JAOQ1jhi"}';
xhr.open("POST", "http://challenge.code2040.org/api/time", false);
xhr.send(token);
var json = JSON.parse(xhr.response).result.datestamp
var msec = Date.parse(JSON.parse(xhr.response).result.datestamp)
var d = new Date(msec);
var sec = JSON.parse(xhr.response).result.interval;
d.setSeconds(d.getSeconds() + sec);
d.toISOString();
token = JSON.parse(token);
var response = new Object;
response.token = token.token;
response.datestamp = d.toISOString();
response = JSON.stringify(response);
var xhr2 = new XMLHttpRequest();
xhr2.open("POST", "http://challenge.code2040.org/api/validatetime", false);
xhr2.send(response);