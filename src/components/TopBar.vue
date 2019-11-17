<template>
  <v-app-bar app color="primary" dark clipped-left fixed>
    <v-btn icon v-if="!isMobile && isDrawerOpened" @click.stop="toggleDrawer">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <v-app-bar-nav-icon
      v-if="isMobile || !isDrawerOpened"
      @click.stop="toggleDrawer"
    />
    <v-text-field
      single-line
      dense
      hide-details
      prepend-icon="mode_edit"
      v-model="text"
    />
    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item :href="gifURL" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-open-in-new</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Open generated icon in new window
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          href="https://github.com/bgpat/scroll-icon-generator"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>mdi-github-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            View on GitHub
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

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
    ...mapState(['gif', 'drawer']),
    ...mapGetters(['isMobile', 'isDrawerOpened', 'gifURL']),
  },
  methods: mapActions(['toggleDrawer']),
};
</script>
