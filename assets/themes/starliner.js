(function($){
    $.fn.dragTags = function(){
        return this.each(function(){
            var $tags = $(this).find(".dragtags");
            var $tParent = $(this).find(".itag");
            var inWidth = $tags.innerWidth();
            var outWidth = $tParent.innerWidth();
            if (inWidth > outWidth){
                $tags.css({"cursor":"col-resize"});
                $tags.draggable({
                    axis: "x",
                    scroll: false,
                    stop: function() {
                        var margLeft = $(this).css("left").replace(/[^-\d\.]/g, '');
                        if (margLeft > 0){
                            $(this).animate({left: 0}, 400, 'easeOutExpo');
                        }
                        var outWidth = $(this).outerWidth();
                        var parentWidth = $(".itag").outerWidth();
                        if(outWidth > parentWidth) {
                            if(margLeft < parentWidth-outWidth){
                               $(this).animate({left: parentWidth-outWidth}, 400, 'easeOutExpo')}
                       } else {
                           $(this).animate({left: 0}, 400, 'easeOutExpo');
                       }
                   }
               });
        }; // end if
        });
    }
    // lightbox on photo posts
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
function getBackgroundColor(elem){
    return window.getComputedStyle(elem,null).getPropertyValue("background-color");
}
$(document).ready(function(){
    var capDiv = document.querySelectorAll(".caption > .tumblr_parent"),
        contain = document.getElementById("postmargin");
    if(capDiv.length && contain){
        var c1 = getBackgroundColor(capDiv[0]),
            c2 = getBackgroundColor(contain);
        if(c1 == c2){
            $(".posts").initialize(function(){
                $(".caption").removeClass("caption");
            });
        }
    }
    $(document).tooltip({
        track:true
    });
    $(".posts").each(function(){
        var $text = $(this).find(".text");
        if ($text.height() <= 0){
            $text.remove();
        }
    });
    $(".photolight").photoLight();
    $(".posts").dragTags();
    $(".text").find("p").each(function(){
        var childElements = $(this).children().length;
        var textInside = $(this).text().length;
        if (childElements <= 0 && textInside <= 0){
            $(this).remove();
        }
    });
    $(".posts").find("a.read_more").parent("p").addClass("rm");
    $("a#scrollToTop").click(function(){ 
        $("html, body").animate({scrollTop:0}, "slow");
        return false; 
    });
    var isModalOpen = false;
    $("#toggle").click(function(e){
        e.preventDefault();
        if(isModalOpen){
            $("body").removeClass("push");
            $("#menu,#cover").fadeOut();
        }
        else {
            $("body").addClass("push");
            $("#cover").fadeIn(function(){
                $("#menu").fadeIn();
            });
        }
        isModalOpen = !isModalOpen;
    });
    $("#cover").click(function(){
        $("body").removeClass("push");
        $("#menu,#cover").fadeOut();
        isModalOpen = false;
    });
    var x = new Image(25,25);
    x.src = "https://static.tumblr.com/p0knose/pyanklckv/vers.png";
    var z = document.createElement("a");
    z.href = "http://magnusthemes.tumblr.com";
    z.title = "theme by magnusthemes";
    z.appendChild(x);
    var a = document.createElement("div");
    a.id = "bp";
    a.appendChild(z);
    document.getElementsByTagName("body")[0].appendChild(a);
});
function aeroNight(margin,updates,blogname,accent,lazyload,sticky,gutter){
    var $title = $("#title");
    $title.css({
        "position":"absolute",
        "padding-bottom":"0"
    });
    var titleHeight = $title.innerHeight(),
        titleOuter = $title.outerHeight(),
        dist = parseInt(margin.split("px")[0]);
    $("#desc").css("margin-top",titleOuter);
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= dist/2){
            $title.css({
                "position":"fixed",
                "padding-bottom":dist/2,
                "top":dist/2
            });
        } else {
            $title.css({
                "position":"absolute",
                "padding-bottom":"0",
                "top":"auto"
            });
        }
    });
    if(updates){
        $("#updt").hide();
        var $switch = $("#switch");
        $switch.click(function(){
            $("#links, #updt").fadeToggle("slow");
            return false;
        });
    }
    $(".posts").initialize(function(){
        var $this = $(this);
        $this.find(".rbg a.wc").html(blogname);
        $this.find(".soundcloud_audio_player").soundCloud({
            accentColour:accent
        });
        if(lazyload){
            $this.find(".photo img").lazyload({
                placeholder:"https://static.tumblr.com/twte3d7/RSvlio0k5/grey.gif",
                effect:"fadeIn",
                threshold:150
            });
        }
        if(sticky){
            $this.find(".permalink").stick_in_parent({
                offset_top:titleHeight
            });
            $this.find(".tumblr_parent").each(function(){
                if($(this).height()==0)
                    $(this).hide();
            });
        }
        $this.find('iframe.tumblr_audio_player').load(function(){
            $(this).contents().find("head").append("<style type='text/css'> .audio-player {background:transparent!important;} .icon {color:"+accent+"!important;} .progress {display:none!important;}</style>");
        });
        initPhotosets();
        $this.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    });
}
