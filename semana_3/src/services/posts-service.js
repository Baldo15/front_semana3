import axios from "axios";

export function getPosts() {
  return axios
    .get("https://three-points.herokuapp.com/api/posts", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response.data);
}

export function login(username, password) {
  return axios
    .post("https://three-points.herokuapp.com/api/login", { username, password })
    .then((response) => response.data);
    
}
