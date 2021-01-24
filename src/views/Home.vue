<template>
	<div class="home">
		<div class="bg-imagem-dinamica">
			<img :src="`https://image.tmdb.org/t/p/original${poster}`" />
		</div>
		<div v-if="$route.path === '/'" />
		<CardFilme ref="cardFilme" :filme="naoCurados[0]" height="350px" maxWidth="294px" />
		
		<BotoesControle :filme="naoCurados[0]" />

		<ModalSinopse v-if="sinopse.abre" :filme="naoCurados[0]" />
	</div>
</template>

<script>
import CardFilme from "@/components/CardFilme"
import BotoesControle from "@/components/BotoesControle"
import ModalSinopse from "@/components/ModalSinopse"
import { mapGetters, mapActions } from "vuex"
export default {
	components: {
		CardFilme,
		BotoesControle,
		ModalSinopse
	},
	computed: {
		...mapGetters({
			naoCurados: "filmes/getNaoCurados",
			sinopse: "estados/getSinopse",
			drawer: 'estados/getDrawer'
			}),
		poster() {
			return this.naoCurados[0] ? this.naoCurados[0].poster_path : ""
		},
	},
	data() {
		return {
			animacao: true
		}
	},
	mounted() {
		this.getLista()
		this.getGeneros()
	},
	methods: {
		async getLista() {
			if (this.naoCurados.length === 0) {
				const { data } = await this.$axios.get("/list/7073183", {
					params: {
						language: 'pt-BR'
					}
				})
				this.setNaoCurados(data.results)
			}
		},
		async getGeneros() {
			const { data } = await this.$axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}`)
			this.setGeneros(data)

		},

		// Store Actions
		...mapActions({
			setNaoCurados: "filmes/setNaoCurados",
			setGeneros: "filmes/setGeneros"
		}),
	},
}
</script>

<style lang="scss" scoped>
.home {
	height: 100vh;
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: relative;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	overflow: hidden;
  background-image: $gradient;
}

.bg-imagem-dinamica {
	position: absolute;
	top: 50%;
	z-index: -1;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);

	img {
		width: auto;
		height: 100vh;
		opacity: 0.1;
	}
}

@import '@/assets/scss/desktop';

</style>
