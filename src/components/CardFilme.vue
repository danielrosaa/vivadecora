<template>
	<section class="filmes">
		<div
			v-if="naoCurados.length > 0 || !checaRota"
			class="card"
			:style="cardSize"
			ref="card"
		>
			<div class="card__img" :style="cardBackground" />
			<div class="card__info">
				<div :style="fontSize" class="title title--white">{{ filme.title || filme.name }}</div>
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
					<div v-if="checaRota" class="card__avaliacoes">
						({{ filme.vote_count }} avaliações)
					</div>
				</div>
				<div v-if="checaRota" class="card__sinopse">
					<div>
						{{ filme.overview }}
					</div>
					<div>
						<a @click="$store.dispatch('estados/setSinopse', true)">Ver Sinopse</a>
					</div>
				</div>
			</div>
		</div>
		<template v-if="checaRota">
			<div v-if="naoCurados.length === 0" class="card__sem-filme">
				<div class="title title--white">Sem filmes para votar</div>
				<img src="@/assets/img/video-camera-vazio.png" alt="Sem filmes votar" />
			</div>
		</template>
	</section>
</template>

<script>
import { mapGetters } from "vuex"
export default {
	name: "Filme",
	props: {
		filme: Object,
		height: String,
		width: String,
		maxWidth: String,
		textSize: String
	},
	computed: {
		...mapGetters({
			naoCurados: "filmes/getNaoCurados",
		}),
		checaRota() {
			return this.$route.path === '/'
		},
		cardBackground() {
			if (this.$props.filme) {
				return `
						background-image: linear-gradient(to top, rgba(66, 66, 66, 0.99), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original${this.$props.filme.poster_path})
				`
			} else {
				return `
						background-image: linear-gradient(to top, rgba(66, 66, 66, 0.99), rgba(0, 0, 0, 0))`
			}
		},
		cardSize() {
			return `
				width: ${this.$props.width || null };
				max-width: ${this.$props.maxWidth || null };
				height: ${this.$props.height || null };
			`
		},
		fontSize() {
			return `font-size: ${this.$props.textSize}`
		}
	}
}
</script>

<style lang="scss" scoped>
.filmes {
	transition: all;
}
.card {
	width: 100%;
	margin: 0 auto;
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
		background-position: top;
	}

	&__info {
		padding: 20px;
		z-index: 1;
		color: white;
		font-size: 0.9rem;
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
			width: 15px;
			height: 15px;
			&:not(:last-child) {
				margin-right: 5px;
			}
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
	&__sem-filme {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 3px;
		text-align: center;
		padding: 20px;

		img {
			width: 70%;
			height: auto;
			margin-top: 16px;
		}
	}
}

// .swipe-enter-active {
//   transition: all 1s ease;
// }
// .swipe-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .swipe-leave-to {
//   transform: translateY(10px);
//   opacity: 0;
// }
</style>
