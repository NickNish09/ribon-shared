# @ribon/shared
Small library used to share resources between our frontends
<hr/>



### Usage:
- Install via yarn
 ```console
yarn add https://github.com/RibonDAO/shared
```

- Import and use whatever you want!
```js
import { defaultDisplayLarge } from '@ribon/shared/styles/typography/default';
import { theme } from '@ribon/shared/styles';

export const Title = styled.h1`
      ${defaultDisplayLarge}
      color: ${({ theme }) => theme.colors.green30};
      font-weight: ${({ theme }) => theme.font.light};
`;
```

### What can we share?
- Types (entities, responses and enums)
- Styles (theme and typography)
- Hooks and services
- Small libs (NOT IMPLEMENTED YET)



### React-native problems
React-native doesn't recognize stylized typography (that one using the Gambarino font). So we need to use a different approach to load custom fonts on mobile frontends.
It will be implemented until the end of 2022.



