<template>
	<div class="home">
		<Navbar />
		<!-- <CardFilme :filme="lista" class="stack" /> -->
		<CardFilme v-for="filme in lista" :key="filme.id" :filme="filme" class="stack" />
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
			this.lista = data.results
			console.log(this.lista)
		},
	},
}
</script>

<style lang="scss" scoped>
.home {
	height: 100%;
	box-sizing: border-box;
	background-image: $gradient;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: $gradient, url("~@/assets/img/ww.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		opacity: 0.2;
		z-index: -1;
	}
}
</style>
