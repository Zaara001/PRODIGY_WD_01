window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
      header.style.backgroundColor = '#6f4e37'; // 
  } else {
      header.style.backgroundColor = 'transparent'; 
  }
});
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
      header.style.color = 'rgb(255, 229, 180)'; // 
  } else {
      header.style.color = '#000000'; 
  }
});
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
      header.style.borderBottom = '1px solid #ffffff'; // 
  } else {
      header.style.borderBottom = 'none'; 
  }
});