(function($){
    $.fn.dragTags = function(){
        return this.each(function(){
            var $tags = $(this).find(".dragtags");
            var $tParent = $(this).find(".itag");
            var inWidth = $tags.width();
            var outWidth = $tParent.width();
            if(inWidth >= outWidth){
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
            }
            else {
                $tags.css("float","none");
            }
        });
    }
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
function Lemillion(lazyload,accentColour){
    $(".posts").initialize(function(){
        var $this = $(this);
        $this.dragTags();
        if(lazyload){
            $this.find(".photo img").lazyload({
                placeholder:"http://static.tumblr.com/twte3d7/RSvlio0k5/grey.gif",
                effect:"fadeIn",
                threshold:150
            });
        }
        $this.find(".soundcloud_audio_player").soundCloud({
            accentColour:accentColour
        });
        var $text = $this.find(".text");
        if ($text.height() <= 0)
            $text.remove();
        $text.find("p").each(function(){
            var childElements = $(this).children().length;
            var textInside = $(this).text().length;
            if (childElements <= 0 && textInside <= 0)
                $(this).remove();
        });
        $this.find("a.read_more").parent("p").addClass("rm");
        $this.find('.photo-slideshow').pxuPhotoset({
            lightbox:true,
            rounded:false,
            borderRadius:'0px',
            gutter:'4px',
            photoset:'.photo-slideshow',
            photoWrap:'.photo-data',
            photo:'.pxu-photo'
        });
	$this.find(".photolight").photoLight();
        $this.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    });
}
function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) 
        i = "0" + i;
    return i;
}
$(document).ready(function(){
    $(document).tooltip({
        track:true
    });
    $(".nav a").each(function(){
        if($(this).children("span").width() > 65)
            $(this).css("width","83px");
    });
    var x = new Image(25,25);
    x.src = "http://static.tumblr.com/p0knose/pyanklckv/vers.png";
    var z = document.createElement("a");
    z.href = "http://magnusthemes.tumblr.com";
    z.title = "theme by magnusthemes";
    z.appendChild(x);
    var a = document.createElement("div");
    a.id = "bp";
    a.appendChild(z);
    document.getElementsByTagName("body")[0].appendChild(a);
});
