$(document).ready(function(){
    // sticky navigation
    $(window).scroll(function(){    
        var scroll = $(window).scrollTop();
        if (scroll >= $("header img").height()+70){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    // smooth scrolling on click
    $("a.slider").click(function(){
        var slideTo = $(this).attr("data-slide");
        $("html, body").animate({
            scrollTop: $(slideTo).offset().top-25
        }, 1500);
        return false;
    });
    // toggle askbox and faq
    $(".hsect").hide();
    $("#hbox").hide()
    $("#hnav").click(function(){
        $("#hbox").slideToggle(600);
        $("#htext").slideToggle(600);
        $(".hask").slideToggle(0);
        $(".hsect").slideToggle(0);
    });
});
$(function(){
	$window=$(window);
	$link=$("#scrollToTop");
	$link.click(function(){
		$("html, body").animate({scrollTop:0},"slow");
	});
	$window.scroll(function(){
		if($window.scrollTop()<=0){
			$link.fadeOut("fast");
		}else{
			$link.fadeIn("fast");
		}
	});
});
