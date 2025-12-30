export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("fade", {
    mounted(el) {
      // état initial invisible
      el.style.opacity = "0";
      el.style.transform = "translateY(100px)";
      el.style.transition = "opacity 1s ease, transform .6s ease";

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer.observe(el);
    },
  });
});
