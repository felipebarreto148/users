<template>
  <v-simple-table fixed-header height="500px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Name</th>
          <th class="text-left">Idade</th>
          <th class="text-left"></th>
          <th class="text-left"></th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in usuarios" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.idade }}</td>
          <td>
            <v-btn fab x-small @click="details(item)">
              <v-icon color="green">mdi-information</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn fab x-small @click="editarUser(item)">
              <v-icon color="primary">mdi-pencil</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn fab x-small @click="deletar(index)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import router from "@/router";
export default {
  name: "VTable",
  data() {
    return {
      usuarios: this.$store.state.usuarios
    };
  },
  methods: {
    deletar(indice) {
      this.$store.dispatch("removerUsuario", indice);
    },
    editarUser(user) {
      router.push({
        name: "editar",
        params: {
          user
        }
      });
    },
    details(user){
      router.push({
        name: "detalhes",
        params: {
          user
        }
      })
    }
  }
};
</script>
<style></style>
