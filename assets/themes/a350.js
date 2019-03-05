/* dreamliner theme */
/* magnusthemes@tumblr */
(function($){
    $.fn.photoLight = function(){
        return this.click(function(){
            var lbArray = [];
            var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
            lbArray.push(arrayContents);
            Tumblr.Lightbox.init(lbArray,1);
            $('body').toggleClass('tumblr_lightbox_active');
            return false;
        });
    }
    // minimal soundcloud player © shythemes.tumblr
    $.fn.soundCloud = function(options){
        var settings = $.extend({
            accentColour:"#151515"
        }, options);
        var color = settings.accentColour;
        return this.each(function(){
            $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
        });
    }
}(jQuery));
function Dreamliner(
    IndexPage,
    TruncatePosts,
    NavControls,
    ScrollingText,
    InfScr,
    Parallax
){
    $(document).tooltip({
        track:true
    });
    initPhotosets();
    var credit = document.createElement("a");
        credit.href = "http://magnusthemes.tumblr.com";
        credit.title = "theme by magnusthemes";
    var ic = document.createElement("i");
        ic.className = "typcn typcn-code-outline";
    var cName = document.createElement("span");
        cName.setAttribute("data-hover","theme");
        cName.innerHTML = "theme";
    credit.appendChild(ic);
    credit.appendChild(cName);
	document.getElementById("links").getElementsByTagName("div")[0].appendChild(credit);
	if(IndexPage){
        $(".posts").initialize(function(){
            var $bodyText = $(this).find(".text");
            var bodyHeight = $bodyText.height();
            if (bodyHeight <= 0){
                $bodyText.css({
                    "background":"transparent", 
                    "padding":"0px"
                });
                $bodyText.parent(".container").find(".llp").css({
                    "border-bottom":"0px solid transparent"
                });
            } else if (bodyHeight > 530 && TruncatePosts){
                if($bodyText.find("a.read_more").length <= 0){
                    $bodyText.css({"height":"530px","overflow":"hidden"});
                    if(TruncatePosts == 2){
                        var newLink = document.createElement("a");
                        newLink.className = "long";
                        newLink.innerHTML = "Continue reading...";
                        newLink.href = "#";
                        var newP = document.createElement("p");
                        newP.className = "rm";
                        newP.appendChild(newLink);
                        $bodyText.append(newP);
                        $bodyText.on("click",".long",function(e){
                            $bodyText.animate({"height":bodyHeight},600);
                            $bodyText.css("overflow","visible");
                            $bodyText.find(".long").parent(".rm").remove();
                            e.preventDefault();
                        });
                    } else if (TruncatePosts == 1){
                        var permalinkURL = $(this).find(".permalinkz a.pl").attr("href");
                        
                        var newLink = document.createElement("a");
                        newLink.className = "long";
                        newLink.innerHTML = "Continue reading...";
                        newLink.href = permalinkURL;
                        var newP = document.createElement("p");
                        newP.className = "rm";
                        newP.appendChild(newLink);
                        $bodyText.append(newP);
                    }
                }
            }
        });
        $(".indextagz").hide();
        $(".ctags").click(function(){
            $(this).parents(".state").children(".indextagz").slideToggle();
            return false;
        });
        $("#scrollToTop").click(function(){
            $("html, body").animate({scrollTop:0},"slow");
            return false;
        });
        if(InfScr){
            $(".photo img").lazyload({
                placeholder:"https://static.tumblr.com/twte3d7/RSvlio0k5/grey.gif",
                effect:"fadeIn",
                threshold:150
            });
        }
	} //end ifIndexPage
    if(NavControls){
        $(".iframe-controls--desktop").initialize(function(){
            $(this).appendTo("#links");
        });
    }
    if(ScrollingText){
        $("#scroller").find(".marquee").each(function(){
            var len = $(this).innerWidth();
            var speed = len/60;
            $(this).css("animation-duration",speed+"s");
            $(this).css("-webkit-animation-duration",speed+"s");
        });
    }
    function stickyNav(){
        var scroll = $(window).scrollTop(),
            nav = $("#header").outerHeight()+$("#scroller").outerHeight();
        var scroll2 = $(window).scrollTop()+window.innerHeight,
            unsticky = $('#copy').offset().top;
        if (scroll >= nav) {
            $("#links").addClass("stick");
            $("#fix div").fadeIn(400);
            $("#footer").fadeIn();
        } else {
            $("#links").removeClass("stick");
            $("#fix div").fadeOut(400);
            $("#footer").fadeOut();
        }
        if(scroll2 >= unsticky){
            $("#footer").addClass("bottom");
            $("#footer").css("bottom", function(){
                return $("#copy").outerHeight();
            });
        } else {
            $("#footer").removeClass("bottom");
            $("#footer").css("bottom","0px");
        }
    }
    stickyNav();
    var $side = $("#sidebar"),
        topOffset = 100-parseInt($side.css("margin-top"));
    $side.stick_in_parent({
        offset_top:topOffset
    }).on("sticky_kit:stick", function(){
        $(this).parent("div").css("position","static");
    });
    var breakp = $("#scroller").innerHeight() + $("#top").innerHeight();
    $(window).load(stickyNav());
    $(window).scroll(function(){
        stickyNav();
        if(Parallax){
            if ($(window).scrollTop() > breakp){
                $("#header").css("background-position","0 "+($(window).scrollTop()-breakp)*0.5+"px");
            } else {
                $("#header").css("background-position","0 0");
            }
        }
    });
    $("#all").css("padding-bottom", function(){
        return $("#copy").innerHeight();
    });
    $("#sidebar").css("margin-bottom", function(){
        return $("#footer").outerHeight()+30;
    });
    if(location.pathname != "/") {
		$('#links a[href^="/'+location.pathname.split("/")[1]+'"]').addClass("current");
		$('#menu a[href^="/'+location.pathname.split("/")[1]+'"]').addClass("active");
	} else {
	    $('#links a[href="/"]').addClass("current");
	    $('#menu a[href="/"]').addClass("active");
	}
	if($("#user").find("img").length > 1){
	    $('#user').flickity({
            cellAlign: 'left',
            imagesLoaded:true,
            autoPlay: true,
            wrapAround:true,
            prevNextButtons: false,
            pageDots: false
        });
	}
	$("#carousel").flickity({
	    imagesLoaded:true,
	    pageDots: false,
	    contain:true
	});
}
