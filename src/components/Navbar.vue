<template>
  <nav>
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="right-panel">
      <div><router-link to="/">Home</router-link></div>
      <div><router-link to="/resume">Resume</router-link></div>
      <div><router-link to="/projects">Projects</router-link></div>
      <div><a target="_blank" href="https://github.com/xNykram"><v-icon scale="1.2" name="bi-github" /></a></div>
      <div><a target="_blank" href="https://www.linkedin.com/in/nykram/"><v-icon scale="1.2" name="bi-linkedin" /></a></div>
    </div>
  </nav>
</template>

<script lang="ts">
import {OhVueIcon} from "oh-vue-icons";
export default {
  name: "Navbar",
  components: {
    "v-icon": OhVueIcon
  }
};
</script>

<style scoped>
nav {
  height: 15vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  position: relative;
  z-index: 1;
}
.logo {
  margin: 1%;
  height: 100px;
}
.right-panel a {
  text-decoration: none;
  color: inherit;
}
.right-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: auto;
  color: #666781;
  font-weight: 500;
  font-family: "Inter";
  text-transform: uppercase;
}
.right-panel div {
  width: auto;
  margin-left: 5vh;
}
.right-panel div:hover {
  color: #c1d5f6;
}

</style>
