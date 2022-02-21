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
        username: "",
        password: "",
        isLoged: false,
      },
    };
  },
  methods: {
    loginClient() {
      this.$store.dispatch("authenticateClient", JSON.stringify(this.client));
      // console.log(this.$store.state.client);
      this.$store.state.client.isLoged = true;
      this.$router.push("/");
    },
  },
};
</script>
