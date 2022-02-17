<template>
  <div class="ShowWork">
    <h1>{{ work.name }}</h1>
    <img class="cover" v-bind:src="work.cover" />
    {{ work.synopsis }}
    <button @click="setTags">a</button>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "ShowWork",
  el: "#ShowWork",
  components: {},
  data() {
    return {
      work: {},
    };
  },
  mounted() {
    api
      .post("/works/id", { id: "2" }) // mudar para pegar o pedido de ShowAllWorks()
      .then((response) => (this.work = response.data));
  },
  methods: {
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

      var elemento_pai = document.body;
      var titulo = document.createElement("h1");
      var texto = document.createTextNode(post);
      titulo.appendChild(texto);
      elemento_pai.appendChild(titulo);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cover {
  width: 300px;
  height: auto;
}
</style>
