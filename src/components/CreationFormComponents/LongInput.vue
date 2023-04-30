<template>
  <q-input filled class="q-mb-lg" v-model="messages" />
</template>

<script>
export default {
  name: "LongInput",
  props: ["message"],
  data() {
    return {
      messages: this.message,
    };
  },
};
</script>
