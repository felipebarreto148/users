<template>
  <v-container>
    <h2 class="d-flex justify-center">Novo Usuário</h2>
    <form>
      <v-text-field
        v-model="name"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        :counter="3"
        label="Idade"
        required
      ></v-text-field>
    </form>
  </v-container>
</template>
<script>
export default {
  name: "FormCadastro",
};
</script>
<style lang="">
</style>