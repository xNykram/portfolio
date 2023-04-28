<template>
  <div class="container">
    <div class="main-container">
      <h1><span>W</span>elcome</h1>
      <div class="title-desc-container">
        My name is <span>Patryk</span>, I am Junior Python Developer passionate
        about work automation, love coding. <br />
        Working with my hands to make magic happen on the internet. <br />
        <br />
        View my projects, resume or send me an email at
        <a href="mailto:patrykladocha76@gmail.com">patrykladocha76@gmail.com</a
        >.
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
<style>
.container {
  background-color: #1e293b;
  font-family: "Inter";
  font-weight: 400;
  height: 85vh;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
}
.main-container .title-desc-container {
  text-align: left;
  color: #c1d5f6;
  font-size: 20px;
  line-height: 30px;
  width: 60%;
}

.main-container .title-desc-container a {
  background-color: #2b486a;
  color: #c1d5f6;
  border-radius: 5px;
  padding: 0.25%;
  text-decoration: none;
}

.main-container .title-desc-container span {
  color: #60a5fa;
}

.main-container h1 {
  color: #c1d5f6;
  font-size: 48px;
  width: 60%;
}

.main-container h1 span {
  color: #60a5fa;
}

.main-container h1 {
  margin-bottom: 1%;
  margin-top: 1%;
}
</style>
