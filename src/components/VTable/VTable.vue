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
          <tr v-for="(item, index) in champions" :key="item.name">
            <td >{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.idade }}</td>
            <td>
              <v-btn fab x-small>
                <v-icon color="green">mdi-information</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn color="primary" elevation="5" fab x-small to="editar">
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
      champions: [
        {
          name: "Ahri",
          idade: 18,
        },
        {
          name: "Qyiana",
          idade: 18,
        },
        {
          name: "Irelia",
          idade: 18,
        },
        {
          name: "Orn",
          idade: 18,
        },
        {
          name: "Yasuo",
          idade: 18,
        },
        {
          name: "Aphelios",
          idade: 18,
        },
        {
          name: "Akali",
          idade: 18,
        },
        {
          name: "Soraka",
          idade: 18,
        },
        {
          name: "Braum",
          idade: 18,
        },
        {
          name: "Rakan",
          idade: 18,
        },
      ],
    };
  },
  methods: {
    deletar(indice){
      this.champions.splice(indice, 1)
    }
  },
};
</script>
<style>
</style>
