<template>
  <div class="CreateClient">
    <form @submit="createClient">
      <label for="username">username:</label><br />
      <input type="text" v-model="username" /><br />
      <label for="password">password:</label><br />
      <input type="password" v-model="password" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateClient",
  el: "#CreateClient",
  components: {},

  data() {
    return {
      works: [],
      password: "",
      username: "",
    };
  },
  mounted() {},
  methods: {
    async createClient(client) {
      client = {
        username: this.username,
        password: this.password,
      };
      console.log(JSON.stringify(client));
      this.$store.dispatch("createClient", JSON.stringify(client)).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
