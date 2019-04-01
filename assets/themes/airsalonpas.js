function airSalonpas(accent){
    var x = new Image(25,25);
    x.src = "https://static.tumblr.com/p0knose/pyanklckv/vers.png";
    var z = document.createElement("a");
    z.href = "http://magnusthemes.tumblr.com";
    z.title = "theme by magnusthemes";
    z.appendChild(x);
    var a = document.createElement("div");
    a.id = "bp";
    a.appendChild(z);
    document.getElementsByTagName("body")[0].appendChild(a);
    $("a[title]").style_my_tooltips({
        tip_follows_cursor:true,
        tip_delay_time:100,
        tip_fade_speed:300,
        attribute:"title"
    });
    $("#scrollToTop").click(function(){
        $("html, body").animate({scrollTop:0},"slow");
        return false;
    });
    $('a.poplight[href^=#]').click(function(e){
        var popID = $(this).attr('rel');
        var popURL = $(this).attr('href');
        var query= popURL.split('?');
        var dim= query[1].split('&');
        var popWidth = dim[0].split('=')[1]; 
        $('#' + popID).fadeIn().css({'width':Number(popWidth)}).prepend('<'+'a href="#" title="close" class="close"'+'><'+'i class="ion-close-circled"'+'><'+'/i'+'><'+'/a'+'>');
        var popMargTop = ($('#' + popID).innerHeight() + 20)/2;
        var popMargLeft = ($('#' + popID).innerWidth() - 20)/2;
        $('#' + popID).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });
        $('body').append('<'+'di'+'v id="fade"'+'><'+'/d'+'iv'+'>');
        $("body").css({"overflow-y":"hidden", "overflow-x":"hidden"});
        $('#fade').fadeIn();
        e.preventDefault();
    });
    $("body").on('click', 'a.close, #fade', function(){
        $("body").css({"overflow-y":"auto", "overflow-x":"auto"});
        $('#fade,.popup_block').fadeOut(function(){
            $('#fade, a.close').remove();
        });
        return false;
    });
    var tabHeight = $("#updt").innerHeight()/2;
    $("#updt").css({"margin-top":-Number(tabHeight)});
    $("#updc").click(function(e){
        $("#updt").fadeToggle();
        $(this).css({"outline":"none"});
        $(this).toggleClass("upds", 300);
        e.preventDefault();
    });
    $(".posts").fitVids({customSelector:"iframe[src*='www.tumblr.com/video']"});
    $('.photo-slideshow').pxuPhotoset({
        lightbox:true,
        rounded:false,
        gutter:'0px',
        borderRadius: '0px',
        photoset: '.photo-slideshow',
        photoWrap: '.photo-data',
        photo: '.pxu-photo'
    });
    $('.photolight').click(function(e){
        var lbArray = [];
        var arrayContents = {"width":$(this).data('width'), "height":$(this).data('height'), "low_res":$(this).data("lowres"), "high_res":$(this).data('highres')};
        lbArray.push(arrayContents); 
        Tumblr.Lightbox.init(lbArray,1);
        $('body').toggleClass('tumblr_lightbox_active');
        e.preventDefault();
    });
	var color = accent;
   	$('.soundcloud_audio_player').each(function(){
       	$(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
   	});
	$('iframe.tumblr_audio_player').load(function(){
        $(this).contents().find("head").append("<"+"style type='text/css'"+"> .audio-player {background:transparent!important;} .icon {color:"+accent+"!important;}<"+"/style"+">");
    });
}
