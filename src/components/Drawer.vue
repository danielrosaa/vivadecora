<template>
	<div>
		<div @click="fechaDrawer" class="fechar">X</div>
		<router-link @click.native="fechaDrawer" tag="div" to="/" class="drawer__links v-gutter-sm">
			Filmes não curados
		</router-link>
		<router-link @click.native="fechaDrawer" tag="div" to="/likes" class="drawer__links v-gutter-sm">
			Filmes curtidos
		</router-link>
		<router-link @click.native="fechaDrawer" tag="div" to="/dislikes" class="drawer__links v-gutter-sm">
			Filmes não curtidos
		</router-link>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ drawer: 'estados/getDrawer' })
  },
  methods: {
    fechaDrawer() {
      this.$store.dispatch('estados/setDrawer', !this.drawer)
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
	&__links {
		text-transform: uppercase;
		font-size: 1.4rem;
		color: #fff;
		font-weight: 500;
	}
}

.fechar {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	position: absolute;
	top: 10px;
	right: 10px;
	display: grid;
	place-items: center;
	font-size: 1.5rem;
	font-weight: 500;
	color: #fff;
}
</style>
