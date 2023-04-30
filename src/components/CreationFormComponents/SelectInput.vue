<template>
  <q-select
    filled
    v-model="selectMessages"
    @change="$emit('input', selected)"
    class="q-mb-lg"
  />
</template>

<script>
export default {
  name: "SelectInput",
  props: ["selectMessage"],

  data() {
    return {
      model: this.selectMessage,
      selected: "",
    };
  },
};
</script>
