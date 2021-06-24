<template>
  <v-container>
    <h2 class="d-flex justify-center">Editar Usuário</h2>
    <v-form ref="form">
      <v-text-field
        v-model="nome"
        :counter="10"
        color="deep-purple"
        label="Nome"
        required
      ></v-text-field>
      <v-text-field
        v-model="idade"
        :counter="3"
        color="deep-purple"
        label="Idade"
        required
      ></v-text-field>
      <v-textarea
        v-model="sobre"
        :counter="200"
        color="deep-purple"
        label="Sobre"
        required
        auto-grow
        rows="1"
      ></v-textarea>
      <v-row>
        <v-btn color="success" width="40%" class="ma-4" @click="novoUsuario">
          Editar
        </v-btn>
        <v-btn color="warning" width="40%" class="ma-4" @click="limparCampos">
          Limpar
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: "FormEditar",
  computed: {
    nome() {
      return this.$store.getters.getUsuario.nome;
    },
    idade() {
      return this.$store.getters.getUsuario.idade;
    },
    sobre() {
      return this.$store.getters.getUsuario.sobre;
    },
  },
  methods: {
    editarUsuario() {
      let usuario = {
        nome: this.nome(),
        idade: this.idade(),
        sobre: this.sobre(),
      };
      this.$store.dispatch("novoUsuario", usuario);
      this.limparCampos();
    },
    limparCampos() {
      this.nome = "";
      this.idade = "";
      this.sobre = "";
    },
  },
};
</script>
<style lang="">
</style>