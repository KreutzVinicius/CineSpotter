<template>
  <div class="SignIn">
    <CreateClient />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateClient from "@/components/CreateClient.vue";

export default {
  name: "Signin",
  components: {
    CreateClient,
  },
};
</script>
