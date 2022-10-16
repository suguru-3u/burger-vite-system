<template>
  <BurgerHeader />
  <RouterView />
</template>

<script lang="ts">
import BurgerHeader from "@/components/BurgerHeader.vue";
import { computed, defineComponent } from "vue";
export default {
  components: {
    BurgerHeader,
  },
};
</script>

<style scoped></style>
