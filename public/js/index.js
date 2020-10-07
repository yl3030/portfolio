$("*").each(function(){
    $(this).click(function(){
        var target = $(this).attr("data-goto-target");
        if(target!=undefined) {
            var dur = $(this).attr("data-goto-duration");
            var top = $(target).offset().top;
            $("html,body").animate({scrollTop:top},parseInt(dur));
        }
    })
});
$(window).on("mousewheel",function(){
    $("*").stop();
});

$(".classified").children("button").click(function(){
    $(".classified").children("button").removeClass("active");
    $(this).addClass("active");
    $(".port-cont").parents(".port-box").fadeOut(300);
    if($(this).hasClass("btn-all")){
        $(".port-cont").parents(".port-box").fadeIn(300);
    }else if($(this).hasClass("btn-web")){
        $(".port-cont.web").parents(".port-box").fadeIn(300);
    }else if($(this).hasClass("btn-app")){
        $(".port-cont.app").parents(".port-box").fadeIn(300);
    }else if($(this).hasClass("btn-graphic")){
        $(".port-cont.graphic").parents(".port-box").fadeIn(300);
    }
})