<template>
  <div @mousewheel.prevent @keydown.prevent>
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  created() {
    document.title = "Nykram | Portfolio";
  },
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;700&display=swap");

a {
  text-decoration: none;
  color: inherit;
}

* {
  margin: 0;
  padding: 0;
}
</style>
