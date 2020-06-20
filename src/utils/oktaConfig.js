// const OKTA_DOMAIN = process.env.DOMAIN;
// const CLIENT_ID = process.env.CLIENT_ID;
// const CALLBACK_PATH = '/implicit/callback';

// const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
// const HOST = window.location.host;
// const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;
// const SCOPES = 'openid profile email';

// export const config = {
//    issuer: ISSUER,
//    clientId: '0oaekug1e6udJlXUA4x6',
//    redirectUri: REDIRECT_URI,
//    scope: SCOPES.split(/\s+/),
// };

export const config = {
   clientId: '0oaekug1e6udJlXUA4x6',
   issuer: 'https://dev-360882.okta.com/oauth2/default',
   redirectUri: 'http://localhost:3000/implicit/callback',
   scopes: ['openid', 'profile', 'email'],
   pkce: true
 };
 
