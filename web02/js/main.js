$(function(){

    $("#Wrap").fullpage({
        //sectionColor: ['#f2f2f2' , '#4BBFC3' , '#7BAABE' , 'whitesmoke' , '#000']
        navigation: true,
        afterLoad: function(orgin, destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        
        },
    });





});