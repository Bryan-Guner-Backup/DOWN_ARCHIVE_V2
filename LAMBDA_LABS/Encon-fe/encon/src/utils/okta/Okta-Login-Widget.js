//  import React, { useEffect } from 'react';
//  import * as OktaSignIn from '@okta/okta-signin-widget';
//  import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

//  import config from '../../App.Config.js';

//   export const LoginWidget = () => {
//    useEffect(() => {
   
//      const widget = new OktaSignIn({
//       /**
//        * Note: when using the Sign-In Widget for an OIDC flow, it still
//        * needs to be configured with the base URL for your Okta Org. Here
//        * we derive it from the given issuer for convenience.
//        */
//        baseUrl: config.baseUrl,
//        clientId: config.clientId,
//        redirectUri: config.redirectUri,
//        logo: '/react.svg',
//       i18n: {
//          en: {
//            'primaryauth.title': 'EnCon',
//          },
//        },
//        authParams: {
//          pkce: false,
//         issuer: config.issuer,
//          redirectUri: config.redirectUri,
//          display: 'page',
         
//          responseType: 'id_token',
//          scopes:["openid", "profile", 'address'],
         

        
//        },
//        registration: {
//          parseSchema: function(schema, onSuccess, onFailure) {
//             // handle parseSchema callback
//             onSuccess(schema);
//          },


//        },

//        features: {
//          registration: true
//        }
      
      
//      });
    
    
//     //   let idToken = widget.tokenManager.get('idToken').then(idToken => {
//     //    // If ID Token exists, output it to the console
//     //    if (idToken) {
//     //      console.log(`hi ${idToken.claims.email}!`);
//     //    // If ID Token isn't found, try to parse it from the current URL
//     //    } else if (window.location.hash) {
//     //      widget.token.parseFromUrl()
//     //      .then(idToken => {
//     //       console.log(`hi ${idToken.claims.email}!`);
//     //        // Store parsed token in Token Manager
//     //        widget.tokenManager.add('idToken', idToken);
//     //        console.log(idToken);
//     //      });
//     //    } else {
//     //      // You're not logged in, you need a sessionToken
//     //      var username = prompt('What is your username?');
//     //      var password = prompt('What is your password?');

//     //      widget.signIn({username, password})
//     //      .then(res => {
//     //        if (res.status === 'SUCCESS') {
//     //          widget.token.getWithRedirect({
//     //            sessionToken: res.sessionToken,
//     //            responseType: 'id_token'
//     //          });
//     //        }
//     //      });
//     //    }
//     //  });
        



//      widget.renderEl(
//        { el: '#sign-in-widget' },
//        () => {
        
//         /**
//           * In this flow, the success handler will not be called beacuse we redirect
//          * to the Okta org for the authentication workflow.
//           */
//        },
//       (err) => {
//          throw err;
//        },
//      );
//   }, []);

//    return (
//     <div>
//      <div id="sign-in-widget" />
//     </div>
//   );
// };
