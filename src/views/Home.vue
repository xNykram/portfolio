<template>

  <div class="container">
    <div class="main-container">
      <h1><span>W</span>elcome</h1>
      <div class="title-desc-container">
        My name is <span>Patryk</span>, I am a Software Developer passionate
        about work automation, love coding. <br />
        Working with my hands to make magic happen on the internet. <br />
        <br />
        View my projects, resume or send me an email at
        <a href="mailto:patrykladocha76@gmail.com">patrykladocha76@gmail.com</a
        >.
      </div>
    </div>
  </div>
  <div id="particles">
    <vue-particles color="#c1d5f6" linesColor="#c1d5f6"></vue-particles>
  </div>
</template>

<script lang="ts"></script>
<style scoped>
.container {
  position: relative;
  z-index: 1;
  height: 80vh;
}

#particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
#particles-js{
  height: 90%;
}
.main-container {
  position: relative; 
}

.title-desc-container {
  text-align: left;
  color: #c1d5f6;
  font-size: 20px;
  line-height: 30px;
  width: 60%;
}

.title-desc-container span {
  color: #60a5fa;
}

.title-desc-container a {
  background-color: #2b486a;
  color: #c1d5f6;
  border-radius: 5px;
  padding: 0.25%;
  text-decoration: none;
}
</style>