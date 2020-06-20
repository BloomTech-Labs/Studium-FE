import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

const OktaLogin = () => { 
   const { authState, authService } = useOktaAuth();
   const login = () => authService.login('/profile');
 
   if( authState.isPending ) { 
     return (
       <div>Loading authentication...</div>
     );
   } else if( !authState.isAuthenticated ) { 
     return (
       <div>
         <a onClick={login}>Login</a>
       </div>
     );
   }
 };

 export default OktaLogin;