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
$(document).ready(function(){
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
    $(".posts").fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    $("a[title]").style_my_tooltips({
        tip_follows_cursor:true,
        tip_delay_time:100,
        tip_fade_speed:350,
        attribute:"title"
    });
    $('.photo-slideshow').pxuPhotoset({
        lightbox:true,
        rounded:false,
        gutter:'4px',
        borderRadius:'0px',
        photoset:'.photo-slideshow',
        photoWrap:'.photo-data',
        photo:'.pxu-photo'
    });
    $('.posts').unnest({
        yourCaption:".text",
        newCaptionUsername:true,
        tumblrAvatars:true,
        usernameColon:false
    });
    $(".photolight").photoLight();
    if ($("#links").children().length <= 0)
        $("#links").remove();
});
