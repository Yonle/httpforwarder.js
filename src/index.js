const request = require("request");
const WebSocket = require('ws');
const events = require("events");
var url;

module.exports = function(url, cb) {
if (!url||url === null||url === "") return console.log("[HTTPForwarder.js] Hostname should not Empty")
  url = url;
  return function (req, res, next) {
  req.pipe( request({
      url: url + req["_parsedUrl"].pathname,
      qs: req.query,
      method: req.method
  }, function(error, response, body){
      if (error) {
      var errormsg = error.code || "Fail";
      res.status(503)
      res.send("<h1>503 Service Unavailable</h1>");
      if (typeof(cb) === "function"){
      cb(error, req, response);
      } else {
      throw new Error(error);
      }
      return next();
  }
if (typeof(cb) === "function") {
cb(undefined, req, response);
}
next();
})).pipe( res );
};
}

