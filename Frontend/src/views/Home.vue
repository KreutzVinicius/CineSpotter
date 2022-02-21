<template>
  <div class="home">
    <ShowAllWorks />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowAllWorks from "@/components/ShowAllWorks.vue";

export default {
  name: "Home",
  components: {
    ShowAllWorks,
  },
};
</script>

<style scoped>
.home {
  width: 25%;
}
</style>