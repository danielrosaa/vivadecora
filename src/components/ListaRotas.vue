<template>
  <div>
    <ul>
      <router-link tag="li" :to="route.path" v-for="route in $router.options.routes" :key="route.path">
        {{route.name}}
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  margin-top: 24px;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  li {
    text-transform: uppercase;
    color: #FFF;
    font-weight: 500;
    cursor: pointer;
    &.router-link-active.router-link-exact-active {
      border-bottom: 4px solid #FFF;
    }
  }
}
</style>