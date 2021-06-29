<template>
    <v-container class="d-flex justify-center">
        <main>
            <h2>{{ nome }}</h2>
            <h2>20 anos</h2>
        </main>
    </v-container>
</template>
<script>
export default {
    name: 'PageDetalhes',
    data(){
        return{
            nome: 'teste'
        };
    }
}
</script>