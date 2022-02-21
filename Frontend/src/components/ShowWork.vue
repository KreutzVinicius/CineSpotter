<template>
  <div class="ShowWork">
    <h1>{{ work.name }}</h1>
    <img class="cover" v-bind:src="work.cover" />
    <div class="synopsis">{{ work.synopsis }}</div>
    <div class="genres">{{ setTags }}</div>
    <div class="rating">
      Nota: {{ getRate }} / 10
      <button>Avaliar</button>
    </div>
  </div>
</template>

<script>
// import api from "../services/api";

export default {
  name: "ShowWork",
  el: "#ShowWork",
  components: {},
  props: {},
  data() {
    return {
      work: {},
      rate: {},
    };
  },
  mounted() {
    this.work = this.$store.state.work;
    this.rate = this.$store.state.rate;
  },

  computed: {
    setTags() {
      const ids = String(this.work.genreId).split(",");
      const genres = [
        "Horror",
        "Drama",
        "Comedy",
        "Action",
        "Science Fiction",
        "Thriller",
        "Adventure",
        "Romance",
        "Musical",
        "Documentary",
        "Fantasy",
        "Animation",
        "Suspense",
        "Mystery",
      ];
      var post = [];
      for (let i = 0; i < ids.length; i++) {
        //numero de generos
        for (let j = 0; j < 14; j++) {
          if (ids[i] == j) {
            post.push(genres[j]);
          }
        }
      }

      return post;
    },
    // isAvaliated: function () {
    //   const ids = String(this.rate.avaliatedBy).split(",");
    //   for (let i = 0; i < ids.length; i++) {
    //     if (ids[i] == idClient) {
    //       return true;
    //     }
    //   }
    //   return false;
    // },
    getRate() {
      if (this.rate.numRates > 0) {
        return this.rate.rate / this.rate.numRates;
      } else {
        return this.rate.rate;
      }
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.cover {
  width: 300px;
  height: auto;
}
</style>
