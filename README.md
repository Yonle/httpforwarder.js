# HTTPForwarder.js [![Build Status](https://travis-ci.com/Yonle/httpforwarder.js.svg?token=siupXwSyfqgsbWPiyyVd&branch=main)](https://travis-ci.com/Yonle/httpforwarder.js)
A lightweight HTTP Forwarder Module made for Express Middleware & Cli

# Getting Started
Installing as Module :
```bash
npm i httpforwarder.js
```

**httpforwarder.js Cli (Stable) :**
```bash
npm i -g httpforwarder.js
```

# Module Usage 
## General
```js
const app = require("express")();
const hf = require("httpforwarder.js");

//Use httpforwarder Middleware
app.use(hf("https://www.example.com"));

//Listen to Port
app.listen(3000)
```
Then, Open your Browser and Visit http://localhost:3000
### Callbacks
Error Handling
```js
app.use(hf("https://www.google.com", (err) => console.log(error)));
```
Something...
```js
app.use(hf("https://www.example.com", (err, req, res) => {
if (err) throw err;

//If client requested
if (req) console.log("--> Client Requested");
//If the Provided Host is Completely Loaded
if (res) console.log(`--> Response Sended (${res.statusCode})`);
}));
```
# CLI usage 
Forward a URL from **www.example.com** to Port 8080
```bash
hf 8080 https://www.example.com
```
Then, Visit http://localhost:8080

## Get env value
If you're want to get a value from `process.env`, You can try to set a value for the `PORT` or `TARGET` value as `env.YourEnvValue`.

Example:
```bash
# Get 'PORT' value from process.env for PORT.
hf env.PORT https://www.example.com
```
## Feedback
Any question or doubt can join our [Discord Server](https://discord.gg/9S3ZCDR).

## Testing
```bash
npm run test
# NOTE: Only Run Module Test. 
```
## MIT License

Copyright (c) 2020 Yonle

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


