<template>
  <div class="Login">
    <LoginClient />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginClient from "@/components/LoginClient.vue";

export default {
  name: "Login",
  components: {
    LoginClient,
  },
};
</script>
