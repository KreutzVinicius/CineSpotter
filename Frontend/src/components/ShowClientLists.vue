<template>
  <div class="ShowClientLists">
    <div class="show-lists">
      <div>
        <h1>General</h1>
        <div v-for="work in genList" :key="work.id">
          <p @click="setWork(work)" style="cursor: pointer">
            {{ work.name }}
          </p>
        </div>
      </div>

      <div>
        <h1>Watching</h1>
        <div v-for="work in watcList" :key="work.id">
          <p @click="setWork(work)" style="cursor: pointer">
            {{ work.name }}
          </p>
        </div>
      </div>

      <div>
        <h1>Plan to Watch</h1>
        <div v-for="work in planList" :key="work.id">
          <p @click="setWork(work)" style="cursor: pointer">
            {{ work.name }}
          </p>
        </div>
      </div>

      <div>
        <h1>Dropped</h1>
        <div v-for="work in dropList" :key="work.id">
          <p @click="setWork(work)" style="cursor: pointer">
            {{ work.name }}
          </p>
        </div>
      </div>

      <div>
        <h1>Completed</h1>
        <div v-for="work in compList" :key="work.id">
          <p @click="setWork(work)" style="cursor: pointer">
            {{ work.name }}
          </p>
        </div>
      </div>

      <div>
        <h1>On Hold</h1>
        <div v-for="work in holdList" :key="work.id">
          <p @click="setWork(work)" style="cursor: pointer">
            {{ work.name }}
          </p>
        </div>
      </div>
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
      works: [],

      genList: {},
      watcList: {},
      planList: {},
      dropList: {},
      compList: {},
      holdList: {},
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
    this.client.idClient = this.$store.state.client.id;
    const lists = await this.$store.dispatch(
      "getClientLists",
      JSON.stringify(this.client)
    );
    this.lists = lists;

    var genList = [];
    var watcList = [];
    var planList = [];
    var dropList = [];
    var compList = [];
    var holdList = [];

    // cada cliente possui 6 listas
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
      this.works.forEach((work) => {
        idSeparado.forEach((id) => {
          if (id == work.id) {
            if (lists[i].listname == "General") {
              genList.push(work);
            }
            if (lists[i].listname == "Watching") {
              watcList.push(work);
            }
            if (lists[i].listname == "Plan to watch") {
              planList.push(work);
            }
            if (lists[i].listname == "Dropped") {
              dropList.push(work);
            }
            if (lists[i].listname == "Completed") {
              compList.push(work);
            }
            if (lists[i].listname == "On Hold") {
              holdList.push(work);
            }
          }
        });
      });
    }

    this.genList = genList;
    this.watcList = watcList;
    this.planList = planList;
    this.dropList = dropList;
    this.compList = compList;
    this.holdList = holdList;
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
.show-lists {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.list-content {
  display: flex;
}
.cover {
  width: 100%;
  height: auto;
}
</style>
