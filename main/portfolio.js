$(function(){
    
    $("#main").fullpage({
        anchors:['xm01', 'xm02', 'xm03', 'xm04', 'xm05', 'xm06', 'xm07','xm08','xm09', 'xm10'],
        afterLoad: function(origin, destination, direction){
            //console.log(destination.index);
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            if(destination.index===4) {
               $("footer").css({color:"#fff"})
            }else{
               $("footer").removeAttr("style")
            }
        },
    });
    
    $("#mopen").on("click", function(){
        $(this).toggleClass("on");
        $("#cover_nav").toggleClass("on");
    });
    
    $(".m01 .xi-pause").on("click", function(){
        $(".m01_video").trigger("pause");
    });
    
    $(".m01 .xi-play").on("click", function(){
        $(".m01_video").trigger("play");
    });
    
    $("#cover_nav .link a").on("click", function(){
        $("#cover_nav").removeClass("on");
        $("#mopen").removeClass("on");
    });
    
    
    $(".pf01 .xi-pause").on("click", function(){
        $(".pf01_video").trigger("pause");
    });
    
    $(".pf01 .xi-play").on("click", function(){
        $(".pf01_video").trigger("play");
    });
    
    $(".pf02 .xi-pause").on("click", function(){
        $(".pf02_video").trigger("pause");
    });
    
    $(".pf02 .xi-play").on("click", function(){
        $(".pf02_video").trigger("play");
    });
    
    $(".pf03 .xi-pause").on("click", function(){
        $(".pf03_video").trigger("pause");
    });
    
    $(".pf03 .xi-play").on("click", function(){
        $(".pf03_video").trigger("play");
    });

    $(".pf04 .xi-pause").on("click", function(){
        $(".pf04_video").trigger("pause");
    });
    
    $(".pf04 .xi-play").on("click", function(){
        $(".pf04_video").trigger("play");
    });

    $(".pf05 .xi-pause").on("click", function(){
        $(".pf05_video").trigger("pause");
    });
    
    $(".pf05 .xi-play").on("click", function(){
        $(".pf05_video").trigger("play");
    });
    
    $(".pf06 .xi-pause").on("click", function(){
        $(".pf06_video").trigger("pause");
    });
    
    $(".pf06 .xi-play").on("click", function(){
        $(".pf06_video").trigger("play");
    });


    
    
    $(".pt_slider").slick({
        arrows:false,
        slidesToShow: 3,
        dots:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,          }
            },
          ]
    });
    
    $(".pf08 i.xi-arrow-left").on("click", function(){
        $(".pt_slider").slick("slickPrev");
    });
    $(".pf08 i.xi-arrow-right").on("click", function(){
        $(".pt_slider").slick("slickNext");
    });
    
    
    
    
    });