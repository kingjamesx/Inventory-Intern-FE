// import { createStore } from "vuex";
// import axios from "axios";

// export default createStore({
//   state: {
//     products: [],
//   },
//   mutations: {
//     SET_PRODUCTS(state, products) {
//       state.products = products;
//     },
//     ADD_PRODUCT(state, product) {
//       state.products.push(product);
//     },
//   },
//   actions: {
//     async fetchProducts({ commit }) {
//       const response = await axios.get("https://my-free-food-api.com/products");
//       commit("SET_PRODUCTS", response.data);
//     },
//   },
//   getters: {
//     getProductById: (state) => (id) => {
//       return state.products.find((product) => product.id === id);
//     },
//   },
// });
