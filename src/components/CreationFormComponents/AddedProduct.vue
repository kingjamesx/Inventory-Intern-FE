<!-- <template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const products = ref([]);
    const loading = ref(true);

    store.dispatch("fetchProducts").then(() => {
      products.value = store.state.products;
      loading.value = false;
    });

    return {
      products,
      loading,
    };
  },
};
</script> -->
