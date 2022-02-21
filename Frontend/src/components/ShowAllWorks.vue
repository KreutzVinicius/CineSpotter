<template>
  <div class="ShowAllWorks">
    <ul>
      <li v-for="work in works" :key="work.id">
        <h1 @click="setWork(work)" style="cursor: pointer">{{ work.name }}</h1>
        <img
          style="cursor: pointer"
          class="cover"
          v-bind:src="work.cover"
          @click="setWork(work)"
        />
        {{ work.synopsis }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowAllWorks",
  el: "#ShowAllWorks",
  components: {},
  data() {
    return {
      works: [],
      selectedWork: {},
      client: {},
    };
  },
  methods: {
    async setWork(work) {
      this.$store.commit("updateWork", work);
      this.$store
        .dispatch("getWorkRate", JSON.stringify({ id: work.rateId }))
        .then(() => {
          this.$router.push("/work");
        });
    },
  },
  async mounted() {
    const works = await this.$store.dispatch("getWorks");
    this.works = works;

    this.client = this.$store.state.client;
    console.log(this.client.isLoged);
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
