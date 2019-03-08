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
$(document).ready(function(){
    // tooltips setup
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
    $("#clickpop").on("click",function(e){
        $("#cube").addClass("turn");
        e.preventDefault();
    });
    $("#searchpop").on("click",function(e){
        $("#cube").addClass("flip");
        e.preventDefault();
    });
    $(".close").on("click",function(e){
        $("#cube").removeClass("turn flip");
        e.preventDefault();
    });
    $("#scrollToTop").on("click",function(e){
        $("html, body").animate({scrollTop:0},"slow");
        e.preventDefault();
    });
});
