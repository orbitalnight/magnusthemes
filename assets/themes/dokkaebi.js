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
    $("aside").stick_in_parent({
        offset_top:150
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
    $("a#scrollToTop").click(function(e){ 
        $("html, body").animate({scrollTop:0}, "slow");
        e.preventDefault();
    });
    $("#menu").on("click",function(e){
        $("#links").fadeToggle("slow");
        $(this).toggleClass("active");
        e.preventDefault();
    });
    var z = document.createElement("a");
    z.href = "http://magnusthemes.tumblr.com";
    z.title = "theme by magnusthemes";
    if(document.body.contains(document.querySelectorAll("footer")[0])){
        var x = document.createElement("span");
        x.setAttribute("class", "ftr");
        x.setAttribute("data-feather", "code");
        z.appendChild(x);
        feather.replace();
        if(!document.body.contains(document.querySelectorAll('footer a[href*="magnusthemes"]')))
            document.querySelectorAll("footer")[0].appendChild(z);
    }
    else {
        z.innerHTML = "theme";
        if(!document.body.contains(document.querySelectorAll('#links a[href*="magnusthemes"]')))
            document.querySelectorAll("#links").appendChild(z);
    }
});
function dokkaebi(accent){
    $(".posts").initialize(function(){
        var $this = $(this);
        $this.find(".soundcloud_audio_player").soundCloud({
            accentColour:accent
        });
        $this.find('iframe.tumblr_audio_player').load(function(){
            $(this).contents().find("head").append("<"+"style type='text/css'"+"> .audio-player {background:transparent!important;} .icon {color:"+accent+"!important;} .progress {display:none!important;}<"+"/style"+">");
        });
        initPhotosets();
        $this.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    });
}
function highlight(name,tag){
    var readData, insert;
    var url = "https://"+name+".tumblr.com/api/read/json?&tagged="+tag; 
    $.getScript(url, function(){ 
        readData = tumblr_api_read;
        for (var i = 0; $(".feature").length<3; i++){
            var posts = readData.posts[i];
            var type = posts["type"];
            var link = posts["url"];
            switch(type){
                case "photo":
                    var img = posts["photo-url-1280"];
                    insert = '<'+'a class="pxf" title="view post" href="'+link+'">';
                    insert += '<'+'img src="'+img+'" class="px">';
                    insert += '<'+'/a'+'>';
                    $("#featured").append(insert);
                    break;
                default:
                    insert = "";
            } //end switch
        } //end for 
    }); 
    $(document.body).trigger("sticky_kit:recalc");
}
