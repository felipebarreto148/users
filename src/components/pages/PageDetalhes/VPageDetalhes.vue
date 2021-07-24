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
      nome: "teste",
      idade: 190,
      sobre: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in sem
        laoreet turpis iaculis aliquet non nec ex. Quisque hendrerit molestie
        massa, sed eleifend sapien. Aliquam dapibus ornare leo, vitae fermentum
        lectus rutrum ac. Donec non felis eu nunc dignissim ullamcorper. Nunc
        non diam eu urna posuere lacinia. Nunc turpis tortor, sollicitudin ac
        pretium eu, fermentum sit amet nisi. Integer metus felis, posuere nec
        velit vitae, facilisis blandit libero.`,
    };
  },
};
</script>