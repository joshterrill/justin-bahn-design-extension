(function() {
  let value = localStorage.getItem('state');
  if (!value) {
    localStorage.setItem('state', 'true');
  } else {
    if (value === 'true') {
      const elements = document.querySelectorAll('*');
      for (element of elements) {
        element.style.border = '4px red solid';
      }
      localStorage.setItem('state', 'false');
    } else {
      const elements = document.querySelectorAll('*');
      for (element of elements) {
        element.style.border = 'initial';
      }
      localStorage.setItem('state', 'true');
    }
  }
	
})();