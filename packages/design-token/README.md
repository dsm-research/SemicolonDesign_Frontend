

# @semicolon/design-token

## Install

```
yarn add @semicolon/design-token
```


## Usage
```jsx
import { colors } from '@semicolon/design-token';
```

```typescript
import { colors } from '@karrotmarket/design-token';

// WebView에서 사용되는 scheme 입니다. 
// 반드시 css서버에서의 link가 필요합니다.
colors.auto.scheme

// 라이트
colors.light.scheme

// 다크
colors.dark.scheme
```


```html
<link rel="stylesheet" href="https://assets-fe.xquare.app/style.css" />
```

Link가 되면 CSS 에서 color: var(--blue400) 처럼 쓸 수 있습니다.
