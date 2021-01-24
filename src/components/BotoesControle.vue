<template>
	<section class="controle">
		<button
			@click="dislike"
			class="btn"
			:class="clientWidth < 500 ? 'btn--round' : 'btn--icon'"
			:disabled="naoCurados.length === 0"
		>
			<img
				src="@/assets/img/n-curti.png"
				alt="Ícone de curtir"
				class="btn__img btn__img--nao-curti"
			/>
			<div v-if="clientWidth > 500">Não curti!</div>
		</button>
		<button @click="pular" class="btn" :disabled="naoCurados.length === 0">
			Pular
		</button>
		<button
			@click="like"
			class="btn"
			:class="clientWidth < 500 ? 'btn--round' : 'btn--icon red'"
			:disabled="naoCurados.length === 0"
		>
			<img
				src="@/assets/img/curti.png"
				alt="Ícone de descurtir"
				class="btn__img btn__img--curti"
			/>
			<div v-if="clientWidth > 500">Curti!</div>
		</button>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
	name: "Navbar",
	props: {
		filme: Object,
	},
	computed: {
		...mapGetters({
			naoCurados: "filmes/getNaoCurados",
			clientWidth: "estados/getClientWidth",
		}),
	},
	methods: {
		dislike() {
			this.setNaoCurtidos(this.$props.filme)
			this.setNaoCurados({ filme: this.$props.filme, acao: "remover" })
		},
		pular() {
			this.setNaoCurados({ filme: this.$props.filme, acao: "pular" })
		},
		like() {
			this.setCurtidos(this.$props.filme)
			this.setNaoCurados({ filme: this.$props.filme, acao: "remover" })
		},

		// Store Actions
		...mapActions({
			setNaoCurados: "filmes/setNaoCurados",
			setCurtidos: "filmes/setCurtidos",
			setNaoCurtidos: "filmes/setNaoCurtidos",
		}),
	},
}
</script>

<style lang="scss" scoped>
.controle {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

img {
	width: 28px;
	height: 28px;
}

.red {
	color: $secondary;
}
</style>
