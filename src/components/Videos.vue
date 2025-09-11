<template>
  <div class="videos-bg">
    <h2 class="videos-title">Vídeos Gayola</h2>
    <div class="videos-grid">
      <div v-for="(video, i) in videos" :key="i" class="video-item">
        <iframe
          :src="`https://www.youtube.com/embed/${video}`"
          frameborder="0"
          allowfullscreen
          class="video-frame"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
const videos = [
  "ij8A73rEoaM",
  "npum7ZPXTYM",
  "SAU3yBZLEB4",
  "9Xv-neb0l3s",
  "YQQQZDJejmg",
  "wRHWZDAPmjo",
  // Añade más IDs de vídeos
];
</script>

<style scoped>
.videos-bg {
  background: rgba(0, 0, 0, 0.85);
  padding: 2em 1em;
  border-radius: 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.videos-title {
  color: #ff99ff;
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
}
.videos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
}
.video-item {
  background: #222;
  border-radius: 0.5em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
}
.video-frame {
  width: 100%;
  height: 350px;
  border-radius: 0.3em;
}
@media (max-width: 900px) {
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1em;
  }
  .video-frame {
    height: 200px;
  }
}
</style>
