"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://unogs-unogs-v1.p.rapidapi.com/api.cgi",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "a363042794mshc61dbcfa085f4dfp12d85djsn66a5a41f14bf",
    "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
  }
};

_jquery["default"].ajax(settings).done(function (response) {
  console.log(response);
});