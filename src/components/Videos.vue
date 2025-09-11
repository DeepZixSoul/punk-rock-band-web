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
  background: rgba(20, 20, 20, 0.9);
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
  text-align: center;
}
.videos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.video-item {
  background: #222;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  transition: box-shadow 0.2s, transform 0.2s;
}
.video-item:hover {
  box-shadow: 0 0 40px #ff99ff88;
  transform: scale(1.03);
}
.video-frame {
  width: 100%;
  height: 350px;
  border-radius: 0.4em;
  box-shadow: 0 0 8px #000a;
  background: #181818;
  transition: box-shadow 0.2s;
  border: none;
}

/* Responsive */
@media (max-width: 1100px) {
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1.2em;
  }
  .video-frame {
    height: 250px;
  }
}
@media (max-width: 900px) {
  .videos-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .videos-title {
    font-size: 1.3em;
    margin-bottom: 0.5em;
  }
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1em;
    max-width: 98vw;
  }
  .video-frame {
    height: 180px;
  }
}
@media (max-width: 600px) {
  .videos-title {
    font-size: 1.1em;
    margin-bottom: 0.3em;
  }
  .video-frame {
    height: 120px;
  }
}
</style>
