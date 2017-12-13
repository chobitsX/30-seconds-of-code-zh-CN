![Logo](/logo.png)

# 30 seconds of code

> 精心收集的有用的 JavaScript 代码片段，可以让你在 30 秒或更少的时间内理解。

- 使用 <kbd>Ctrl</kbd> + <kbd>F</kbd> 或 <kbd>command</kbd> + <kbd>F</kbd> 快速搜索
- 欢迎贡献代码，再此之前请阅读 [contribution guide](CONTRIBUTING.md).

<h2 id="contents">目录</h2>

* [字符串换位组合(可重复)](#anagrams-of-string-with-duplicates)
* [Average of array of numbers](#average-of-array-of-numbers)
* [Capitalize first letter of every word](#capitalize-first-letter-of-every-word)
* [Capitalize first letter](#capitalize-first-letter)
* [Count occurrences of a value in array](#count-occurrences-of-a-value-in-array)
* [Current URL](#current-url)
* [Curry](#curry)
* [Difference between arrays](#difference-between-arrays)
* [Distance between two points](#distance-between-two-points)
* [Escape regular expression](#escape-regular-expression)
* [Even or odd number](#even-or-odd-number)
* [Factorial](#factorial)
* [Fibonacci array generator](#fibonacci-array-generator)
* [Filter out non-unique values in an array](#filter-out-non-uniqe-values-in-an-array)
* [Flatten array](#flatten-array)
* [et scroll position](#get-scroll-position)
* [Greatest common divisor (GCD)](#greatest-common-divisor-gcd)
* [Head of list](#head-of-list)
* [Initial of list](#initial-of-list)
* [Initialize array with range](#initialize-array-with-range)
* [Initialize array with values](#initialize-array-with-values)
* [Last of list](#last-of-list)
* [Measure time taken by function](#measure-time-taken-by-function)
* [Object from key-value pairs](#object-from-key-value-pairs)
* [Powerset](#powerset)
* [Random number in range](#random-number-in-range)
* [Randomize order of array](#randomize-order-of-array)
* [Redirect to URL](#redirect-to-url)
* [Reverse a string](#reverse-a-string)
* [RGB to hexadecimal](#rgb-to-hexadecimal)
* [Scroll to top](#scroll-to-top)
* [Similarity between arrays](#similarity-between-arrays)
* [Sort characters in string (alphabetical)](#sort-characters-in-string-alphabetical)
* [Sum of array of numbers](#sum-of-array-of-numbers)
* [Swap values of two variables](#swap-values-of-two-variables)
* [Tail of list](#tail-of-list)
* [Unique values of array](#unique-values-of-array)
* [URL parameters](#url-parameters)
* [UUID generator](#uuid-generator)
* [Validate number](#validate-number)

<h3 id="anagrams-of-string-with-duplicates">字符串换位组合(可重复)</h3>

比如字符串 `"ab"` 的所有换位组合字符串是 `["ab", "ba"]`。而 `"aab"` 的所有换位组合是 `["aab", "aba", "aab", "aba", "baa", "baa"]`（允许重复）。

使用递归。

对于给定字符串中的每个字母，为其余字母创建所有的换位组合。使用 `map()` 把当前字母和其余字母的换位组合结合起来，然后用 `reduce()` 把所有换位组合放到一个数组里。递归结束条件是字符串的 `length` 属性等于 `2` 或 `1`。

```js
const anagrams = s => {
  if(s.length <= 2)  return s.length === 2 ? [s, s[1] + s[0]] : [s];
  return s.split('').reduce( (a,l,i) => {
    anagrams(s.slice(0,i) + s.slice(i+1)).map( v => a.push(l+v) );
    return a;
  }, []);
}
```
<h3 id="average-of-array-of-numbers">Average of array of numbers</h3>

Use `reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

```js
const average = arr =>
  arr.reduce( (acc , val) => acc + val, 0) / arr.length;
```
<h3 id="capitalize-first-letter-of-every-word">Capitalize first letter of every word</h3>

Use `replace()` to match the first character of each word and `toUpperCase()` to capitalize it.

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```
<h3 id="capitalize-first-letter">Capitalize first letter</h3>

Use `slice(0,1)` and `toUpperCase()` to capitalize first letter, `slice(1)` to get the rest of the string.
Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lower case.

```js
const capitalize = (str, lowerRest = false) =>
  str.slice(0, 1).toUpperCase() + (lowerRest? str.slice(1).toLowerCase() : str.slice(1));
```
<h3 id="count-occurrences-of-a-value-in-array">Count occurrences of a value in array</h3>

Use `reduce()` to increment a counter each time you encounter the specific value inside the array.

```js
const countOccurrences = (arr, value) => arr.reduce((a, v) => v===value ? a + 1 : a + 0, 0);
```
<h3 id="current-url">Current URL</h3>

Use `window.location.href` to get current URL.

```js
const currentUrl = _ => window.location.href;
```
<h3 id="curry">Curry</h3>

Use recursion.
If the number of provided arguments (`args`) is sufficient, call the passed function `f`.
Otherwise return a curried function `f` that expects the rest of the arguments.

```js
const curry = f =>
  (...args) =>
    args.length >= f.length ? f(...args) : (...otherArgs) => curry(f)(...args, ...otherArgs)
```
<h3 id="difference-between-arrays">Difference between arrays</h3>

Use `filter()` to remove values that are part of `values`, determined using `includes()`.

```js
const difference = (arr, values) => arr.filter(v => !values.includes(v));
```
<h3 id="distance-between-two-points">Distance between two points</h3>

Use `Math.hypot()` to calculate the Euclidean distance between two points.

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```
<h3 id="escape-regular-expression">Escape regular expression</h3>

Use `replace()` to escape special characters.

```js
const escapeRegExp = s =>
  s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
```
<h3 id="even-or-odd-number">Even or odd number</h3>

Use `Math.abs()` to extend logic to negative numbers, check using the modulo (`%`) operator.
Return `true` if the number is even, `false` if the number is odd.

```js
const isEven = num => Math.abs(num) % 2 === 0;
```
<h3 id="factorial">Factorial</h3>

Use recursion.
If `n` is less than or equal to `1`, return `1`.
Otherwise, return the product of `n` and the factorial of `n - 1`.

```js
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1)
```
<h3 id="fibonacci-array-generator">Fibonacci array generator</h3>

Create an empty array of the specific length, initializing the first two values (`0` and `1`).
Use `reduce()` to add values into the array, using the sum of the last two values, except for the first two.

```js
const fibonacci = n =>
  Array.apply(null, [0,1].concat(Array(n-2))).reduce(
    (acc, val, i) => {
      acc.push( i>1 ? acc[i-1]+acc[i-2] : val);
      return acc;
    },[]);
```
<h3 id="filter-out-non-uniqe-values-in-an-array">Filter out non-unique values in an array</h3>

Use `Array.filter()` for an array containing only the unique values.

```js
const unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// unique([1,2,2,3,4,4,5]) -> [1,3,5]
```
<h3 id="flatten-array">Flatten array</h3>

Use recursion.
Use `reduce()` to get all elements that are not arrays, flatten each element that is an array.

```js
const flatten = arr =>
  arr.reduce( (a, v) => a.concat( Array.isArray(v) ? flatten(v) : v ), []);
```
<h3 id="get-scroll-position">et scroll position</h3>

Use `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.
You can omit `el` to use a default value of `window`.

```js
const getScrollPos = (el = window) =>
  ( {x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
   y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop} );
// getScrollPos() -> {x: 0, y: 200}
```
<h3 id="greatest-common-divisor-gcd">Greatest common divisor (GCD)</h3>

Use recursion.
Base case is when `y` equals `0`. In this case, return `x`.
Otherwise, return the GCD of `y` and the remainder of the division `x/y`.

```js
const gcd = (x , y) => !y ? x : gcd(y, x % y);
```
<h3 id="head-of-list">Head of list</h3>

Return `arr[0]`.

```js
const head = arr => arr[0];
```
<h3 id="initial-of-list">Initial of list</h3>

Return `arr.slice(0,-1)`.

```js
const initial = arr => arr.slice(0,-1);
```
<h3 id="initialize-array-with-range">Initialize array with range</h3>

Use `Array(end-start)` to create an array of the desired length, `map()` to fill with the desired values in a range.
You can omit `start` to use a default value of `0`.

```js
const initializeArrayRange = (end, start = 0) =>
  Array.apply(null, Array(end-start)).map( (v,i) => i + start );
```
<h3 id="initialize-array-with-values">Initialize array with values</h3>

Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
You can omit `v` to use a default value of `0`.

```js
const initializeArray = (n, v = 0) =>
  Array(n).fill(v);
```
<h3 id="last-of-list">Last of list</h3>

Return `arr.slice(-1)[0]`.

```js
const last = arr => arr.slice(-1)[0];
```
<h3 id="measure-time-taken-by-function">Measure time taken by function</h3>

Use `performance.now()` to get start and end time for the function, `console.log()` the time taken.
First argument is the function name, subsequent arguments are passed to the function.

```js
const timeTaken = (f,...args) => {
  var t0 = performance.now(), r = f(...args);
  console.log(performance.now() - t0);
  return r;
}
```
<h3 id="object-from-key-value-pairs">Object from key-value pairs</h3>

Use `map()` to create objects for each key-value pair, combine with `Object.assign()`.

```js
const objectFromPairs = arr =>
  Object.assign(...arr.map( v => {return {[v[0]] : v[1]};} ));
```
<h3 id="powerset">Powerset</h3>

Use `reduce()` combined with `map()` to iterate over elements and combine into an array containing all combinations.

```js
const powerset = arr =>
  arr.reduce( (a,v) => a.concat(a.map( r => [v].concat(r) )), [[]]);
```
<h3 id="random-number-in-range">Random number in range</h3>

Use `Math.random()` to generate a random value, map it to the desired range using multiplication.

```js
const randomInRange = (min, max) => Math.random() * (max - min) + min;
```
<h3 id="randomize-order-of-array">Randomize order of array</h3>

Use `sort()` to reorder elements, utilizing `Math.random()` to randomize the sorting.

```js
const randomizeOrder = arr => arr.sort( (a,b) => Math.random() >= 0.5 ? -1 : 1)
```
<h3 id="redirect-to-url">Redirect to URL</h3>

Use `window.location.href` or `window.location.replace()` to redirect to `url`.
Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).

```js
const redirect = (url, asLink = true) =>
  asLink ? window.location.href = url : window.location.replace(url);
```
<h3 id="reverse-a-string">Reverse a string</h3>

Use array destructuring and `Array.reverse()` to reverse the order of the characters in the string.
Combine characters to get a string using `join('')`.

```js
const reverseString = str => [...str].reverse().join('');
```
<h3 id="rgb-to-hexadecimal">RGB to hexadecimal</h3>

Convert each value to a hexadecimal string, using `toString(16)`, then `padStart(2,'0')` to get a 2-digit hexadecimal value.
Combine values using `join('')`.

```js
const rgbToHex = (r, g, b) =>
  [r,g,b].map( v => v.toString(16).padStart(2,'0')).join('');
```
<h3 id="scroll-to-top">Scroll to top</h3>

Get distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.
Scroll by a fraction of the distance from top. Use `window.requestAnimationFrame()` to animate the scrolling.

```js
const scrollToTop = _ => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if(c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c/8);
  }
}
```
<h3 id="similarity-between-arrays">Similarity between arrays</h3>

Use `filter()` to remove values that are not part of `values`, determined using `includes()`.

```js
const difference = (arr, values) => arr.filter(v => values.includes(v));
```
<h3 id="sort-characters-in-string-alphabetical">Sort characters in string (alphabetical)</h3>

Split the string using `split('')`, `sort()` utilizing `localeCompare()`, recombine using `join('')`.

```js
const sortCharactersInString = str =>
  str.split('').sort( (a,b) => a.localeCompare(b) ).join('');
```
<h3 id="sum-of-array-of-numbers">Sum of array of numbers</h3>

Use `reduce()` to add each value to an accumulator, initialized with a value of `0`.

```js
const sum = arr =>
  arr.reduce( (acc , val) => acc + val, 0);
```
<h3 id="swap-values-of-two-variables">Swap values of two variables</h3>

Use array destructuring to swap values between two variables.

```js
[varA, varB] = [varB, varA];
```
<h3 id="tail-of-list">Tail of list</h3>

Return `arr.slice(1)`.

```js
const tail = arr => arr.slice(1);
```
<h3 id="unique-values-of-array">Unique values of array</h3>

Use ES6 `Set` and the `...rest` operator to discard all duplicated values.

```js
const unique = arr => [...new Set(arr)];
// unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
```
<h3 id="url-parameters">URL parameters</h3>

Use `match()` with an appropriate regular expression to get all key-value pairs, `map()` them appropriately.
Combine all key-value pairs into a single object using `Object.assign()` and the spread operator (`...`).
Pass `location.search` as the argument to apply to the current `url`.

```js
const getUrlParameters = url =>
  Object.assign(...url.match(/([^?=&]+)(=([^&]*))?/g).map(m => {[f,v] = m.split('='); return {[f]:v}}));
```
<h3 id="uuid-generator">UUID generator</h3>

Use `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.

```js
const uuid = _ =>
  ( [1e7]+-1e3+-4e3+-8e3+-1e11 ).replace( /[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
```
<h3 id="validate-number">Validate number</h3>

Use `!isNaN` in combination with `parseFloat()` to check if the argument is a number.
Use `isFinite()` to check if the number is finite.

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
```
## Credits

*Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).*

