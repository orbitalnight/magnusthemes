(function($){
    // index page tags
    $.fn.phantomTags = function(){
        return this.click(function(){
            $(this).toggleClass("act");
            $(this).next(".indextags").fadeToggle();
            return false;
        });
    };
    // dropdown navigation
    $.fn.viktorN = function(){
        return this.click(function(){
            $(this).parents("#links").find(".drop").slideToggle();
            return false;
        });
    };
    // minimal soundcloud player Â© shythemes.tumblr
    $.fn.soundCloud = function(options){
        var settings = $.extend({
            accentColour:"#151515"
        }, options);
        var color = settings.accentColour;
        return this.each(function(){
            $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
        });
    };
}(jQuery));
$(document).ready(function(){
    $("a[title]").style_my_tooltips({
        tip_follows_cursor:true,
        tip_delay_time:100,
        tip_fade_speed:300,
        attribute:"title"
    });
    // sidebar popup
    $("#links").hide();
    $("#sctm").click(function(){
        $(this).toggleClass("open");
        $("body").toggleClass("menu");
        $("#fade").fadeToggle();
        $("#links").fadeToggle();
        return false;
    });
    $("#fade").click(function(){
        $(this).fadeOut();
        $("#links").fadeOut();
        $("#sctm").removeClass("open");
        $("body").removeClass("menu");
    });
    // pixelunion photosets
    $('.photo-slideshow').pxuPhotoset({
        lightbox:true,
        rounded:false,
        gutter:'0px',
        borderRadius:'0px',
        photoset:'.photo-slideshow',
        photoWrap:'.photo-data',
        photo:'.pxu-photo'
    });
    // lightbox for photo posts
    $('.photolight').click(function(){
        var lbArray = [];
        var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
        lbArray.push(arrayContents);
        Tumblr.Lightbox.init(lbArray,1);
        $('body').toggleClass('tumblr_lightbox_active');
        return false;
    });
    // captions
    $('.posts').unnest({ 
        yourCaption:".text",
        newCaptionUsername:true,
        originalPostCaptionUsername:true,
        tumblrAvatars:false,
        usernameColon:false
    });
    $("a.tumblr_blog").initialize(function(){
        if ($(this).attr("href") == "/"){
            var permalink = $(this).parents(".posts").find("a.src").attr("href");
            $(this).attr("href", permalink);
        }
    });
    $("p.overflow").initialize(function(){
        var $parent = $(this).parent(".tumblr_parent");
        $parent.children().not("p.overflow").remove();
    });
    // smaller font size for long quotes
    $(".quote").each(function(){
        var postLength = $.trim($(this).text()).split(" ").length;
        if (postLength >= 50){
            $(this).css("font-size","12px");
        };
    });
    // removes text post caption area for text posts without body text
    $(".posts").find(".text").each(function(){
        var textHeight = $(this).height();
        if(textHeight <= 0){
            $(this).remove();
        }
    });
    $(".posts").fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
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
