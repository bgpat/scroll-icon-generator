<template>
  <v-card>
    <v-subheader>{{name}}</v-subheader>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['name'],
}
</script>
