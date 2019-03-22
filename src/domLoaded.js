'use strict';

const domLoaded = (callback) => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback, {
      capture: true,
      once: true,
      passive: true
    });
  }
}

export default domLoaded;

