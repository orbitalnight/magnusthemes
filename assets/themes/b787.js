function infScrCallback($newElems){
    var $newElemsIDs = $newElems.map(function(){ 
        return this.id; 
    }).get();
    $newElems.css({"opacity":"0"});
    $newElems.find(".indextagz").hide();
    $newElems.find(".ctags").click(function(e){
        $(this).parents(".state").children(".indextagz").slideToggle();
        e.preventDefault();
    });
    $newElems.find(".photo img").lazyload({
        effect:"fadeIn",
        threshold:300,
        placeholder:"https://static.tumblr.com/twte3d7/RSvlio0k5/grey.gif"
    });
    initPhotosets();
    Tumblr.LikeButton.get_status_by_post_ids($newElemsIDs);
    $newElems.animate({"opacity":"1"}, 500);
}
