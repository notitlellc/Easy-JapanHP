console.log("Hello JavaScript!!");

$(function() {
	$('body').fadeIn(1800); 
});//画面切り替え時のフェード効果
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});