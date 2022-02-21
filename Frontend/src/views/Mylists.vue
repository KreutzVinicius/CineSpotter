<template>
  <div class="Mylists">
    <ShowClientLists />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowClientLists from "@/components/ShowClientLists.vue";

export default {
  name: "Signin",
  components: {
    ShowClientLists,
  },
};
</script>
