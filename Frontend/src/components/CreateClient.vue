<template>
  <div class="CreateClient">
    <form @submit="postClient">
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
import api from "../services/api";
export default {
  name: "CreateClient",
  el: "#CreateClient",
  components: {},

  data() {
    return {
      works: [],
    };
  },
  mounted() {},
  methods: {
    postClient: function () {
      api
        .post("/client", { username: this.username, password: this.password })
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
