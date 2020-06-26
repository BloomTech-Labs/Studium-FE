const OKTA_DOMAIN = process.env.REACT_APP_DOMAIN;
const APP_ID = process.env.REACT_APP_CLIENT_ID;
const PATH = process.env.REACT_APP_CALLBACK_PATH;

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${HOST}${PATH}`;
const SCOPES = 'openid profile email';

export const config = {
   issuer: ISSUER,
   clientId: APP_ID,
   redirectUri: REDIRECT_URI,
   scope: SCOPES.split(/\s+/),
};

