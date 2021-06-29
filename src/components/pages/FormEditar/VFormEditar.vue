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
        <v-btn color="success" width="40%" class="ma-4" @click="editarUsuario">
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
import router from '@/router';
export default {
  name: "FormEditar",
  data(){
    return {
      nome: this.$store.state.usuarios[this.$store.state.indiceParaEdicao].nome,
      idade: this.$store.state.usuarios[this.$store.state.indiceParaEdicao].idade,
      sobre: this.$store.state.usuarios[this.$store.state.indiceParaEdicao].sobre,
    };
  },
  methods: {
    editarUsuario() {
      let usuario = {
        nome: this.nome,
        idade: this.idade,
        sobre: this.sobre,
      };
      this.$store.dispatch("editarUsuario", usuario);
      router.push('/')
    },
    limparCampos() {
      this.nome = "";
      this.idade = "";
      this.sobre = "";
    },
  },
};
</script>