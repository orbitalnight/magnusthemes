$(document).ready(function(){
    var $container = $('#postmargin');
    $container.infiniteScroll({
        path:'#pagi a.next',
        append:'.posts'
    });
    $container.on('append.infiniteScroll',function(event,response,path,newElements){
        var $newElems = $(newElements);
        $newElems.fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
        $newElems.find('.photo-slideshow').pxuPhotoset({
            lightbox:true,
            rounded:false,
            gutter:'4px',
            borderRadius:'0px',
            photoset:'.photo-slideshow',
            photoWrap:'.photo-data',
            photo:'.pxu-photo'
        });
        $('.posts').unnest({
            yourCaption:".text",
            newCaptionUsername:true,
            tumblrAvatars:true,
            usernameColon:false
        });
        $newElems.find(".photolight").photoLight();
        var $newElemsIDs = $newElems.map(function(){
            return this.id;
        }).get();
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
    });
});
