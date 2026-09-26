<template>
  <div>
    <v-text-field v-model="color" :label="label" @focus="open">
      <template #prepend>
        <v-icon :color="color">{{ prependIcon }}</v-icon>
      </template>
    </v-text-field>
    <v-dialog v-model="dialog" width="300">
      <v-color-picker v-model="color" mode="hexa" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['prependIcon', 'modelValue', 'label'],
  emits: ['update:modelValue'],
  computed: {
    color: {
      get() {
        return this.modelValue;
      },
      set(v) {
        const value = typeof v === 'object' && v !== null ? v.hexa || v.hex : v;
        this.$emit('update:modelValue', value);
      },
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    open() {
      this.dialog = true;
    },
  },
};
</script>
