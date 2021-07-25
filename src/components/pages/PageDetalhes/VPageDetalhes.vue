<template>
  <v-container>
    <main>
      <header>
        <h2>{{ nome }}</h2>
        <h2>{{ idade }} anos</h2>
      </header>
      <p>
        {{ sobre }}
      </p>
    </main>
  </v-container>
</template>
<script>
export default {
  name: "PageDetalhes",
  data() {
    return {
      nome: this.$route.params.user.nome || "",
      idade:this.$route.params.user.idade || "",
      sobre: this.$route.params.user.sobre || "",
    };
  },
};
</script>