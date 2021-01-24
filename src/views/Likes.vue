<template>
	<div>
		<div class="title title--black">Filmes curtidos</div>
		<div v-if="curtidos.length > 0" class="card-list">
			<CardFilme
				v-for="filme in curtidos"
				:key="filme.id"
				:filme="filme"
				:height="clientWidth > 321 ? '350px' : '174px'"
				:width="clientWidth > 321 ? '294px' : '145px'"
				textSize="0.7rem"
				class="card-filme"
			/>
		</div>
		<div v-else class="sem-filme">
			<img
				src="@/assets/img/video-camera-vazio.png"
				alt="Sem vídeos para mostrar"
			/>
			<div class="title title--black">Nenhum filme</div>
		</div>
		<ModalSinopse v-if="sinopse.abre" :filme="sinopse.filme" />
	</div>
</template>

<script>
import CardFilme from "@/components/CardFilme"
import ModalSinopse from "@/components/ModalSinopse"
import { mapGetters } from "vuex"
export default {
	components: {
		CardFilme,
		ModalSinopse,
	},
	computed: {
		...mapGetters({
			curtidos: "filmes/getCurtidos",
			clientWidth: "estados/getClientWidth",
			sinopse: "estados/getSinopse",
		}),
	},
}
</script>

<style lang="scss" scoped>
.card-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.card-filme /deep/ .card {
	align-items: center;
	&__info {
		padding: 5px;
	}
	&__fav {
		justify-content: center;
		margin: 5px 0;
	}
}

// Classe presente em CardFilmes
.filmes {
	margin-bottom: 10px;
	.card__fav {
		margin: 0;
	}
}

.sem-filme {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 40%;
		height: auto;
	}
	.title {
		margin-top: 48px;
	}
}

@media screen and (min-width: $breakpoint) {
	.card-list {
		display: grid;
		grid-template-columns: auto auto auto;
		margin: $v-gutter-sm 0;
	}
	.card-filme /deep/ .card {
		margin: 48px 0;
		align-items: center;
		&__info {
			padding: 20px;
			z-index: 1;
			color: white;
			font-size: 0.9rem;
		}

		&__fav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-content: center;
			margin: 16px 0;
			position: relative;
			bottom: 0;
			right: 0;
		}

		&__coracoes {
			flex: 1;
			img {
				width: 15px;
				height: 15px;
				&:not(:last-child) {
					margin-right: 5px;
				}
			}
		}

		&__avaliacoes {
			flex: 1;
		}

		&__sinopse {
			display: grid;
			grid-template-columns: auto auto auto;
			div:first-child {
				flex: 1;
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
		&__genero {
			display: none;
		}
	}
	.sem-filme {
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		img {
			width: 150px;
			height: auto;
		}
		.title {
			margin-top: 48px;
		}
	}
}
</style>
