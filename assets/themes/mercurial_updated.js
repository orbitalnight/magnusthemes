(function($){
    $.fn.phantomTags = function(){
        return this.click(function(){
            $(this).next(".indextags").fadeToggle();
            $(this).parents(".posts").siblings().find(".indextags").fadeOut();
            return false;
        });
    };
    $.fn.viktorN = function(){
        return this.click(function(){
            $(this).parents("#links").find(".drop").slideToggle();
            return false;
        });
    };
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
function photoSlide(ifslide){
    if(ifslide){
        $(".posts").find('.photoset-grid').bxSlider({
            slideSelector:"div",
            ariaHidden:false,
            controls:true,
            auto:true,
            pause:6000,
            speed:600,
            mode:'fade',
            touchEnabled:false,
            preloadImages:'all',
            nextText:'<span class="oi oi-chevron-right"></span>',
            prevText:'<span class="oi oi-chevron-left"></span>'
        });
    }
    else {
        initPhotosets();
    }
}
function cutPosts(ifCut){
    if(ifCut){
        $(".tumblr_parent").initialize(function(){
            $(this).parent(".text").not(":has(a.read_more)").each(function(){
                var $this = $(this);
                if($this.not(".cut")){
                    var postLength = $.trim($this.text()).split(" ").length;
                    var postHeight = $this.innerHeight();
                    var overflowClass = "overflow",
                        buttonClass = "contin",
                        text = "Continue reading...";
                    if (postLength >= 800 || postHeight >= 600){
                        var $src = $this.find("a.tumblr_blog");
                        console.log($src.html());
                        var slicePara = $this.find(".tumblr_parent").first().children().not($src).slice(0,1);
                        $this.find(".tumblr_parent").slice(1).remove();
                        $this.find(".tumblr_parent").children().not($src).remove();
                        $this.find(".tumblr_parent").append(slicePara);
                        $this.css({"overflow":"hidden"});
                        $this.append('<p class="'+overflowClass+'"><a href="#" class="'+buttonClass+'">'+ text +'</a></p>');
                        var permaLink = $this.parents(".posts").find("a.insta").attr("href");
                        $this.find(".contin").attr("href", permaLink);
                        $this.addClass("cut");
                    }
                }
            });
        });
    }
}
$(document).ready(function(){
    $("[title]").style_my_tooltips({
        tip_follows_cursor:true,
        tip_delay_time:100,
        tip_fade_speed:300,
        attribute:"title"
    });
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
    $('.photolight').click(function(){
        var lbArray = [];
        var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
        lbArray.push(arrayContents);
        Tumblr.Lightbox.init(lbArray,1);
        $('body').toggleClass('tumblr_lightbox_active');
        return false;
    });
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
    $(".quote").each(function(){
        var postLength = $.trim($(this).text()).split(" ").length;
        if (postLength >= 50){
            $(this).css("font-size","14px");
        };
    });
    $(".posts").find(".text").each(function(){
        var textHeight = $(this).height();
        if(textHeight <= 0){
            $(this).remove();
        }
    });
    $('.prbg a.rnt').each(function(){
        var count = parseInt($(this).text());
        if (count > 999) {
            count = Math.floor(count / 100) / 10;
            $(this).text(count + 'k');
        }
    });
    $(".posts").fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    $(".indextags").hide();
    $(".ctags").phantomTags();
    var container = new Array();
    var parents = new Array();
    container.push($('.indextags'));
    parents.push($(".ctags"));
    $(document).mouseup(function(e){
        $.each(container, function(key, value){
            var $this = $(value);
            if (!$this.is(e.target) && $this.has(e.target).length == 0){
                $.each(parents,function(k,v){
                    var $t = $(v);
                    if(!$t.is(e.target) && $t.has(e.target).length == 0){
                        $this.fadeOut();
                    }
                });
            }
        });
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
