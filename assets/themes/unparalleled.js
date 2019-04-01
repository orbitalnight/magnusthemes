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
    $(".posts").unnest({
        yourCaption:".text",
        newCaptionUsername:true,
        tumblrAvatars:true,
        usernameColon:false
    });
    $('.photolight').each(function(){
        $(this).click(function(){
            var lbArray = [];
            var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
            lbArray.push(arrayContents);
            Tumblr.Lightbox.init(lbArray,1);
            $('body').toggleClass('tumblr_lightbox_active');
        });
    });
    $('.photo-slideshow').pxuPhotoset({
        lightbox: true,
        rounded: false,
        gutter: '4px',
        borderRadius: '0px',
        photoset: '.photo-slideshow',
        photoWrap: '.photo-data',
        photo: '.pxu-photo'
    });
    $(".sc a").hover(function(){
        var curWidth = $(this).width(),
        autoWidth = $(this).css({"width": "auto"}).width();
        $(this).width(curWidth).animate({width: autoWidth});
    }, function(){
        $(this).animate({"width":"0px"});
    });
    var numLinks = $(".auto").children().length;
    if(numLinks > 8)
        $(".auto").addClass("more");
    else if (numLinks > 4 && numLinks <= 8)
        $(".auto").addClass("less");
    else if (numLinks <= 4){
        $(".auto").addClass("less");
        $("#links").css("padding-top","15px");
    }
    $("#navigation").prepend($("#links .auto").html());
    $('.nav a[href^="#"]').click(function(e){
        var selectID = $(this).attr("href");
        $(".tab" + selectID).fadeIn().siblings(".tab").hide();
        $(this).addClass("select").siblings().removeClass("select");
        e.preventDefault();
    });
    $(".posts").each(function(){
        $(this).find(".dragtags").draggable({
            axis: "x",
            scroll: false,
            stop: function(){
                var LT = $(this).css("left").replace(/[^-\d\.]/g, '');
                if(LT > 0){
                    $(this).animate({left: 0}, 400, 'easeOutExpo');
                }
                var tagWidth = $(this).outerWidth();
                var parentWidth = $(".itag").outerWidth();
                if(tagWidth > parentWidth) {
                    if(LT < parentWidth-tagWidth){
                        $(this).animate({left: parentWidth-tagWidth}, 400, 'easeOutExpo')}
                } else {
                    $(this).animate({left: 0}, 400, 'easeOutExpo');
                }
            }
        });
        var $tags = $(this).find(".dragtags"),
        tagsWidth = $(this).find(".indextags").show().find(".dragtags").width(),
        parentWidth = $(this).find(".indextags").show().find(".itag").width();
        $(".indextags").hide();
        if (tagsWidth <= parentWidth){
            $tags.draggable("disable");
        } else {
            $tags.css({"cursor":"col-resize"});
        }
    });
    $(".posts").fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    $(".indextags").hide();
    $(".ctags").click(function(){
        $(this).parents(".state").children(".indextags").fadeIn();
        return false;
    });
    $(".cls").click(function(){
        $(this).parent(".indextags").fadeOut();
        return false;
    });
    $("ol.notes").hide();
    $(".cnotes").click(function(){
        $("ol.notes").slideToggle(1200);
        return false;
    });
    $("#topbar, #footer").hide();
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var releaseOverload = $("#header").height() + $("#banner").height();
        $("#banner:not(.sharp)").css({"background-position":"center "+(scroll*0.7)+"px"}); 
        if (scroll >= releaseOverload){
            $("#topbar").fadeIn("slow");
            $(".iframe-controls--desktop").css({"top":"55px"});
        } else {
            $("#topbar").fadeOut("slow");
            $(".iframe-controls--desktop").css({"top":"3px"});
        }
    });
    $("#scrollToTop").click(function(e){
        $("html, body").animate({scrollTop:0},"slow");
        e.preventDefault();
    });
    $("#fuckjquery").click(function(e){
        $('html, body').animate({
            scrollTop: $("#postmargin").offset().top-30
        }, 1000);
        e.preventDefault();
    });
});
