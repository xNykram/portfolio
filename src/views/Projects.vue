<template>
  <div class="container">
    <div class="main-container">
      <h1><span>P</span>rojects</h1>
      <div class="project-section">
        <div class="project-box">
          <div class="project-title">rhenus_bot</div>
          <div class="project-description">
            an application for discord that plays audio from a specific
            website at the user's request.<br />python, discord.py
          </div>
          <div class="project-button">
            <a href="https://github.com/xNykram/music_bot" target="_blank"
              >view</a
            >
          </div>
        </div>
        <div class="project-box">
          <div class="project-title">smite_motd</div>
          <div class="project-description">
            a web application that provides information about the Smite game.<br />python,
            django
          </div>
          <div class="project-button">
            <a href="https://github.com/xNykram/smite_motd" target="_blank"
              >view</a
            >
          </div>
        </div>
        <div class="project-box">
          <div class="project-title">smite_gender_recognition</div>
          <div class="project-description">
            a small project that classifies gender based on the avatars of the gods from the Smite game using PyTorch.
          </div>
          <div class="project-button">
            <a href="https://github.com/xNykram/smite_gender_recognition" target="_blank"
              >view</a
            >
          </div>
        </div>
        <div class="project-box">
          <div class="project-title">other</div>
          <div class="project-description">
            various scripts/apps that were made on commission.
          </div>
          <div class="project-button">
            <a href="https://github.com/xNykram?tab=repositories" target="_blank"
              >view all</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.project-title {
  color: #60a5fa;
  font-size: 22px;
  padding-bottom: 0.5%;
}
.project-description {
  color: #c1d5f6;
}
.project-button {
  color: white;
  margin-top: 0.7%;
  text-decoration: underline;
}

.project-box {
  border-left: 2px solid #60a5fa;
  padding: 12px;
  margin: 1vh;
}
.project-section {
  display: flex;
  flex-direction: column;
  width: 60%;
}
</style>
