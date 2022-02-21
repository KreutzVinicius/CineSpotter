<template>
  <div class="about">
    <ShowWork />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowWork from "@/components/ShowWork.vue";

export default {
  name: "About",
  components: {
    ShowWork,
  },
};
</script>
