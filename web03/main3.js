$(function(){

    $("nav>ul>li").on("click", function(){

        $(this).addClass("on").siblings().removeClass("on");
        
        
        
    });

    $("#mopen").on("click", function(){

        $("nav").toggleClass("on");
        $(this).toggleClass("on");



    });









})