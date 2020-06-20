const OKTA_DOMAIN = process.env.DOMAIN;
const CLIENT_ID = process.env.CLIENT_ID;
const CALLBACK_PATH = '/implicit/callback';

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;
const SCOPES = 'openid profile email';

export const config = {
   issuer: ISSUER,
   clientId: CLIENT_ID,
   redirectUri: REDIRECT_URI,
   scope: SCOPES.split(/\s+/),
};

