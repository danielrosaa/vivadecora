<template>
	<div class="home">
		<Navbar />
		<Filme />
		<section class="btn">Botoes</section>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Filme from "@/components/Filme"
export default {
	components: {
		Navbar,
		Filme
	},
	data() {
		return {
			cardBackground: `
					background-image: linear-gradient(to top, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0)), url(${require('@/assets/img/ww.png')})
			` 
		}
	}
}
</script>

<style lang="scss" scoped>
.home {
	height: 100vh;
	background-image: $gradient;
	padding: 20px;
}
</style>
