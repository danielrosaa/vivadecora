<template>
	<div>
		<div class="title title--black">Filmes curtidos</div>
		<div v-if="curtidos.length > 0" class="card-list">
			<CardFilme
				v-for="filme in curtidos"
				:key="filme.id"
				:filme="filme"
				:width="clientWidth > 500 ? '294px' : '145px'"
				:height="clientWidth > 500 ? '350px' : '174px'"
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
@import '@/assets/scss/LikesDislikes';
@import '@/assets/scss/desktop';
</style>
