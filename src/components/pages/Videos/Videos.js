import { ref, reactive, onMounted, onUnmounted, nextTick } from "vue";

export default function videosLogic() {
  const videos = [
    { id: "ij8A73rEoaM", titulo: "PVTA POLICIA (VIDEOCLIP) - GAYOLA" },
    { id: "npum7ZPXTYM", titulo: "ATV - GAYOLA (VIDEOLYRICS)" },
    { id: "SAU3yBZLEB4", titulo: "LA LLORONA (VIDEOCLIP) - GAYOLA" },
    { id: "9Xv-neb0l3s", titulo: "UNA VEZ MÁS (VIDEOCLIP) - GAYOLA" },
    { id: "YQQQZDJejmg", titulo: "EN LAS TRINCHERAS (VIDEOLYRIC) - Gayola" },
    { id: "wRHWZDAPmjo", titulo: "MENDIGO (VIDEOCLIP) - Gayola" },
    { id: "vkMLXJq1vPE", titulo: "PAKO EL MADERO - GAYOLA (VIDEOCLIP)" },
    { id: "SNxjRfa7yxM", titulo: "EL PUNK NO HA MUERTO (VIDEOCLIP) - Gayola" },
  ];

  const showLightbox = ref(false);
  const lightboxIndex = ref(0);
  const showIframe = reactive({});

  videos.forEach((_, i) => {
    showIframe[i] = false;
  });

  function getYoutubeThumb(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  function getYoutubeUrl(id) {
    return `https://www.youtube.com/watch?v=${id}`;
  }

  function getYoutubeEmbed(id, autoplay = false) {
    let url = `https://www.youtube.com/embed/${id}`;
    const params = [
      "fs=1",
      "rel=0",
      "modestbranding=1"
    ];

    if (autoplay) {
      params.push("autoplay=1");
    }

    url += "?" + params.join("&");

    return url;
  }

  function openLightbox(i) {
    lightboxIndex.value = i;
    showLightbox.value = true;
    nextTick(() => {
      showIframe[i] = true;
    });
  }

  function closeLightbox() {
    const prevIndex = lightboxIndex.value;
    showLightbox.value = false;
    setTimeout(() => {
      showIframe[prevIndex] = false;
    }, 300);
  }

  function shareVideo(id, event) {
    event.stopPropagation();
    const url = `https://youtu.be/${id}`;
    if (navigator.share) {
      navigator.share({ url, title: "Vídeo Gayola", text: "¡Mira este vídeo de Gayola!" });
    } else {
      navigator.clipboard.writeText(url);
    }
  }

  let handleKeydown = null;

  onMounted(() => {
    handleKeydown = (e) => {
      if (showLightbox.value && e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    if (handleKeydown) {
      window.removeEventListener("keydown", handleKeydown);
      handleKeydown = null;
    }
  });

  return {
    videos,
    showLightbox,
    lightboxIndex,
    showIframe,
    getYoutubeThumb,
    getYoutubeUrl,
    getYoutubeEmbed,
    openLightbox,
    closeLightbox,
    shareVideo,
  };
}
