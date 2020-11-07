var request = require("request");

module.exports = function(url, err, ress) {
if (!url||url === null||url === "") return console.log("[HTTPForwarder.js] Hostname should not Empty")
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
      err(error);
      return next();
  }
ress = response;
next();
})).pipe( res );
};
}
