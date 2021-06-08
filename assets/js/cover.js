(function() {
  const className = 'cover';
  const covers = Array.from(document.querySelectorAll(`.${className}`));
  const toggleVisibleData = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.setAttribute('data-visible', entry.isIntersecting);
    });
  };

  if ('IntersectionObserver' in window) {
    covers.forEach(t => t.setAttribute('data-observe', ''));

    const observer = new IntersectionObserver(toggleVisibleData);
    covers.forEach(t => observer.observe(t));
  }
})();
