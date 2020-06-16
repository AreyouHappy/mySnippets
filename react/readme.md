

- https://medium.com/@khwsc1/react%EC%97%90-%EA%B0%84%ED%8E%B8%ED%95%98%EA%B2%8C-bootstrap-4%EB%A5%BC-%EB%8B%AC%EC%95%84%EB%B3%B4%EC%9E%90-fdb646904363

bootstrap react
```
npm install --save reactstrap react-addons-transition-group react-addons-css-transition-group react react-dom
```


함수형 컴포넌트

NOTE: export const DateTime = () => ... - anonymous component 로 인식한다.

```ts
import React from 'react';

interface Props {
  date: string;
}

/**
 * 설명
 */
const DateTime = (props: Props) => {

  return <>data</>;
};

export { DateTime }
```

