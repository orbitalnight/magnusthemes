function infScr(manual,gutter,lazyload,accent,dual){
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
    var $container = $("#postmargin");
    $container.infiniteScroll(options);
    $container.on('append.infiniteScroll',function(event,response,path,newElements){
        var $newElems = $(newElements).css({"opacity":"0"});
        var $newElemsIDs = $newElems.map(function(){
            return this.id;
        }).get();
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
        if(dual)
            $grid.masonry("appended", $newElems);
        $container.imagesLoaded(function(){
            if(dual){
                $grid.masonry();
                if(lazyload){
                    $newElems.each(function(){
                        $(this).find(".photo img").lazyload({
                            effect:"fadeIn",
                            load:function(){
                                $grid.masonry();
                            }
                        });
                    });
                }
            }
            $newElems.animate({"opacity":"1"});
        });
    });
    if(manual){
        $container.on('last.infiniteScroll',function(event,response,path){
            $("#pagination").fadeOut();
        });
    }
}
