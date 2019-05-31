function infScr(manual){
    var options;
    if(manual){
        options = {
            path:'#pagination a.next',
            append:'.posts',
            button:'#load',
            scrollThreshold:false
        }
    } else {
        options = {
            path:'#pagination a.next',
            append:'.posts'
        }
    }
    var $container = $('#postmargin');
    $container.infiniteScroll(options);
    $container.on('last.infiniteScroll',function(event,response,path){
        $("#manual").fadeOut();
    });
    $container.on('append.infiniteScroll',function(e,r,p,newElements){
        var $newElems = $(newElements);
        var $newElemsIDs = $newElems.map(function(){
            return this.id;
        }).get();
        Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
        $newElems.each(function(){
            var $text = $(this).find(".text");
            if ($text.height() <= 0){
                $text.remove();
            }
        });
        $newElems.find(".text").find("p").each(function(){
            var childElements = $(this).children().length;
            var textInside = $(this).text().length;
            if (childElements <= 0 && textInside <= 0){
                $(this).remove();
            }
        });
        $newElems.find(".photolight").photoLight();
        $newElems.find(".text").find("a.read_more").parent("p").addClass("rm");
        feather.replace();
    });
}
