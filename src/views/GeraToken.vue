<template>
  <div class="home">
    <button v-if="!request_token" @click="requestToken">Request token</button>
    <button v-else-if="request_token && !access_token" @click="createAcessToken">Create access token</button>
    <p v-else>Logado!</p>
    <p class="access-token">
      {{access_token}}
    </p>
      Criar lista
      <form @submit.prevent="criarLista">
        <input v-model="nomeLista" type="text" />
        <button type="submit">Criar lista</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  mounted() {
  },
  data() {
    return {
      request_token: '',
      access_token: '',
      nomeLista: ''
    }
  },
  methods: {
    ...mapActions({setToken: 'token/setToken'}),
    criarLista() {
      this.$axios.post('/list', {
        name: this.nomeLista,
        iso_639_1: 'pt-BR'
      }, {
        headers: {
          Authorization: 'Bearer ' + this.access_token
        }
      }).then(({ data }) => {
        console.log(data)
      })
    },
    async requestToken() {
      const { data } = await this.$axios.post('/auth/request_token')
      window.open(`https://www.themoviedb.org/auth/access?request_token=${data.request_token}`, '_blank')
      this.request_token = data.request_token
    },
    async createAcessToken() {
      try {
        const { data } = await this.$axios.post('/auth/access_token', {
          request_token: this.request_token
        })
        this.access_token = data.access_token
        this.setToken(this.access_token)
        this.$router.push('/')
      } catch (error) {
        if (error.response.status === 422) console.log('Error', error.response.data.errors)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.access-token {
  word-break: break-word;
}
</style>
