<template>
	<section class="nav">
		<div @click="$store.dispatch('estados/setDrawer', !drawer)" class="nav__menu">
			<img src="@/assets/img/menu-lateral.png" alt="Ícone do menu" />
		</div>
		<div class="nav__logo">
			<img src="@/assets/img/logo-viva-decora.png" alt="Logo da Viva Decora" />
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({ drawer: 'estados/getDrawer' })
  }  
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &__menu {
    position: absolute;
    left: 0;
  }
  &__logo {
    //
  }
}
</style>
