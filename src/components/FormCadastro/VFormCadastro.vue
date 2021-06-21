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
        v-model="idade"
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
  data(){
    return{
      name: "",
      idade: ""
    }
  }
};
</script>
<style lang="">
</style>