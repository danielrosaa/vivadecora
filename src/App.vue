<template>
  <div class="app">
		<Navbar />
    <Drawer ref="drawer" class="drawer" />
    <router-view ref="view" class="view" />
  </div>
</template>
<script>
import Drawer from '@/components/Drawer'
import Navbar from '@/components/Navbar'
import { mapGetters } from 'vuex'
export default {
  components: {
    Drawer,
    Navbar
  },
  computed: {
    ...mapGetters({ drawer: 'estados/getDrawer' })
  },
  watch: {
    drawer() {
      if (this.drawer) {
        this.$refs.drawer.$el.style.animation = 'slide-in 300ms'
        this.$refs.drawer.$el.style.transform = 'translateX(0)'
      }
      else {
        this.$refs.drawer.$el.style.animation = 'slide-out 300ms'
        this.$refs.drawer.$el.style.transform = 'translateX(-100%)'
      }
    }
  },
  created() {
    window.addEventListener('resize', this.setClientWidth)
  },
  destroyed() {
    window.removeEventListener('resize')
  },
  methods: {
    setClientWidth() {
      this.$store.dispatch('estados/setClientWidth', window.innerWidth)
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.view {
  padding: 10px;
}

.drawer {
  box-sizing: border-box;
  position: absolute;
  width: 80%;
  height: 100vh;
  margin-left: 0;
  transform: translateX(-100%);
  padding-left: 24px;
  background: #333;
  z-index: 1000000;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media screen and (min-width: $breakpoint) {
  .view {
    padding: 24px 100px;
    height: 100%;
  }
}

</style>
