

# @semicolon/react-emotion-theme

## Install

```
yarn add @semicolon/react-emotion-theme
```


## Usage

```jsx
import React from 'react'
import { SDSThemeProvider } from '@semicolon/react-emotion-theme';

<SDSThemeProvider>
  <MyComponent />
</SDSThemeProvider>
```

## Usage `@emotion/styled`
```jsx
const Test = styled.div`
    color: ${(props)=>props.theme.colors.blue400}
    background: ${(props)=>props.theme.colors.indigo900}
`
```