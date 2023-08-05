<template>
    <Navbar />
    <main>
      <router-view />
    </main>
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
html,body {
  background-color: #1e293b;
}
* {
  margin: 0;
  padding: 0;
}
h1 {
  margin-bottom: 1.5%;

}
.container {
  font-family: "Inter";
  font-weight: 400;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;

}
h1 {
  color: #c1d5f6;
  font-size: 48px;
  width: 60%;
}
h1 span {
  color: #60a5fa;
}
</style>
