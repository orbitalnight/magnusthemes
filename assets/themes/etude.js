function infScr(manual,color,dash){
    var options;
    if(manual){
        options = {
            scrollThreshold:false,
            button:'#manual span',
            path:'#pagination a.next',
            append:'.posts'
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
    $container.on("last.infiniteScroll",function(e,r,p){
        $("#manual span").html("no more posts to load!");
    });
    $container.on("append.infiniteScroll",function(e,r,p,newElements){
        var $newElems = $(newElements);
        var $newElemsIDs = $newElems.map(function(){ 
            return this.id; 
        }).get();
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
        $newElems.find('a[href*="t.umblr.com/redirect"]').each(function(){
            var originalURL = $(this).attr("href").split("?z=")[1].split("&t=")[0];
            var replaceURL = decodeURIComponent(originalURL);
            $(this).attr("href", replaceURL);
        });
        $newElems.find('.photolight').click(function(e){
            var lbArray = [];
            var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
            lbArray.push(arrayContents);
            Tumblr.Lightbox.init(lbArray,1);
            $('body').toggleClass('tumblr_lightbox_active');
            e.preventDefault();
        });
        initPhotosets();
        $newElems.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
        $newElems.find('.soundcloud_audio_player').each(function(){
            $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
            });
        $newElems.find('iframe.tumblr_audio_player').load(function(){
            $(this).contents().find("head").append("<"+"style type='text/css'"+">.audio-player {background:transparent!important;} .icon {color:"+color+"!important;}<"+"/style"+">");
    	});
    });
}
