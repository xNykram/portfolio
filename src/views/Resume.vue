<template>
  <div class="container">
    <div class="main-container">
      <div class="resume-box">
        <h1><span>R</span>esume</h1>
        <div class="resume-main-box">
          <div class="resume-preview">
            <vue-pdf-embed :source="pdfUrl" :height="400" :width="400" :href="pdfUrl" />
            <div class="resume-background"></div>
            <a :href="pdfUrl" class="resume-button" download="Patryk_Ladocha_CV.pdf">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  data() {
    return {
      pdfUrl: process.env.BASE_URL + "CV_Patryk_Ladocha.pdf",
      source2: 'data:application/pdf;base64,<BASE64_ENCODED_PDF>',

    };
  },
  components: {
    VuePdfEmbed
  }
};
</script>
<style scoped>
.resume-box {
  display: flex;
  margin-top: 1.5%;
  flex-direction: column;
  width: 60%;
  min-height: 20%;
  justify-content: flex-start; 
  align-items: flex-start; 
}

.resume-preview {
  position: relative; 
  width: 400px; 
}

.resume-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50%; 
  left: 50%; 
  transform: translateX(-50%); 
  color: rgb(255, 255, 255);
  background-color: #2b486a;
  padding: 0.9vh 1.5vh;
}

.resume-background {
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5; 
}

.resume-min-box {
  width: 20%;
}

a {
  color: rgb(0, 0, 0);
  background-color: #1d334e;
  padding: 0.5vh 1.5vh;
  margin-top: 0.9vh;
}
</style>