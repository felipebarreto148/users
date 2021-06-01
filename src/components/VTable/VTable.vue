<template>
  <div class="container">
    <v-simple-table fixed-header height="100%">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Name</th>
            <th class="text-left">Idade</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in desserts" :key="item.name">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.idade }}</td>
            <td>
              <v-btn color="primary" elevation="5" fab small dark>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn color="red" pill small dark>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  name: "VTable",
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          idade: 18,
        },
        {
          name: "Ice cream sandwich",
          idade: 18,
        },
        {
          name: "Eclair",
          idade: 18,
        },
        {
          name: "Cupcake",
          idade: 18,
        },
        {
          name: "Gingerbread",
          idade: 18,
        },
        {
          name: "Jelly bean",
          idade: 18,
        },
        {
          name: "Lollipop",
          idade: 18,
        },
        {
          name: "Honeycomb",
          idade: 18,
        },
        {
          name: "Donut",
          idade: 18,
        },
        {
          name: "KitKat",
          idade: 18,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style>
</style>
