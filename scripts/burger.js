$(document).ready(function(){   
    //Menu burger
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    }); 
});
