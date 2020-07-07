import React, { useState, useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react'

const DashBoard = () => {
   const { authState, authService } = useOktaAuth();
   const [userInfo, setUserInfo] = useState(null);

   useEffect(() => {
      if (!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info
        setUserInfo(null);
        console.log('no user info')
      } else {
        authService.getUser().then((info) => {
          setUserInfo(info);
          console.log(info)
        });
      }
    }, [authState, authService]); // Update if authState changes

   return (
      <div>
         DashBoard
         { userInfo && 
           <div>
             <p>Welcome back, {userInfo.name}!</p>
           </div>
         }
      </div>
   )
}

export default DashBoard