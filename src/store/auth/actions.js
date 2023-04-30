/*
export function someAction (context) {
}
*/

import { api } from "src/boot/axios";

// export function register ({ commit }, form) {
//   return api.post('/auth/register', {...form})
//     .then(response => {
//       api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
//       commit('login', {token: response.data.access_token, user: response})
//     })
// }
export function login({ commit }, loginData) {
  return commit("login", { loginData });
}

export async function logout({ commit }) {
  await commit("login", null);
}
