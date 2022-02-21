<template>
  <div class="ShowClientLists">
    <div class="show-list">
      <li v-for="list in lists" :key="list.id">
        <h1 style="cursor: pointer" @click="separateIds(list.idWorks)">
          {{ list.listname }}
        </h1>
        {{ list.idWorks }}
        <div v-for="work in works" :key="work.id">{{ work.name }}</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowClientLists",
  el: "#ShowClientLists",
  components: {},
  data() {
    return {
      client: {},
      lists: [],
      list: {},
      works: [],
    };
  },
  methods: {
    separateIds(idWorks) {
      var idSeparado = idWorks.split(",");
      for (let j = 0; j < idSeparado.length; j++) {
        console.log(idSeparado[j]);
      }
      this.works = this.$store.state.works;
      var listWorks = [];
      this.works.forEach((work) => {
        idSeparado.forEach((id) => {
          if (id == work.id) {
            listWorks.push(work);
          }
        });
      });
      this.works = listWorks;
    },
  },
  async mounted() {
    this.works = this.$store.state.works;

    this.client.idClient = this.$store.state.client.id;
    const lists = await this.$store.dispatch(
      "getClientLists",
      JSON.stringify(this.client)
    );
    this.lists = lists;

    // cada cliente possui 6 listas
    for (let i = 0; i < 6; i++) {
      var idSeparado = lists[i].idWorks.split(",");
      console.log(idSeparado);
      //   for (let j = 0; j < idSeparado.length; j++) {
      //     console.log(lists[i].listname);
      //     console.log(idSeparado[j]);
      //   }
    }
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
.show-list {
  display: flex;
}
</style>
