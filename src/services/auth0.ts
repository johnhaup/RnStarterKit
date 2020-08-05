import Auth0, { PasswordRealmResponse } from 'react-native-auth0';

export enum Auth0Config {
  // openid to indicate that the application intends to use OIDC to verify the user's identity
  // profile to get name, nickname, and picture
  // email to get email and email_verified
  // offline_access to get a refresh_token
  SCOPE = 'openid profile email offline_access',
  // Domain and client Id can be found in Auth0's dashboard under Applications > Settings
  DOMAIN = 'haupenthal.us.auth0.com',
  CLIENT_ID = 'iL72FhfQk0weI7XEc76857DmZIP61eL2',
  // API can be found in Auth0's dashboard under APIs > API Audience.  If not custom,
  // it should match this pattern: `https://${DOMAIN}/api/v2/`
  AUDIENCE = 'https://haupenthal.us.auth0.com/api/v2/',
}

const auth0 = new Auth0({
  domain: Auth0Config.DOMAIN,
  clientId: Auth0Config.CLIENT_ID,
});

export enum SocialConnection {
  GOOGLE = 'google-oauth2',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}

export const socialLogin = (
  connection: SocialConnection,
): Promise<PasswordRealmResponse> =>
  auth0.webAuth.authorize({
    connection,
    audience: Auth0Config.AUDIENCE,
    scope: Auth0Config.SCOPE,
  });

interface SendEmailResponse {
  // One type of id key is returned.  Same value.
  _id?: string;
  Id?: string;
  email: string;
  email_verified: string;
}

// You must enable "Passwordless OTP" grant type for your application
// in the Auth0 Dashboard > Applications > Settings > Advanced Settings > Grant Types
export const sendEmailCode = (email: string): Promise<SendEmailResponse> =>
  auth0.auth.passwordlessWithEmail({
    email,
    send: 'code',
  });

export const validateEmailCode = (
  email: string,
  code: string,
): Promise<PasswordRealmResponse> =>
  auth0.auth.loginWithEmail({
    email,
    code,
    audience: Auth0Config.AUDIENCE,
    scope: Auth0Config.SCOPE,
  });
