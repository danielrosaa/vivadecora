<template>
  <div class="modal">
    <div class="modal__card">
      <div class="modal__header">
        <div class="modal__image">
          <img :src="`https://image.tmdb.org/t/p/original${filme.poster_path}`" alt="Poster do filme">
        </div>
        <div @click="$store.dispatch('estados/setSinopse', false)" class="modal__fechar">X</div>
      </div>
      <div class="modal__content">
        <div class="title title--black v-gutter-sm">{{filme.title || filme.name}}</div>
        <div class="modal__info v-gutter-sm">{{montaInfo}}</div>
        <div class="modal__avaliacao v-gutter-sm">
          <div class="modal__fav">
            <div class="modal__coracoes">
              <img
                v-for="n in 4"
                :key="n"
                src="@/assets/img/favorite.png"
                alt="Ícone de favorito"
              />
              <img src="@/assets/img/favorite_.png" alt="Ícone de favorito" style="filter: invert()" />
            </div>
            <div class="modal__avaliacoes">
              ({{ filme.vote_count }} avaliações)
            </div>
          </div>
        </div>
        <div class="modal__sinopse v-gutter-sm">{{filme.overview}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    filme: Object
  },
  computed: {
    ...mapGetters({generos: 'filmes/getGeneros' }),
    montaInfo() {
      return this.$props.filme.release_date.split('-')[0] + ' - ' + this.getGeneros() + ' FILM'
    }
  },
  mounted() {
    console.log("genres", this.generos)
    this.getGeneros()
    this.getDetails()
  },
  methods: {
    getDetails() {
      this.$axios.get(`https://api.themoviedb.org/3/movie/464052?api_key=${process.env.VUE_APP_API_KEY}&language=pt-BR`).then(response => {
        console.log('detail', response.data)
      })
    },
    getGeneros() {
      let filteredGenres = []
      this.$props.filme.genre_ids.map(genre => {
        filteredGenres.push(this.generos.genres.filter(el => el.id === genre))
      })
      return filteredGenres.map((genre) => genre[0].name).join('/')
    }
  }
  
}
</script>

<style lang="scss" scoped>
.modal {
  box-sizing: border-box;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  &__card {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 8px;
  }
  &__header {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    flex: 1;
    background-color: $secondary;
    position: relative;
  }
  &__image {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);

    img {
      border-radius: 5px;
      width: auto;
      height: 150px;
    }
  }

  &__fechar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    top: -5px;
    right: -5px;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: #666;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    flex: 4;
    padding: 24px;
    margin-top: 25%;
    color: #666;
  }

  &__fav {
    display: flex;
    flex-direction: column;
		align-content: center;
		margin: 16px 0;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    color: #999;
	}

  &__coracoes {
		img {
			width: 20px;
      height: 20px;
      &:not(:last-child) {
        margin-right: 8px;
      }
		}
  }
  
	&__info {
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
		color: #999;
  }

  &__sinopse {
    line-height: 24px;
    font-weight: 500;
  }
}
</style>