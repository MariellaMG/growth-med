document.querySelector('.header').addEventListener('mouseup', function(event) {
  event.preventDefault();
  var target = document.querySelector('.header');
  var myVar = document.querySelector('.overlay');
  var x = document.querySelector('.menu__whiteblock');

  if (x.classList.contains('.menu__whiteblock')){
    target.classList.add('hide-for-mobile');
  }
  if (target.classList.contains('open') ) {
    target.classList.remove('open');
   if(myVar.classList.contains('fade-in')){
      myVar.classList.remove('fade-in');
      myVar.classList.add('fade-out');
      if(x.classList.contains('fade-in')){
          x.classList.remove('fade-in');
          x.classList.add('fade-out');

      }

  }
}else {
    target.classList.add('open');
    myVar.classList.remove('fade-out');
    myVar.classList.add('fade-in');
    
    x.classList.remove('fade-out');
    x.classList.add('fade-in');
  }
});