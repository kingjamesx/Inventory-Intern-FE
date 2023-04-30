<template>
  <div class="container">
    <div class="top-bar">
      <p class="text-weight-bold q-my-md">InventoryList</p>
      <q-form class="search">
        <q-select
          outlined
          v-model="model"
          :options="options"
          label="warehouse"
          class="select-input"
        />
        <q-input
          filled
          v-model="ph"
          placeholder="Find Something"
          :dense="dense"
          class="select-input"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-form>
    </div>
    <div class="q-pa-md">
      <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Item",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Variants",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "SKU", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Available", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];
const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  setup() {
    return {
      ph: ref(""),
      dense: ref(false),
      model: ref(null),
      options: ["Jumia", "Jiji", "Konga", "AliExpress", "slot"],
      columns,
      rows,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #e5e5e5;
}

.top-bar {
  display: flex;
  margin: 0px 32px;
  justify-content: space-between;
}

.search {
  display: flex;
}

.select-input {
  width: 160px;
  margin-right: 10px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .top-bar {
    margin: 0px 15px;
    display: block;
    margin-top: -11px;
  }
  .select-input {
    width: 100%;
    margin-right: 5px;
  }
}
</style>
