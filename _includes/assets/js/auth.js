import createAuth0Client from '@auth0/auth0-spa-js';
import { auth0 } from 'auth0.js';

let auth0Client;

export const initAuth = async () => {
  auth0Client = await createAuth0Client({
    domain: auth0.domain,
    clientId: auth0.clientId,
    authorizationParams: {
      redirect_uri: auth0.redirectUri
    }
  });

  // Handle callback
  if (window.location.search.includes("code=")) {
    try {
      await auth0Client.handleRedirectCallback();
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (err) {
      console.error("Error handling redirect:", err);
    }
  }
};

export const login = async () => {
  await auth0Client.loginWithRedirect();
};

export const logout = async () => {
  auth0Client.logout({
    returnTo: window.location.origin
  });
};

export const isAuthenticated = async () => {
  return await auth0Client.isAuthenticated();
};

export const getUser = async () => {
  return await auth0Client.getUser();
};