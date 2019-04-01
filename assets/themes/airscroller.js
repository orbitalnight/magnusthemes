function infScr(manual,grid,accent){
	var options;
	if(manual){
		options = {
			path:"#pagination a.next",
			button:"#manual a.load",
			append:".posts",
			scrollThreshold:false
		}
	}
	else {
		options = {
			path:"#pagination a.next",
			append:".posts"
		}
	}
    var $container = $("#postmargin");
	$container.infiniteScroll(options);
    $container.on("append.infiniteScroll",function(event,response,path,newElements){ // callback function
        var $newElems = $(newElements);
        var $newElemsIDs = $newElems.map(function(){
            return this.id;
        }).get();
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
    	$newElems.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
		var color = accent;
   		$newElems.find('.soundcloud_audio_player').each(function(){
       		$(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
   		});
		$newElems.find('iframe.tumblr_audio_player').load(function(){
        	$(this).contents().find("head").append("<"+"style type='text/css'"+"> .audio-player {background:transparent!important;} .icon {color:"+accent+"!important;} <"+"/style"+">");
    	});
		if(grid){
        	$newElems.find('.photo-slideshow').pxuPhotoset({
            	lightbox: true,
            	rounded: false,
            	gutter: '0px',
        		borderRadius: '0px',
        		photoset: '.photo-slideshow',
        		photoWrap: '.photo-data',
        		photo: '.pxu-photo'
        	}, function(){
            	$container.masonry();
        	});
		}
		else {
        	$newElems.find('.photo-slideshow').pxuPhotoset({
            	lightbox: true,
            	rounded: false,
            	gutter: '0px',
        		borderRadius: '0px',
        		photoset: '.photo-slideshow',
        		photoWrap: '.photo-data',
        		photo: '.pxu-photo'
        	});
		}
        $newElems.find('.photolight').click(function(e){
            var lbArray = [];
            var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
            lbArray.push(arrayContents); 
            Tumblr.Lightbox.init(lbArray,1);
            $('body').toggleClass('tumblr_lightbox_active');
            e.preventDefault();
        });
		if(grid){
        	$newElems.imagesLoaded(function(){
            	$container.masonry("appended", $newElems);
        	});
		}
		else {
        	$newElems.find(".photo img").lazyload({
            	effect:"fadeIn",
            	threshold:150,
            	placeholder:"https://static.tumblr.com/twte3d7/RSvlio0k5/grey.gif"
        	});
        }
    });
	$container.on("last.infiniteScroll",function(event,response,path){
		$("#manual a.load").remove();
		$("#manual").append('<'+'a class="done" title="no more posts to load!"'+'><'+'i class="ion-alert-circled"'+'><'+'/i'+'><'+'/a'+'>');
	});
}
