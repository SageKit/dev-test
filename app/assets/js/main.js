$(function(){

 /* Minicart */
 function minicartMobile() {
  $('.minicart__button').off().on('click',function() {
   $(this).toggleClass('minicart__button--active');
  })
 }

 function minicartDesktop() {
  $('.minicart__button').off().on('mouseenter',function() {
   $(this).addClass('minicart__button--active');
  }).on('mouseleave', function(){
   $(this).removeClass('minicart__button--active');  
  });
 }

 mediaCheck({
  media: '(min-width: 768px)',
  entry: function() {
   minicartDesktop()
  },
  exit: function() {
   minicartMobile()
  }
 });
 
});