<template>
  <div>
    <v-text-field v-model="color" :label="label" @focus="open">
      <template v-slot:prepend>
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
  props: ['prependIcon', 'value', 'label'],
  computed: {
    color: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
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
