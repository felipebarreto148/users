<template>
  <v-app>
    <v-app-bar app class="d-flex align-center" color="deep-purple darken-4" dark elevation="20">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Welcome</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary >
      <v-list >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-btn text>Início</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text>Novo Usuário</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <VTable />
    </v-main>
    <v-footer app color="deep-purple darken-4" dark> </v-footer>
  </v-app>
</template>

<script>
import VTable from "@/components/VTable/VTable.vue";
export default {
  name: "App",

  components: {
    VTable,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
