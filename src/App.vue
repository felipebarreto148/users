<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute left temporary dark>
      <v-list>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-btn to="/adicionar" class="green--text" text>Novo Usuário</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="deep-purple darken-4" dark elevation="20">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none"> </v-app-bar-nav-icon>
      <v-toolbar-title>
        <strong>Bem vindo</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
      <v-btn icon color="green" to="adicionar">
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app color="deep-purple darken-4" dark>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>by Felipe Barreto</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import VTable from "@/components/VTable/VTable.vue";
import BackHome from "@/components/Buttons/VBackHome.vue";

export default {
  name: "App",

  components: {
    VTable,
    BackHome
  },

  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
