<template>
  <q-page class="creation_page">
    <!-- <ActionButton /> -->
    <MainForm />
  </q-page>
</template>

<script>
import MainForm from "../components/CreationFormComponents/MainForm.vue";
// import ActionButton from "src/components/CreationFormComponents/ActionButton.vue";
import { defineComponent } from "vue";

export default {
  name: "createInventory",
  components: { MainForm },
};
</script>
<style scoped>
.creation_page {
  display: flex;
}
</style>
