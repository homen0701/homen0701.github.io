$(function(){

    $(".main_slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnPocus:false,
    });

    $(".main_slider figure").eq(1).addClass("on");
    $(".main_slider").on("afterChange", function(e,s,c){
        $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");

    });

    $("#content01 .container").slick({
        arrows:false,
        dots:true,
        slidesToShow: 4,
        autoplay:true,
        centerMode:true,
        responsive: [
            {
        
            breakpoint: 768,
            settings: {
                slidesToShow:1,
            
            }
            }
        ]
    });

    var sliTem=$("#content01 figure.slick-current")
    sliTem.addClass("on");
    $("#content01 .container").on("afterChange", function(e,s,c){
        var sliTem=$("#content01 figure.slick-current");
        sliTem.addClass("on").siblings().removeClass("on");
    });

});