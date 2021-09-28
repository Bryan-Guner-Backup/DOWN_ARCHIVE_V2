const CLIENT_ID = process.env.REACT_APP_OKTA_CLIENT_ID;
const ISSUER = process.env.REACT_APP_OKTA_ORG_URL;
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: process.env.REACT_APP_OKTA_IMPLICIT_CALLBACK_URL,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: process.env.REACT_APP_OKTA_API_MESSAGES,
  },
};
