<template>
  <div>
    <div class="title title--black">Filmes curtidos</div>
    <div class="card-list">
      <CardFilme v-for="filme in curtidos" :key="filme.id" :filme="filme" height="174px" width="145px" textSize='0.7rem' class="card-filme" />
    </div>
  </div>
</template>

<script>
import CardFilme from '@/components/CardFilme'
import { mapGetters } from 'vuex'
export default {
  components: {
    CardFilme
  },
  computed: {
    ...mapGetters({ curtidos: 'filmes/getCurtidos' })
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-filme /deep/
  .card {
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

</style>