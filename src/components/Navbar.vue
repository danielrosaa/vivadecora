<template>
	<section class="nav" :style="$route.path === '/' ? 'position: absolute; background: transparent' : null" >
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
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background: $secondary;
  &__menu {
    position: absolute;
    left: 20px;
    //
  }
  &__logo {
    //
  }
}
</style>
