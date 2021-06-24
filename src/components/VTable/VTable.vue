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
            <td >{{ index + 1 }}</td>
            <td>{{ item.nome }}</td>
            <td>{{ item.idade }}</td>
            <td>
              <v-btn fab x-small>
                <v-icon color="green">mdi-information</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn color="primary" elevation="5" fab x-small to="editar" @click="inserirIndice(index)">
                <v-icon>mdi-pencil</v-icon>
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
export default {
  name: "VTable",
  data() {
    return {
      usuarios: this.$store.state.usuarios,
    };
  },
  methods: {
    deletar(indice){
      this.$store.dispatch('removerUsuario', indice);
    },
    inserirIndice(indice){
      this.$store.dispatch('inserirIndice', indice);
    },
  },
};
</script>
<style>
</style>
