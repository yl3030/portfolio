$("*").each(function () {
	$(this).click(function () {
		var target = $(this).attr("data-goto-target");
		if (target != undefined) {
			var dur = $(this).attr("data-goto-duration");
			var top = $(target).offset().top;
			$("html,body").animate({ scrollTop: top }, parseInt(dur));
		}
	});
});
$(window).on("mousewheel", function () {
	$("*").stop();
});

$(".classified")
	.children("button")
	.click(function () {
		$(".classified").children("button").removeClass("active");
		$(this).addClass("active");
		$(".port-cont").parents(".port-box").fadeOut(300);
		if ($(this).hasClass("btn-all")) {
			$(".port-cont").parents(".port-box").fadeIn(300);
		} else if ($(this).hasClass("btn-web")) {
			$(".port-cont.web").parents(".port-box").fadeIn(300);
		} else if ($(this).hasClass("btn-app")) {
			$(".port-cont.app").parents(".port-box").fadeIn(300);
		} else if ($(this).hasClass("btn-graphic")) {
			$(".port-cont.graphic").parents(".port-box").fadeIn(300);
		}
	});

$(window).on("resize scroll", function () {
	var skHeightforLg_start = $(".myphoto").width() * 1.17 + 160;
	var skHeightforLg_end =
		$("header").height() +
		$(".myphoto").width() * 1.17 +
		$("#aboutme-cont").height() +
		50;
	var skHeightforMb_start =
		$(".myphoto").width() * 1.17 + $("#introduce").height() + 200;
	var skHeightforMb_end =
		$("header").height() +
		$(".myphoto").width() * 1.17 +
		$("#introduce").height() +
		$("#aboutme-cont").height() +
        110;
        var skHeightforSm_start =
		$(".myphoto").width() * 1.17 + $("#introduce").height() + $("#experience").height() + 280;
	var skHeightforSm_end =
		$("header").height() +
		$(".myphoto").width() * 1.17 +
		$("#introduce").height() +
		$("#aboutme-cont").height() +
		130;
	console.log("scrollTop:" + $(window).scrollTop());
	console.log("width:" + $(window).width());
	if ($(window).width() > 900 || $(window).width() == 900) {
		if (
			$(window).scrollTop() > skHeightforLg_start &&
			$(window).scrollTop() < skHeightforLg_end &&
			1 == 1
		) {
			$(".length-color").css("display", "block");
		} else {
			$(".length-color").css("display", "none");
		}
	} else if ($(window).width() > 768 && $(window).width() < 900) {
		if (
			$(window).scrollTop() > skHeightforMb_start &&
			$(window).scrollTop() < skHeightforMb_end &&
			1 == 1
		) {
			$(".length-color").css("display", "block");
		} else {
			$(".length-color").css("display", "none");
		}
	} else {
		if (
			$(window).scrollTop() > skHeightforSm_start &&
			$(window).scrollTop() < skHeightforSm_end &&
			1 == 1
		) {
			$(".length-color").css("display", "block");
		} else {
			$(".length-color").css("display", "none");
		}
    }
});
