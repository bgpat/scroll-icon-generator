<template>
  <v-card>
    <v-list-subheader>{{ name }}</v-list-subheader>
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
