
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('.back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 100);
    return false;
  });
});


