<template>
  <v-app-bar color="primary" density="comfortable" clipped-left>
    <v-btn
      icon
      v-if="!isMobile && isDrawerOpened"
      @click.stop="toggleDrawer"
    >
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <v-app-bar-nav-icon
      v-if="isMobile || !isDrawerOpened"
      @click.stop="toggleDrawer"
    />
    <v-text-field
      single-line
      density="compact"
      hide-details
      prepend-icon="mode_edit"
      v-model="text"
      class="mx-2"
    />
    <v-menu location="bottom end">
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item :href="gifURL" target="_blank">
          <template #prepend>
            <v-icon>open_in_new</v-icon>
          </template>
          <v-list-item-title>Open generated icon in new window</v-list-item-title>
        </v-list-item>
        <v-list-item
          href="https://github.com/bgpat/scroll-icon-generator"
          target="_blank"
        >
          <template #prepend>
            <v-icon>code</v-icon>
          </template>
          <v-list-item-title>View on GitHub</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    text: {
      get() {
        return this.$route.params.text;
      },
      set(v) {
        this.$store.commit('gif');
        this.$router.push(`/${encodeURIComponent(v)}`);
      },
    },
    ...mapGetters(['isMobile', 'isDrawerOpened', 'gifURL']),
  },
  methods: mapActions(['toggleDrawer']),
};
</script>
