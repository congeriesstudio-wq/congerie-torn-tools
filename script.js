document.addEventListener('DOMContentLoaded', function () {
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (item) { observer.observe(item); });
  } else {
    reveals.forEach(function (item) { item.classList.add('visible'); });
  }

  document.querySelectorAll('details').forEach(function (detail) {
    detail.addEventListener('toggle', function () {
      if (detail.open) {
        document.querySelectorAll('details[open]').forEach(function (other) {
          if (other !== detail) other.removeAttribute('open');
        });
      }
    });
  });
});
