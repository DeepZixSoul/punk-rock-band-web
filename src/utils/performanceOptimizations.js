export const preloadCriticalImages = (imagePaths = []) => {
  imagePaths.forEach(imagePath => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imagePath;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    }
  });
};
