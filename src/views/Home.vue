<template>
	<div class="home">
		<div class="bg-imagem-dinamica">
			<img :src="`https://image.tmdb.org/t/p/original${poster}`" />
		</div>
		<Navbar />
		<CardFilme ref="cardFilme" :filme="naoCurados[0]" />
		<!-- <div class="lista">
			<CardFilme v-for="filme in naoCurados" :key="filme.id" :filme="filme" class="lista__filme" />
		</div> -->
		<BotoesControle :filme="naoCurados[0]" />

		<ModalSinopse v-if="sinopse" :filme="naoCurados[0]" />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar"
import CardFilme from "@/components/CardFilme"
import BotoesControle from "@/components/BotoesControle"
import ModalSinopse from "@/components/ModalSinopse"
import { mapGetters, mapActions } from "vuex"
export default {
	components: {
		Navbar,
		CardFilme,
		BotoesControle,
		ModalSinopse
	},
	computed: {
		...mapGetters({
			naoCurados: "filmes/getNaoCurados",
			sinopse: "estados/getSinopse"
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
	},
	methods: {
		async getLista() {
			const { data } = await this.$axios.get("/list/7073183")
			this.setNaoCurados(data.results)
			console.log(data.results)
		},

		// Store Actions
		...mapActions({ setNaoCurados: "filmes/setNaoCurados" }),
	},
}
</script>

<style lang="scss" scoped>
.home {
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-image: $gradient;
	overflow-x: hidden;
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

// .lista {
// 	position: relative;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	height: 100%;
// 	&__filme {
// 		position: absolute;
// 		z-index: 1;
// 	}
// }
</style>
