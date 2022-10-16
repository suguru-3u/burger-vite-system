<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <img src="/img/logo.png" />
      </RouterLink>
      <nav id="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pedidos">Pedidos</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  //   setup() {},
});
</script>

<style>
.wrapper {
  max-width: 100%;
  width: 100vw;
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  width: 100%;
  display: flex;
  background: red;
}

img {
  width: 50px;
  height: 50px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav a:hover {
  color: #fff;
}
</style>
