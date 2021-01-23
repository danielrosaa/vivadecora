<template>
	<section class="filmes">
		<div class="card">
			<div class="card__img" :style="cardBackground" />
			<div class="card__info">
				<div class="card__title">Wonder Woman</div>
				<div class="card__fav">
					<div class="card__coracoes">
						<img
							v-for="n in 4"
							:key="n"
							src="@/assets/img/favorite.png"
							alt="Ícone de favorito"
						/>
						<img src="@/assets/img/favorite_.png" alt="Ícone de favorito" />
					</div>
					<div class="card__avaliacoes">
						(120 avaliações)
					</div>
				</div>
				<div class="card__sinopse">
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
						perspiciatis voluptatibus consectetur distinctio nostrum velit sunt
						ex deleniti fuga vel eveniet, laudantium iste cupiditate, natus
						quibusdam unde ad quisquam perferendis.
					</div>
					<div>
						<a href="#">Ver Sinopse</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Filme",
	data() {
		return {
			cardBackground: `
					background-image: linear-gradient(to top, rgba(66, 66, 66, 0.99), rgba(0, 0, 0, 0)), url(${require("@/assets/img/ww.png")})
      `,
		}
	},
}
</script>

<style lang="scss" scoped>
.card {
	width: 294px;
	height: 350px;
	margin: 0 auto;
	// background: black;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	overflow: hidden;
	background-size: cover;
	font-weight: 500;

	&__img {
		position: absolute;
		width: 100%;
		height: 100%;
		filter: saturate(80%);
		background-repeat: no-repeat;
		background-size: cover;
	}

	&__info {
		padding: 20px;
		z-index: 1;
		color: white;
		font-size: 0.9rem;
	}

	&__title {
		text-transform: uppercase;
		font-size: 1.4rem;
		color: #fff;
		font-weight: 900;
	}

	&__fav {
		display: flex;
		justify-content: space-between;
		align-content: center;
		margin: 16px 0;
		color: $cardTextColor;
	}

	&__coracoes {
		img {
			width: 18px;
			height: 18px;
			margin-right: 5px;
		}
	}

	&__sinopse {
		display: flex;
		justify-content: space-between;
		color: $cardTextColor;
		div:first-child {
			flex: 2;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		div:last-child {
			flex: 1;
			text-align: right;
		}
	}
}
</style>
