<template>
	<section class="controle">
		<button @click="dislike" class="btn btn--round">
			<img src="@/assets/img/n-curti.png" alt="Ícone de curtir" />
		</button>
		<button @click="pular" class="btn">Pular</button>
		<button @click="like" class="btn btn--round">
			<img src="@/assets/img/curti.png" alt="Ícone de descurtir" />
		</button>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Navbar",
  props: {
    filme: Object
  },
  computed: {
    ...mapGetters({ naoCurados: 'filmes/getNaoCurados' })
  },
	methods: {
		dislike() {
			this.setNaoCurtidos(this.$props.filme)
			this.setNaoCurados({filme: this.$props.filme, acao: 'remover'})
		},
		pular() {
			this.setNaoCurados({filme: this.$props.filme, acao: 'pular'})
			console.log("clicou pular")
		},
		like() {
			this.setCurtidos(this.$props.filme)
			this.setNaoCurados({filme: this.$props.filme, acao: 'remover'})
    },
    
    // Store Actions
    ...mapActions({
        setNaoCurados: 'filmes/setNaoCurados',
        setCurtidos: 'filmes/setCurtidos',
        setNaoCurtidos: 'filmes/setNaoCurtidos'
      }
    )
	},
}
</script>

<style lang="scss" scoped>
.controle {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>
