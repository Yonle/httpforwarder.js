var request = require("request");

module.exports = function(url) {
if (!url||url === null||url === "") return console.log("[HTTPForwarder.js] Hostname should not Empty")
  return async (req, res, next) => {
  var target = url+req.originalUrl;
  await req.pipe( request({
      url: url + req.params[0],
      qs: req.query,
      method: req.method
  }, function(error, response, body){
      if (error) {
      var errormsg = error.code || "Fail";
      res.status(503)
      res.send("<h1>503 Service Unavailable</h1>")
      return false;
  }
res.statusCode = response.statusCode;
 })).pipe( res );
};
}
