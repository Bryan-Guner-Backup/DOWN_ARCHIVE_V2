import React from "react";
import "./Login.css";
import SignIn from "../../images/Sign-In-Small.png";
import { useOktaAuth } from "@okta/okta-react";
import AutoLogin from "./AutoLogin";
import { Button } from "@material-ui/core";

export default function Login() {
  const { authState, authService } = useOktaAuth();
  // console.log({ authState, authService });
  const linkedin = {
    url: "https://dev-648803.okta.com/oauth2/v1/authorize",
    idp: "0oadk2c9qgPCXavKf4x6",
    clientId: "0oadk3f256MfKqlA74x6",
    responseType: "id_token token",
    responseMode: "fragment",
    scope: "openid%20profile%20email",
    redirectUri: `${window.location.origin}`,
    state: "ANYVALUE",
    nonce: "ANYVALUE",
  };
  const {
    url,
    idp,
    clientId,
    responseType,
    responseMode,
    scope,
    redirectUri,
    state,
    nonce,
  } = linkedin;

  const finalUrl = `${url}?idp=${idp}&client_id=${clientId}&response_type=${responseType}&response_mode=${responseMode}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}&nonce=${nonce}`;

  const logout = () => {
    authService.logout("/"); // Redirect to '/' after logout
  };

  if (authState.isPending) {
    return (
      <div>
        <AutoLogin />
      </div>
    );
  }

  return authState.isAuthenticated ? (
    <Button
      className="Logout"
      variant="contained"
      color="primary"
      size="small"
      onClick={logout}
    >
      Sign Out
    </Button>
  ) : (
    <a className="LoginLink" href={finalUrl}>
      <img alt="LinkedIn Logo Login Button" src={SignIn}></img>
    </a>
  );
}
