export const imageLoadDirective = {
  mounted(el) {
    if (el.complete) {
      el.classList.remove('loading');
      el.classList.add('loaded');
    } else {
      el.addEventListener('load', () => {
        el.classList.remove('loading');
        el.classList.add('loaded');
      });
      el.addEventListener('error', () => {
        el.classList.remove('loading');
        el.classList.add('error');
      });
    }
  },
};
