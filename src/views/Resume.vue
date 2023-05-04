<template>
  <div class="container">
    <div class="main-container">
      <div class="resume-box">
        <h1><span>R</span>esume</h1>
        <a :href="pdfUrl" class="resume-button" download="Patryk_Ladocha_CV.pdf"
          >Download</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      pdfUrl: process.env.BASE_URL + "CV_Patryk_Ladocha.pdf",
    };
  },
};
</script>

<style scoped>
.resume-box {
  display: flex;
  margin-top: 1.5%;
  flex-direction: column;
  width: 60%;
}
a {
  color: white;
  background-color: #1d334e;
  padding-top: 0.5vh;
  padding-left: 1.5vh;
  padding-bottom: 0.5vh;
  padding-right: 1.5vh;
  width: fit-content;
  margin-top: 0.9vh;
}
</style>
