export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user-token'));
  
    if (user) {
      return { Authorization: 'Bearer ' + user };
    } else {
      return {};
    }
  }