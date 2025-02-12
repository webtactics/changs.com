import createAuth0Client from '@auth0/auth0-spa-js';
import auth0 from './auth0.js';

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
  if (!auth0Client) {
    console.error("Auth0 client is not initialized");
    return;
export const logout = async () => {
  if (!auth0Client) {
    console.error("auth0Client is not initialized");
    return;
  }
  auth0Client.logout({
    returnTo: window.location.origin
  });
};
  auth0Client.logout({
export const isAuthenticated = async () => {
  if (!auth0Client) {
    console.error("Auth0 client is not initialized");
    return false;
  }
  return await auth0Client.isAuthenticated();
};

export const getUser = async () => {
  if (!auth0Client) {
    console.error("Auth0 client is not initialized");
    return null;
  }
  return await auth0Client.getUser();
};

export const getUser = async () => {
  return await auth0Client.getUser();
};