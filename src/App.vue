<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="nome"/>
    <button @click="alteraNome">Alterar nome</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters({ nome: 'teste/getNome' })
  },
  methods: {
    ...mapActions({ setNome: 'teste/setNome' }),
    alteraNome() {
      this.setNome('Daniel Rosa')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
