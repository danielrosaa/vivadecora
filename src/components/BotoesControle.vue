<template>
	<section class="controle">
		<button class="btn btn--round">
      <img src="@/assets/img/n-curti.png" alt="Ícone de curtir">
    </button>
		<button class="btn">Pular</button>
		<button class="btn btn--round">
      <img src="@/assets/img/curti.png" alt="Ícone de descurtir">
    </button>
	</section>
</template>

<script>
export default {
  name: 'Navbar'  
}
</script>

<style lang="scss" scoped>
.controle {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
