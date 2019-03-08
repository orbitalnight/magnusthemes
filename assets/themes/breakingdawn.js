function infScr(manual,gutter,lazyload,accent){
    $("#pagination").hide();
    var options;
    if(manual){
        options = {
            path:'#pagination a.next',
            append:'.posts',
            button:'#load',
            scrollThreshold:false
        }
    }
    else {
        options = {
            path:'#pagination a.next',
            append:'.posts'
        }
    }
    var $container = $('#postmargin');
    $container.infiniteScroll(options);
    $container.on('append.infiniteScroll',function(event,response,path,newElements){
        var $newElems = $(newElements);
        var $newElemsIDs = $newElems.map(function(){
            return this.id;
        }).get();
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
        initPhotosets();
        $newElems.unnest({
            yourCaption:".text",
            newCaptionUsername:true,
            tumblrAvatars:true,
            usernameColon:false
        });
        $newElems.each(function(){
            var $text = $(this).find(".text");
            if ($text.height() <= 0)
                $text.remove();
        });
        $newElems.find(".photolight").photoLight();
        $newElems.dragTags();
        $newElems.find(".text").find("p").each(function(){
            var childElements = $(this).children().length;
            var textInside = $(this).text().length;
            if (childElements <= 0 && textInside <= 0){
                $(this).remove();
            }
        });
        $newElems.find(".text").find("a.read_more").parent("p").addClass("rm");
        $newElems.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
	if(lazyload){
            $newElems.find(".photo img").lazyload({
                placeholder:"https://static.tumblr.com/twte3d7/RSvlio0k5/grey.gif",
                effect:"fadeIn",
                threshold:150
            });
        }
        $newElems.find(".soundcloud_audio_player").soundCloud({
            accentColour:accent
        });
        $newElems.find('iframe.tumblr_audio_player').load(function(){
            $(this).contents().find("head").append("<"+"style type='text/css'"+"> .audio-player {background:transparent !important;} .icon {color:"+accent+"!important;} .progress {display:none!important;}<"+"/style"+">");
        });
        $newElems.find(".text").find("img.tumblr_avatar").initialize(function(){
            $(this).error(function(){
                $(this).attr("src","https://static.tumblr.com/p0knose/48yogizmd/000000-0.png");
                $(this).css("background",accent);
            });
        });
        $newElems.find('a.tumblr_blog[href="/"]').initialize(function(){
            var $i = $(this);
            var permalink = $i.parents(".posts").find("a.ion").attr("href");
            $i.attr("href",permalink);
        });
    });
    if(manual){
        $container.on('last.infiniteScroll',function(event,response,path){
            $("#load").fadeOut();
        });
    }
}
