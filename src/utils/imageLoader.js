import { ref } from 'vue';

export function useImageLoading(initialSrc) {
  const src = ref(initialSrc);
  const isLoading = ref(true);
  const error = ref(null);

  const handleLoad = () => {
    isLoading.value = false;
    error.value = null;
  };

  const handleError = (err) => {
    isLoading.value = false;
    error.value = err;
  };

  return {
    src,
    isLoading,
    error,
    handleLoad,
    handleError
  };
}

export function addImageLoadListener(img) {
  if (!img) return;

  if (img.complete) {
    img.classList.remove('loading');
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => {
      img.classList.remove('loading');
      img.classList.add('loaded');
    });
    img.addEventListener('error', () => {
      img.classList.remove('loading');
      img.classList.add('error');
    });
  }
}
