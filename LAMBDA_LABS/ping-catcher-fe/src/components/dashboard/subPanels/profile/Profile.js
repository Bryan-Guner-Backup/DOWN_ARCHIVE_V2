import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Profile = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  if (!userInfo) {
    return (
      <div>
        <p>Fetching user profile...</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginLeft: "25%", marginTop: "5%" }}>
        <h1>
          {authState.isAuthenticated && userInfo && (
            <div>
              <p>Welcome back, {userInfo.name}!</p>
            </div>
          )}
        </h1>

        <table>
          <tbody>
            {Object.entries(userInfo).map((claimEntry) => {
              const claimName = claimEntry[0];
              const claimValue = claimEntry[1];
              const claimId = `claim-${claimName}`;
              return (
                <>
                  <tr key={claimName}>
                    <td>{claimName}</td>
                    <td id={claimId}>{claimValue}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
