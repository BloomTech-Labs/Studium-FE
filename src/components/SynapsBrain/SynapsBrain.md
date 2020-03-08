```js
import {theme} from '../../utilities/theme.js';
import {ContainerDiv} from '../Container/ContainerDiv.js';
<ContainerDiv position="relative" width={"300px"} height="300px">
    <SynapsBrain
              zIndex={ 1 }
              position={ 'absolute' }
              backgroundColor={ theme.primaryColor }
              color={ '#164172' } opacity={ 1 }
              strokeColor={ theme.primaryColor }
              viewBox={ '225 25 400 400' }
            />
    <h2 style={{zIndex: 3, color: "white"}}>Text</h2>
</ContainerDiv>
```