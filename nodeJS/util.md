
```javascript
const util = require('./util');
```

```javascript
// 빈값 체크
console.log(util.empty(''));
console.log(util.empty(null));
console.log(util.empty(undefined));
console.log(util.empty(' '));
console.log(util.empty('abcdef'));
true
true
true
false
false
```


```javascript
//랜덤 글자
console.log(util.randomHexString(10));
637d95afa9
```
