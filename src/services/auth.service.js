import axios from "axios";
const API_URL = "https://workatus.herokuapp.com/api/usuario/";

class AuthService {
  async login(username, password) {
    const res = await axios
      .post(API_URL + "check", {
        username,
        password
      });
    if (res.data.accesToken) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, role) {
    return axios
      .post(API_URL + "insert", {
        username,
        password,
        role
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();