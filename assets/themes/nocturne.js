/* ------
nocturne.js
magnusthemes@tumblr

do not copy/steal
------ */

function stickyNav(){
    var scroll = $(window).scrollTop();
    var limit = $("#barz").offset();
    if ($("#barz").hasClass("zer0")){
        if (scroll >= limit.top) {
            $(".barz").addClass("stick");
            $(".barz").removeClass("abz");
        } else {
            $(".barz").removeClass("stick");
            $(".barz").addClass("abz");
        }
    } else {
        if (scroll >= limit.top-45) {
            $(".barz").addClass("stick");
            $(".barz").removeClass("abz");
        } else {
            $(".barz").removeClass("stick");
            $(".barz").addClass("abz");
        }
    }
    $("header").css({"background-position":"0 "+(scroll*0.7)+"px"});
}
function nocturne(sticky,accent,perma,relate,home,feature,name,tag){
    if(sticky){
        $("#sidebar").stick_in_parent({
            offset_top:90
        });
    }
    $("#postmargin").css("min-height", function(){ 
        return $("#sidebar").height();
    });
    $(".dropdown a").width(0);
    var dropWidth = $(".state").innerWidth();
    $(".dropdown a").width(dropWidth - 20);
    $(document).tooltip({
        track:true
    });
    $(".posts").fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    initPhotosets();
    $('.photolight').click(function(e){
        var lbArray = [];
        var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
        lbArray.push(arrayContents);
        Tumblr.Lightbox.init(lbArray,1);
        $('body').toggleClass('tumblr_lightbox_active');
        e.preventDefault();
    });
    $("#scrollToTop").hide();
    $("#scrollToTop").click(function(e){
        $("html, body").animate({scrollTop:0},"slow");
        e.preventDefault();
    });
    var credit1 = document.createElement("a");
        credit1.href = "http://magnusthemes.tumblr.com";
        credit1.innerHTML = "theme";
    document.getElementsByClassName("navi")[0].appendChild(credit1);
    var elementExists = document.getElementById("jan");
    var credit2 = document.createElement("a");
    var cImg = document.createElement("img");
        credit2.href = "http://magnusthemes.tumblr.com";
        cImg.src = "https://static.tumblr.com/p0knose/pyanklckv/vers.png";
    if(elementExists){
        var cText = document.createElement("span");
        cText.innerHTML = "Theme by MagnusThemes";
        credit2.appendChild(cText);
        credit2.appendChild(cImg);
        elementExists.appendChild(credit2);
    } else {
        var statList = document.querySelectorAll(".statistic");
        var credit2Span = document.createElement("span");
        var credit2SpanText = document.createElement("b");
            cImg.className = "roy";
            cImg.width = "13";
            cImg.height = "13";
            credit2.innerHTML = "MagnusThemes";
            credit2Span.className = "statistic";
            credit2SpanText.innerHTML = "Theme";
        credit2Span.appendChild(credit2SpanText);
        credit2.appendChild(cImg);
        credit2Span.appendChild(credit2);
        var lastStat = statList[statList.length -1].parentElement;
        lastStat.appendChild(credit2Span);
    }
   	$('.soundcloud_audio_player').each(function(){
       		$(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + accent.split('#')[1], height: 20, width: '100%' });
   	});
    $('iframe.tumblr_audio_player').load(function(){
        $(this).contents().find("head").append("<"+"style type='text/css'"+"> .audio-player {background:transparent!important;} .icon {color:"+accent+"!important;}<"+"/style"+">");
    });
    $('a[href*="t.umblr.com/redirect"]').each(function(){
        var originalURL = $(this).attr("href").split("?z=")[1].split("&t=")[0];
        var replaceURL = decodeURIComponent(originalURL);
        $(this).attr("href", replaceURL);
    });
    if(perma && relate){
        var $rlt = $(".relate");
        for(let i=0; i < $rlt.length-3; i++)
            $('#permarelate').children().last().remove();
        $rlt.each(function(){
            var $this = $(this);
            if($this.find(".px").length)
                $this.addClass("ix");
        });
        $(window).load(function(){
            var shortest = [].reduce.call($(".relate > div"), function(sml, cur){
                return $(sml).innerHeight() < $(cur).innerHeight() ? sml : cur;
            });
            $rlt.innerHeight($(shortest).innerHeight());
            $rlt.children("div").children().unwrap();
        });
    }
    if(feature && home){
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
                        insert = '<'+'div class="feature ix"'+'>';
                        insert += '<'+'img src="'+img+'" class="px">';
                        insert += '<'+'a class="tx" href="'+link+'">view post...<'+'/a'+'>';
                        insert += '<'+'/div'+'>';
                        $("#featured").append(insert);
                        break;
                    case "regular":
                        var title = posts["regular-title"];
                        var cap = posts["regular-body"];
                        insert = '<'+'div class="feature"'+'>';
                        if(titleText.length)
                            insert += '<'+'h2'+'>'+title+'<'+'/h2'+'>'; 
                        insert += '<'+'div class="ct"'+'>'+cap+'<'+'/div'+'>';
                        insert += '<'+'a class="tx" href="'+link+'">view post...<'+'/a'+'>';
                        insert += '<'+'/div'+'>';
                        $("#featured").append(insert);
                        break;
                    default:
                        insert = "";
                } //end switch
            } //end for 
        }); 
    }
}
function ifTrans(){
    if ($(window).scrollTop() >= $("#barz").offset().top) {
        $("#scrollToTop").fadeIn("fast");
        if ($("#barz").hasClass("zer0")){
            $("#scrollToTop").addClass("trans");
        }
    } else { 
        $("#scrollToTop").fadeOut("fast");
        $("#scrollToTop").removeClass("trans");
    }
}
