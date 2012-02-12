# wedgES

wedgES is a very lightweight attempt to bridge the gap between older JavaScript engines and modern ones based on [kangax's es5 compatability table](http://kangax.github.com/es5-compat-table/).

Since wedgES is a shim, it **will not** overwrite any functionality implemented natively.

To keep the wedgES as lightweight as possible, not all new ES5 methods have an associated polyfill, but only those deemed useful for development for older JavaScript engines.

## WARNING!!!

This is an, as yet, untested framework, use at your own risk!

## Inspiration/ Credits

The source – `./src` – files contain comments giving credit to any code that was either used as inspiration, adapted and/ or lifted.

However, special mentions to:

- [Kris Kowal's es5-shim](https://github.com/kriskowal/es5-shim): the main source for all the uber smarts in `./src/Object.js`;
- [Jed Schmidt's Gist](https://gist.github.com/1044533): The Date.prototype.toISOString shim was lifted straight from here; and
- [Mozilla Developer Network's JavaScript Reference](https://developer.mozilla.org/en/JavaScript/Reference): a plethora of knowledge, code examples and shims – for older JavaScript engines.

## API
Links to documentation – at [Mozilla Developer Network's JavaScript Reference](https://developer.mozilla.org/en/JavaScript/Reference) – for all shimmed methods are provided below.

### Object

- [Object.create](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/create)
- [Object.defineProperty](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [Object.defineProperties](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperties)
- [Object.getOwnPropertyDescriptor](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
- [Object.getOwnPropertyNames](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [Object.getPrototypeOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
- [Object.keys](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys)

### Array

- [Array.isArray](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray)

- [Array.prototype.every](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.forEach](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.filter](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.indexOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Array.prototype.lastIndexOf](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
- [Array.prototype.map](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reduce](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.reduceRight](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduceRight)
- [Array.prototype.some](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some)

### Date

- [Date.now](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now)
- [Date.prototype.toISOString](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toISOString)

### Function

- [Function.prototype.bind](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind)

### String

- [String.prototype.trim](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/Trim)

## File size

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr><td>wedgES.js</td><td>1.9kb</td><td>deflate</td>
		<tr><td>wedgES.min.js</td><td>1.5kb</td><td>uglified + deflate</td>
	</tbody>
</table>

## License

(The MIT License)

Copyright &copy; 2012 christos "constantology" constandinou http://muigui.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
