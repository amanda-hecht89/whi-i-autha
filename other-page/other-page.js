// use checkAuth function to redirect is user not authenticated
import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();
// add event listener to the logout button and call logout
const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', async () => {
    await logout();
});
