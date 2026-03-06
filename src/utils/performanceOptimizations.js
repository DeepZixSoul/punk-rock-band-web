/**
 * Performance optimization utilities for Gayola Web
 * Includes image preloading and critical resource optimization
 */

/**
 * Preload critical images for faster rendering
 * @param {Array<string>} imagePaths - Array of image paths to preload
 */
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

/**
 * Defer non-critical CSS to improve FCP (First Contentful Paint)
 */
export const deferNonCriticalCSS = () => {
  if (typeof document !== 'undefined') {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(stylesheet => {
      if (!stylesheet.media) {
        stylesheet.media = 'print';
        stylesheet.onload = function() {
          this.media = 'all';
        };
      }
    });
  }
};

/**
 * Report Web Vitals for monitoring performance
 */
export const reportWebVitals = (metric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    metric.value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);
    window.gtag('event', metric.name, {
      value: metric.value,
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

/**
 * Enable aggressive image lazy loading for non-critical images
 */
export const enhanceLazyLoadingStrategy = () => {
  if (typeof document !== 'undefined' && 'IntersectionObserver' in window) {
    const imageElements = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src || entry.target.src;
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px'
    });
    
    imageElements.forEach(img => imageObserver.observe(img));
  }
};

/**
 * Optimize font loading with font-display: swap
 * Already handled in Google Fonts link with display=swap parameter
 */
export const optimizeFontLoading = () => {
  // Fonts are optimized via display=swap in the Google Fonts URL
  // No additional optimization needed at runtime
};

export default {
  preloadCriticalImages,
  deferNonCriticalCSS,
  reportWebVitals,
  enhanceLazyLoadingStrategy,
  optimizeFontLoading
};
