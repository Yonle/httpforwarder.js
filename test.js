const hf = require("./src/");

test1()
console.log("--> Testing....");
function test1() {
try {
   hf("https://www.google.com");
   console.log("--> Works Perfectly :>");
   test2();
} catch (error) {
   console.log("--> Test Failed.");
   process.exit(1);
}
}

function test2() {
try {
console.log("--> Trying to Opening Port & Sending Request...");

var app = require("express")();
app.use(hf("https://www.example.com"));

var listener = app.listen(process.env.PORT, function() {
console.log("--> Port Opened. Sending Request...");
require("http").get(`http://localhost:${listener.address().port`, function (res) {
console.log("--> PERFECT!!");
process.exit(0);
})
});
} catch (error) {
   console.log("--> 2nd Test failed.");
   process.exit(1);
}
}
