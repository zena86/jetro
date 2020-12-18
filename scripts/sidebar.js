$(document).ready(function(){  
    // Side-Bar
    let sidebar = $(".sidebar");
    let hederHeigth = $(".header__body").height();
    let titleHeight = $(".title__body").height();
    window.addEventListener('scroll', function() {
        let top = Math.max((hederHeigth+titleHeight)-pageYOffset, hederHeigth);
        sidebar.css({"top" : top});
    });
});
 