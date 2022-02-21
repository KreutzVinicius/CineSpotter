<template>
  <div class="LoginClient">
    <form @submit="loginClient">
      <label for="username">username:</label><br />
      <input type="text" v-model="client.username" /><br />
      <label for="password">password:</label><br />
      <input type="password" v-model="client.password" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginClient",
  el: "#LoginClient",
  components: {},

  data() {
    return {
      client: {
        id: "",
        username: "",
        password: "",
        isLoged: false,
      },
    };
  },
  methods: {
    async loginClient() {
      var client = await this.$store.dispatch(
        "authenticateClient",
        JSON.stringify(this.client)
      );

      this.client.isLoged = true;
      this.client.id = client.id;
      this.$store.commit("updateClient", this.client);
      localStorage.setItem("username", this.client.username);
      localStorage.setItem("password", this.client.password);
      localStorage.setItem("isLoged", true);
      localStorage.setItem("id", client.id);
      console.log(this.$store.state.client);
      this.$router.push("/");
    },
  },
};
</script>
