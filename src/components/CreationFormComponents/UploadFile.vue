<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-file color="teal" filled v-model="model" label="Label">
        <template v-slot:append>
          <q-icon name="cloud_upload" />
          <q-icon name="delete" />
        </template>
      </q-file>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: null,
    };
  },
};
</script>
