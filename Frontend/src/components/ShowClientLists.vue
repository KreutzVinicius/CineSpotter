<template>
  <div class="ShowClientLists">
    <li v-for="work in lists" :key="work.id">
      <h1>{{ work.idWorks }}</h1>
      <div class="rating">
        Nota: {{ rate.rate / rate.numRates }} / 10
        <button>Avaliar</button>
      </div>
    </li>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "ShowClientLists",
  el: "#ShowClientLists",
  components: {},
  data() {
    return {
      lists: [],
      list: {},
    };
  },
  mounted() {
    api
      .get("/clients/lists")
      .then((response) => (this.lists = response.data))
      .catch((error) => {
        console.log(error);
      });

    api
      .post("/lists/id", { id: "79abef29-ecf5-44a8-9d9d-20ceb5ca678b" }) // mudar pra pegar this.lists.id
      .then((response) => (this.list = response.data))
      .catch((error) => {
        console.log(error);
      });

    api
      .post("/works/id", { id: "1" }) // mudar pra pegar this.list.idWorks
      .then((response) => (this.list = response.data))
      .catch((error) => {
        console.log(error);
      });
  },

  computed: {},
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
