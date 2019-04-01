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
    $(document).tooltip({
        track:true
    });
    $(".posts").each(function(){
        var $text = $(this).find(".text");
        if ($text.height() <= 0)
            $text.remove();
    });
    $(".photolight").photoLight();
    $(".text").find("p").each(function(){
        var childElements = $(this).children().length;
        var textInside = $(this).text().length;
        if (childElements <= 0 && textInside <= 0){
            $(this).remove();
        }
    });
    $(".posts").find("a.read_more").parent("p").addClass("rm");
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
function del(dH){
    if(dH)
        $("#title").css("margin-bottom","19px");
    else
        $("#title").css("margin-bottom","20px");
}
function delta(accent,lazyload){
    $("#toggle").click(function(e){
        $(this).toggleClass("active");
        $("#links").slideToggle();
        setTimeout(function(){
            let dH = $('aside').innerHeight();
            del(dH%2);
        },401);
        e.preventDefault();
    });
    $(".posts").initialize(function(){
        var $this = $(this);
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
        $this.find('iframe.tumblr_audio_player').load(function(){
            $(this).contents().find("head").append("<"+"style type='text/css'"+"> .audio-player {background:transparent!important;} .icon {color:"+accent+"!important;} .progress {display:none!important;}<"+"/style"+">");
        });
        initPhotosets();
        $this.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    });
}
