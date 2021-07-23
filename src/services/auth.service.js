
import apiGuest from '../request/auth-request'
import authHeader from './auth-header';
class AuthService {
  login(user) {
    return apiGuest
      .post('/login', user)
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('user-token', JSON.stringify(response.data.access_token));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user-token');
  }

  register(user) {
    return apiGuest.post("/register", user);
  }

  getProfile() {
    return axios.get('/profile', { headers: authHeader() });
  }
}

export default new AuthService();