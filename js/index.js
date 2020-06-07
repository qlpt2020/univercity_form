scrollTop('js-button', 500);
function scrollTop(elem,duration) {
  let target = document.getElementById(elem);
  target.addEventListener('click', function() {
  let currentY = window.pageYOffset; 
  let step = duration/currentY > 1 ? 10 : 100;
  let timeStep = duration/currentY * step;
  let intervalID = setInterval(scrollUp, timeStep);
function scrollUp(){
  currentY = window.pageYOffset;
  if(currentY === 0) {
    clearInterval(intervalID);
  } else {
    scrollBy( 0, -step );
  }
  }
  });
}


function nextField(i, n, m) {
  if (i.value.length >= m) {
    i.form.elements[n].focus();
  }
}