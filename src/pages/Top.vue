<template>
  <div>
    <Banner />
    <div class="main-container">
      <BurgerForm />
    </div>
  </div>
</template>

<script lang="ts">
import Banner from "../components/Banner.vue";
import BurgerForm from "../components/BurgerForm.vue";
export default {
  name: "Home",
  components: {
    Banner,
    BurgerForm,
  },
};
</script>

<style scoped>
.main-container {
  height: 1050px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
