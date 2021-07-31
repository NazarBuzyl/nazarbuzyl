import $ from 'jquery';

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogs-unogs-v1.p.rapidapi.com/api.cgi",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a363042794mshc61dbcfa085f4dfp12d85djsn66a5a41f14bf",
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});