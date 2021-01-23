<template>
	<div class="home">
		<div class="bg-imagem-dinamica">
			<img :src="`https://image.tmdb.org/t/p/original${this.lista.poster_path}`">
		</div>
		<Navbar />
		<CardFilme :filme="lista" />
		<!-- <CardFilme
			v-for="filme in lista"
			:key="filme.id"
			:filme="filme"
			class="stack"
		/> -->
		<BotoesControle />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar"
import CardFilme from "@/components/CardFilme"
import BotoesControle from "@/components/BotoesControle"
import { mapGetters } from "vuex"
export default {
	components: {
		Navbar,
		CardFilme,
		BotoesControle,
	},
	computed: {
		...mapGetters({ access_token: "token/getToken" }),
		cardBackground() {
			return `
					background-image: url(https://image.tmdb.org/t/p/original${this.lista.poster_path});
      `
		},
	},
	data() {
		return {
			poster: "",
			lista: {},
		}
	},
	mounted() {
		this.getLista()
	},
	methods: {
		async getLista() {
			const { data } = await this.$axios.get("/list/7073183")
			this.lista = data.results[0]
			console.log(this.lista)
		},
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
</style>
