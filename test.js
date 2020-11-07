const hf = require("./src/");

console.log("--> Testing....");
function test1() {
try {
   hf("https://www.google.com");
   console.log("--> Works Perfectly :>");
   process.exit(0);
} catch (error) {
   console.log("--> Test Failed.");
   process.exit(1);
}
}
