### 字符串换位组合(可重复)

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
