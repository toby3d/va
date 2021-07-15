(function() {
  const className = 'js-reel';
  const reels = Array.from(document.querySelectorAll(`.${className}`));
  const toggleOverflowClass = (elem) => {
    elem.classList.toggle('js-reel_overflowing', elem.scrollWidth > elem.clientWidth);
  };

  for (let reel of reels) {
    if ('ResizeObserver' in window) {
      new ResizeObserver(entries => {
        toggleOverflowClass(entries[0].target);
      }).observe(reel);
    }

    if ('MutationObserver' in window) {
      new MutationObserver(entries => {
        toggleOverflowClass(entries[0].target);
      }).observe(reel, {childList: true});
    }
  }
})();
