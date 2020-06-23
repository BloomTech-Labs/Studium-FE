import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

const OktaLogin = () => { 
   const { authState, authService } = useOktaAuth();
   const login = () => authService.login('/profile');

  return (
    <div>
      <a href="https://dev-360882.okta.com/oauth2/v1/authorize?idp=0oael0y3cwL5zx7Tn4x6&client_id=0oaekug1e6udJlXUA4x6&response_type=id_token&response_mode=fragment&scope=openid profile email&redirect_uri=https://studium-app.net&state=4Oycg4JA0a
   &nonce=55QzavEtgu">LOGIN</a>
    </div>
    
  )
   
 
  //  if( authState.isPending ) { 
  //    return (
  //      <div>Loading authentication...</div>
  //    );
  //  } else if( !authState.isAuthenticated ) { 
  //    return (
  //      <div>
  //        <a onClick={login}>Login- ClickME</a>
  //      </div>
  //    );
  //  }
 };

 export default OktaLogin;