<template>
  <div class="ShowWork">
    <h1>{{ work.name }}</h1>
    <img class="cover" v-bind:src="work.cover" />
    <div class="synopsis">{{ work.synopsis }}</div>
    <div class="genres">{{ setTags }}</div>
    <button @click="addWorkinList({ genList })" v-if="!genList.isAdd">
      Add in General
    </button>
    <button @click="removeWorkinList({ genList })" v-else>
      Remove for General
    </button>

    <button @click="addWorkinList({ watcList })" v-if="!watcList.isAdd">
      Add in Watching
    </button>
    <button @click="removeWorkinList({ watcList })" v-else>
      Remove for Watching
    </button>

    <button @click="addWorkinList({ planList })" v-if="!planList.isAdd">
      Add in Plan to Watch
    </button>
    <button @click="removeWorkinList({ planList })" v-else>
      Remove for Plan to Watch
    </button>

    <button @click="addWorkinList({ dropList })" v-if="!dropList.isAdd">
      Add in Dropped
    </button>
    <button @click="removeWorkinList({ dropList })" v-else>
      Remove for Dropped
    </button>

    <button @click="addWorkinList({ compList })" v-if="!compList.isAdd">
      Add in Completed
    </button>
    <button @click="removeWorkinList({ compList })" v-else>
      Remove for Completed
    </button>

    <button @click="addWorkinList({ holdList })" v-if="!holdList.isAdd">
      Add in On Hold
    </button>
    <button @click="removeWorkinList({ holdList })" v-else>
      Remove for On Hold
    </button>

    <div class="rating">
      Nota: {{ getRate }} / 10
      <div v-if="!isAvaliated">
        <input type="text" v-model="rateValue" />
        <button @click="evaluateWork">Avaliar</button>
      </div>
      <p v-else>Avaliado!</p>
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
      client: {},
      lists: [],

      genList: {},
      watcList: {},
      planList: {},
      dropList: {},
      compList: {},
      holdList: {},

      rateValue: "",
    };
  },
  async mounted() {
    this.work = this.$store.state.work;
    this.rate = this.$store.state.rate;
    this.client = this.$store.state.client;

    this.client.idClient = this.$store.state.client.id;
    const lists = await this.$store.dispatch(
      "getClientLists",
      JSON.stringify(this.client)
    );
    this.lists = lists;

    //6 listas
    for (let i = 0; i < 6; i++) {
      var idSeparado = lists[i].idWorks.split(",");
      for (let j = 0; j < idSeparado.length; j++) {
        if (lists[i].listname == "General") {
          this.genList.idWorks = lists[i].idWorks;
          this.genList.name = lists[i].listname;
        }
        if (lists[i].listname == "Watching") {
          this.watcList.idWorks = lists[i].idWorks;
          this.watcList.name = lists[i].listname;
        }
        if (lists[i].listname == "Plan to watch") {
          this.planList.idWorks = lists[i].idWorks;
          this.planList.name = lists[i].listname;
        }
        if (lists[i].listname == "Dropped") {
          this.dropList.idWorks = lists[i].idWorks;
          this.dropList.name = lists[i].listname;
        }
        if (lists[i].listname == "Completed") {
          this.compList.idWorks = lists[i].idWorks;
          this.compList.name = lists[i].listname;
        }
        if (lists[i].listname == "On Hold") {
          this.holdList.idWorks = lists[i].idWorks;
          this.holdList.name = lists[i].listname;
        }
      }
    }
    this.works = this.$store.state.works;

    for (let i = 0; i < 6; i++) {
      idSeparado = lists[i].idWorks.split(",");
      idSeparado.forEach((id) => {
        if (id == this.work.id) {
          if (lists[i].listname == "General") {
            this.genList.isAdd = true;
          }
          if (lists[i].listname == "Watching") {
            this.watcList.isAdd = true;
          }
          if (lists[i].listname == "Plan to watch") {
            this.planList.isAdd = true;
          }
          if (lists[i].listname == "Dropped") {
            this.dropList.isAdd = true;
          }
          if (lists[i].listname == "Completed") {
            this.compList.isAdd = true;
          }
          if (lists[i].listname == "On Hold") {
            this.holdList.isAdd = true;
          }
        }
      });
    }
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
    isAvaliated() {
      const ids = String(this.rate.avaliatedBy).split(",");
      for (let i = 0; i < ids.length; i++) {
        if (ids[i] == this.client.id) {
          return true;
        }
      }
      return false;
    },
    getRate() {
      if (this.rate.numRates > 0) {
        return this.rate.rate / this.rate.numRates;
      } else {
        return this.rate.rate;
      }
    },
  },
  methods: {
    async addWorkinList(listaux) {
      var name;
      if (listaux.genList) {
        name = listaux.genList.name;
      } else {
        if (listaux.watcList) {
          name = listaux.watcList.name;
        } else {
          if (listaux.planList) {
            name = listaux.planList.name;
          } else {
            if (listaux.dropList) {
              name = listaux.dropList.name;
            } else {
              if (listaux.compList) {
                name = listaux.compList.name;
              } else {
                if (listaux.holdList) {
                  name = listaux.holdList.name;
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < 6; i++) {
        if (this.lists[i].listname == name) {
          var list = {
            id: this.lists[i].id,
            idWork: this.work.id,
          };

          console.log(JSON.stringify(list));
          this.$store.dispatch("addWorksinList", JSON.stringify(list));
        }
      }
    },

    async removeWorkinList(listaux) {
      var name;
      if (listaux.genList) {
        name = listaux.genList.name;
      } else {
        if (listaux.watcList) {
          name = listaux.watcList.name;
        } else {
          if (listaux.planList) {
            name = listaux.planList.name;
          } else {
            if (listaux.dropList) {
              name = listaux.dropList.name;
            } else {
              if (listaux.compList) {
                name = listaux.compList.name;
              } else {
                if (listaux.holdList) {
                  name = listaux.holdList.name;
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < 6; i++) {
        if (this.lists[i].listname == name) {
          var list = {
            id: this.lists[i].id,
            idWork: this.work.id,
          };

          console.log(JSON.stringify(list));
          this.$store.dispatch("removeWorksinList", JSON.stringify(list));
        }
      }
    },

    evaluateWork() {
      this.rate.numRates = this.rate.numRates + 1;
      this.rate.rate = parseInt(this.rate.rate + this.rateValue);
      this.rate.avaliatedBy = this.client.id;

      console.log(JSON.stringify(this.rate));
      this.$store.dispatch("rateWork", JSON.stringify(this.rate));
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
