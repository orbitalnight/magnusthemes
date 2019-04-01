var $container;
$(document).ready(function(){
    $container = $("#postmargin").infiniteScroll({
        path:".paginate a.next",
        append:".posts"
    });
    $container.on("append.infiniteScroll",function(e,r,p,newElements){
        var $newElems = $(newElements).css({"opacity":"0"});
        var $newElemsIDs = $newElems.map(function(){
            return this.id;
        }).get();
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
        $newElems.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
        $newElems.find('.photo-slideshow').pxuPhotoset({
            lightbox: true,
            rounded: false,
            gutter: '4px',
            photoset: '.photo-slideshow',
            photoWrap: '.photo-data',
            photo: '.pxu-photo'
        }, 
        function(){
            $container.masonry();
        });
        $newElems.find('.photolight').each(function(){
            $(this).click(function(){
                var lbArray = [];
                var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
                lbArray.push(arrayContents);
                Tumblr.Lightbox.init(lbArray,1);
                $('body').toggleClass('tumblr_lightbox_active');
            });
        });
        $newElems.unnest({
            yourCaption:".text",
            newCaptionUsername:true,
            tumblrAvatars:true,
            usernameColon:false
        }, function(){
            $("#postmargin").masonry();
        });
        $newElems.each(function(){
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
        $newElems.find(".sc a").hover(function(){
            var curWidth = $(this).width(),
            autoWidth = $(this).css({"width": "auto"}).width();
            $(this).width(curWidth).animate({width: autoWidth}, 60);
        }, function(){
            $(this).css({"width": "0px"});
        });
        $newElems.find(".indextags").hide();
        $newElems.find(".ctags").click(function(){
            $(this).parents(".state").children(".indextags").fadeIn();
            return false;
        });
        $newElems.find(".cls").click(function(){
            $(this).parent(".indextags").fadeOut();
            return false;
        });
        $newElems.imagesLoaded(function(){
            $container.masonry("appended", $newElems);
            $newElems.animate({"opacity":"1"});
        });
    });
});
