const util = require('./util');



// 빈값 체크
console.log(util.empty(''));
console.log(util.empty(null));
console.log(util.empty(undefined));
console.log(util.empty(' '));
console.log(util.empty('abcdef'));



//랜덤 글자
console.log(util.randomHexString(10));
