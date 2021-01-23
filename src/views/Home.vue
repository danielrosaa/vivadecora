<template>
	<div class="home">
		<Navbar />
		<Filme />
		<BotoesControle />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Filme from "@/components/Filme"
import BotoesControle from "@/components/BotoesControle"
export default {
	components: {
		Navbar,
		Filme,
		BotoesControle
	}
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
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: $gradient, url('~@/assets/img/ww.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		opacity: 0.2;
		z-index: -1;
	}
}
</style>
