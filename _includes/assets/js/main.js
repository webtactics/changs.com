import { initAuth, login, logout, isAuthenticated, getUser } from './auth.js';

// Initialize Auth0 when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  await initAuth();
  
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const userProfile = document.getElementById('userProfile');
  
  const updateUI = async () => {
    const authenticated = await isAuthenticated();
    
    loginBtn.style.display = authenticated ? 'none' : 'block';
    logoutBtn.style.display = authenticated ? 'block' : 'none';
    
    if (authenticated) {
      const user = await getUser();
      userProfile.innerHTML = `
        <img src="${user.picture}" alt="${user.name}" />
        <p>Welcome, ${user.name}</p>
      `;
    } else {
      userProfile.innerHTML = '';
    }
  };
  
  loginBtn.addEventListener('click', login);
  logoutBtn.addEventListener('click', logout);
  
  await updateUI();
});