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
            } // end if
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
var $grid,$container,containWidth;
function jetliner(accent,dual,margin,scrolly,footer,lazyload){
    var sideH,
        $aside = $("aside");
    if(scrolly){
        var offScr = $("aside").offset().top;
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll >= offScr)
                $("#scrollToTop").fadeIn();
            else
                $("#scrollToTop").fadeOut();
        });
        $("#scrollToTop").click(function(){
            $("html,body").animate({
                scrollTop:0
            },1200);
        });
    }
    if(footer){
        if(dual){
            var count = $("aside.bottom > div").length,
                ccwidth = $("#all").innerWidth()+margin,
                eachWidth = (ccwidth/count)-margin;
            $("aside.bottom > div").css("width",eachWidth);
        }
        else 
            $("aside.bottom > div").css("width",function(){
                return $("#postmargin").innerWidth()/2;
            });
    }
    else {
        $aside.imagesLoaded(function(){
            sideH = $aside.outerHeight();
            $("#postmargin").css("min-height",sideH+30);
        });
    }
    if(dual){
        $container = $("#postmargin");
        if(footer)
            containWidth = $container.innerWidth()/3;
        else
            containWidth = $container.innerWidth()/2;
        $grid = $container.masonry({
            itemSelector:".posts",
            columnWidth:containWidth,
            horizontalOrder:true
        });
        $container.imagesLoaded(function(){
            $grid.masonry();
            $(".posts").animate({"opacity":"1"});
            if(lazyload){
                $('.posts').each(function(){
                    $(this).find(".photo img").lazyload({
                        effect:"fadeIn",
                        load:function(){
                            $grid.masonry();
                        }
                    });
                });
            }
        });
        $grid.on("layoutComplete",function(e,items){
            var $i = $(items);
            $i.each(function(){
                var $t = $(this);
                if($t.css('top') == '0px')
                    $t.addClass("top");
            });
        });
    }
}
function airliner(elems,accent,gutter,lazyload,dual,exp){
    $(elems).initialize(function(){
        var $this = $(this);
        if(exp.trim() && dual){
            var allClasses = $this.attr("data-tags").split(" ");
            for(var i=0; i<allClasses.length; i++){
                if(exp == allClasses[i]){
                    $this.addClass("large");
                    break;
                }
            }
        }
        initPhotosets();
        $this.find(".overlap").each(function(){
            var $o = $(this);
            var caption = $o.children(".caption").length;
            if(!caption)
                $o.css("margin","5px 0 0");
        });
        $this.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
        if(lazyload){
            if(!dual){
                $this.find(".photo img").lazyload({
                    threshold:150,
                    effect:"fadeIn"
                });
            }
        }
        $this.find(".soundcloud_audio_player").soundCloud({
            accentColour:accent
        });
        $this.find(".photolight").photoLight();
        $this.find('iframe.tumblr_audio_player').load(function(){
            $(this).contents().find("head").append("<"+"style type='text/css'"+"> .audio-player {background:transparent !important;} .icon {color:"+accent+"!important;} .progress {display:none!important;}<"+"/style"+">");
        });
        var $text = $this.find(".text");
        $text.find("p").each(function(){
            var childElements = $(this).children().length;
            var textInside = $(this).text().length;
            if (childElements <= 0 && textInside <= 0)
                $(this).remove();
        });
        $text.find("a.read_more").parent("p").addClass("rm");
        $this.dragTags();
    });
}
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
    $(document).tooltip({
        track:true
    });
});
