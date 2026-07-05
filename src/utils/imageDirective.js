const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23222'/%3E%3Ctext x='100' y='105' text-anchor='middle' fill='%23888' font-size='14' font-family='sans-serif'%3E💀%3C/text%3E%3C/svg%3E";

export const imageLoadDirective = {
  mounted(el) {
    if (el.complete && el.naturalWidth === 0) {
      el.classList.remove('loading');
      el.classList.add('error');
      el.src = PLACEHOLDER;
    } else if (el.complete) {
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
        el.src = PLACEHOLDER;
      });
    }
  },
};
