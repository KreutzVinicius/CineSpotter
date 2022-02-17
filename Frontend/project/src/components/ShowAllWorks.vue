<template>
  <div class="ShowAllWorks">
    <ul>
      <li v-for="work in works" :key="work.id">
        <h1>{{ work.name }}</h1>
        <img class="cover" v-bind:src="work.cover" />
        {{ work.synopsis }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "ShowAllWorks",
  el: "#ShowAllWorks",
  components: {},
  data() {
    return {
      works: [],
    };
  },
  mounted() {
    api.get("/works/").then((response) => (this.works = response.data));
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
  width: 100%;
  height: auto;
}
</style>
