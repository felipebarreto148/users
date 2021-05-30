<template>
  <v-app>
    <v-app-bar app color="purple" dark elevation="12" fixed>
      <div class="d-flex align-center">
        <h1>Bem vindo</h1>
      </div>
    </v-app-bar>

    <v-main>
      <v-container justify="center">
        <div class="d-flex flex-column align-center justify-center">
          <v-btn class="my-4" color="green" elevation="22" large dark>Novo Usuário</v-btn>
          <v-simple-table
    fixed-header
    height="300px"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Avatar
          </th>
          <th>
            Nome
          </th>
          <th>
            Idade
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in usuarios"
          :key="item.nome"
        >
          <td>{{ item.avatar }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.idade }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </div>
      </v-container>
    </v-main>

    <v-footer app color="purple" dark>
      
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
