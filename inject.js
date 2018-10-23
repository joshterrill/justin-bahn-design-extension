(function() {
  let value = localStorage.getItem('state');
  console.log('Value is ' + value);
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