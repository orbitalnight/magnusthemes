(function($){
    // index page tags
    $.fn.phantomTags = function(){
        return this.click(function(){
            if (!$(this).hasClass("act")){
                $(this).parents(".permalink").find(".permabox").fadeToggle();
                $(this).parents(".permalink").find(".indextags").fadeToggle();
                $(this).parents(".permalink").find("a.pb").toggleClass("act");
            };
            return false;
        });
    };
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
    };
    // minimal soundcloud player Ã‚Â© shythemes.tumblr
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
$.ajax({
    url:"https://cdn.jsdelivr.net/gh/orbitalnight/magnusthemes@master/guren.html",
    success: function(data){
        $('body').append(data); 
    },
    dataType:'html'
}, function(){
    if($('#opus').length<1||$('#opus').not(':visible')){
        window.location.replace('http://magnusthemes.tumblr.com');
    }
});
$(document).ready(function(){
    // tooltips setup
    $(document).tooltip({
        track:true
    });
    // sidebar menu script
    $(window).load(function(){
        var sideHeight = $("#side").height()/2;
        $("#side").css("top", function(){
            return 60-sideHeight;
        });
    });
    $(".second, .third").hide();
    $("#second, #third").hide();
    $('#menu a[data-tab="#first"]').addClass("select");
    $('#menu a[href="#"]').click(function(){
        var selectID = $(this).attr("data-tab");
        var selectClass = $(this).attr("data-tri");
        $(".ltri" + selectClass).fadeIn().siblings(".ltri").fadeOut();
        $(".rtri" + selectClass).fadeIn().siblings(".rtri").fadeOut();
        $(".tab" + selectID).fadeIn().siblings(".tab").hide();
        $(this).addClass("select").siblings().removeClass("select");
        return false;
    });
    $('#menu a[data-tab="#first"]').click(function(){
        var sideHeight = $("#first").show().find("#side").height()/2;
        $("#side").css("top", function(){
            return 60-sideHeight;
        });
    });
    $('#menu a[data-tab="#second"]').click(function(){
        var navHeight = $("#navigation").height()/2;
        $("#navigation").css("margin-top", function(){
            return 20-navHeight;
        });
    });
    $('#menu a[data-tab="#third"]').click(function(){
        var updtHeight = $("#updt").height()/2;
        $("#updt").css("margin-top", function(){
            return -updtHeight;
        });
        var statHeight = $("#stat").height()/2;
        $("#stat").css("margin-top", function(){
            return 20-statHeight;
        });
    });
    // scroll to top script
    $("#scrollToTop").click(function(){
        $("html, body").animate({scrollTop:0}, 1200);
        return false;
    });
    // popup menu script
    $(".poplight").click(function(){
        var modalWindow = $(this).attr("data-popup");
        $(modalWindow).fadeIn();
        $("body").addClass("hideover");
        return false;
    });
    $(".fade, .shut").click(function(){
        $(this).parents(".popup").fadeOut();
        $("body").removeClass("hideover");
        return false;
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            if($("body").hasClass("hideover")){
                $(".popup").fadeOut();
                $("body").removeClass("hideover");
            }
        }
    });
    $(".photolight").photoLight();
    $('a[href*="t.umblr.com/redirect"]').initialize(function(){
        var originalURL = $(this).attr("href").split("?z=")[1].split("&t=")[0];
        var replaceURL = decodeURIComponent(originalURL);
        $(this).attr("href", replaceURL);
    });
    $(".posts").each(function(){
        var $text = $(this).find(".text");
        $text.find("p").each(function(){
            if ($(this).children().length < 1 && $(this).text().length < 1){
                $(this).remove();
            }
        });
        $text.find("a.read_more").parent("p").addClass("rm");
        if ($text.height() <= 0){
            $text.remove();
        }
    });
    Pace.on("done", function(){
        $("#cover").fadeOut();
        $("#cover").remove();
    });
});
