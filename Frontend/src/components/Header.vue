<template>
  <div>
    <header class="header-container">
      <div>
        <router-link to="/"
          ><img
            src="../assets/logocompleta.png"
            alt=""
            class="logo"
            style="width: 400px; height: 60px"
        /></router-link>
      </div>

      <div class="header-items-menu">
        <!-- <form @submit="findWork">
          <input type="text" v-model="name" />
          <input type="submit" value="Submit" />
        </form> -->
        <div class="header-items-authentication" v-if="isLoged">
          <router-link to="/mylists" class="header-item-menu"
            >My Lists</router-link
          >
          <a href="" class="header-item-menu" @click="logout">Logout</a>
        </div>

        <div class="header-items-not-loged" v-else>
          <router-link to="/signin" class="header-item-menu"
            >Sign in</router-link
          >
          <router-link to="/login" class="header-item-menu">Login</router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  el: "#Header",
  components: {},
  data() {
    return {
      client: {},
      name: "",
      work: {},
    };
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.client.username = localStorage.getItem("username");
    }
    if (localStorage.getItem("password")) {
      this.client.password = localStorage.getItem("password");
    }

    if (localStorage.getItem("isLoged")) {
      this.client.isLoged = localStorage.getItem("isLoged");
    }
  },

  methods: {
    logout() {
      this.$store.state.client = {};
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("isLoged");
      localStorage.removeItem("id");
      this.client.isLoged = false;
      this.$router.push("/");
    },

    async findWork(work) {
      work = {
        name: this.name,
      };
      console.log(JSON.stringify(work));

      await this.$store.dispatch("getWorkbyName", JSON.stringify(work));
      console.log(JSON.stringify({ id: this.work.rateId }));
      await this.$store
        .dispatch("getWorkRate", JSON.stringify({ id: this.work.rateId }))
        .then(() => {
          this.$router.push("/work");
        });
    },
  },

  computed: {
    isLoged() {
      var client = this.$store.getters.getClient;
      if (client.isLoged) {
        return true;
      } else return false;
    },
  },
};
</script>

<style scoped>
* {
  background-color: rgb(7, 96, 148);
  display: block;
  text-align: center;
}

.logo {
  width: 565px;
  height: 100px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-items-menu {
  display: flex;
}

.header-item-menu {
  color: white;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  margin: 0 8px 0 8px;
  display: flex;
}
.header-items-authentication {
  display: flex;
}

.header-items-not-loged {
  display: flex;
}
</style>
