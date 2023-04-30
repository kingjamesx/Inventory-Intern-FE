<template>
  <div>
    <div class="q-gutter-sm">
      <q-editor
        v-model="editor"
        :definitions="{
          bold: { icon: B, tip: 'My bold tooltip' },
        }"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      editor: "Your text goes here",
    };
  },
};
</script>
