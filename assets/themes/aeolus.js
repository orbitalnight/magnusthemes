$(document).ready(function(){
    $("[title]").style_my_tooltips({
        tip_follows_cursor:true,
        tip_delay_time:100,
        tip_fade_speed:250,
        attribute:"title"
    });
    $(".ftr").each(function(){
        let $this = $(this);
        if($this.find("img").length){
            let img = $this.find("img")[0],
                imgSrc = img.src;
            $this.css({
                "background":"url("+imgSrc+")",
                "background-size":"cover"
            });
            img.parentNode.removeChild(img);
        }
    });
    $(".bars .b").each(function(){
        var $this = $(this);
        var $percentage = $this.children("span"),
            percent = parseInt($percentage[0].textContent);
        var totalWidth = $this.innerWidth();
        $percentage.css("width",percent*totalWidth/100+"px");
        $percentage[0].textContent = "";
    });
    var a = document.createElement('a');
    a.innerHTML = "theme";
    a.title = "theme by magnusthemes";
    a.href = "http://magnusthemes.tumblr.com";
    document.getElementById("links").appendChild(a);
});
