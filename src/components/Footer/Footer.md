
```js
import {useThemeContext} from './UseThemeContext.js';
<div style={{position: "relative", height: "100px"}}>
  <Footer theme={{...useThemeContext, screenWidth: "600px"}}/>
</div>

```