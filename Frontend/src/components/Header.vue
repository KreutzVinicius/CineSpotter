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
        <div v-if="client.isLoged">
          <router-link to="/mylists" class="header-item-menu"
            >My Lists</router-link
          >
          <a href="" @click="logout">Logout</a>
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
      work: {},
    };
  },
  mounted() {
    this.client = this.$store.state.client;
  },
  methods: {
    loginClient() {
      this.$router.push("/");
    },
    logout() {
      this.$store.state.client = {};
      this.$router.push("/");
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
}
.header-items-authentication {
  display: flex;
}
</style>
