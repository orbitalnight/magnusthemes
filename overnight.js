function rmChange(){
    var $turtle = $(".chewy");
    $turtle.width($(".current").width());
    $turtle.css("left", $(".current a").position().left);
    $turtle.data("origLeft", $turtle.position().left);
    $turtle.data("origWidth", $turtle.width());
}
$(window).load(function(){
    rmChange();
});
$(document).ready(function(){
/* 
i only bothered writing these stupid functions bc i have sO MANY FRIENDS who don't use computers to browse the web and... y'know responsive shit is important for mobile 
tHE WORST PART IS THAT I CAN'T EXTERNALISE THIS SHIT fuck u @staff
*/
    // setting breakpoints and checking for screen widths upon resize
    if (matchMedia) {
        var breakPoint3 = window.matchMedia("screen and (max-width:780px)");
        var breakPoint2 = window.matchMedia("screen and (max-width:880px)");
        var breakPoint1 = window.matchMedia("screen and (max-width:1000px) and (min-width:880px)");
        breakPoint1.addListener(WidthChangeOne);
        WidthChangeOne(breakPoint1);
        breakPoint2.addListener(WidthChangeTwo);
        WidthChangeTwo(breakPoint2);
        breakPoint3.addListener(WidthChangeThree);
        WidthChangeThree(breakPoint3);
    }
    // the functions that work when the breakpoints are hit
    // breakpoint 1: screen less than 1000px aka one column sidebar
    function WidthChangeOne(breakPoint1){
        if (breakPoint1.matches) {
            $("footer").hide();
            $("footer").append($("a.copy").clone());
            $("#sidebar").append('<div class="block" id="footer"><div class="ts"><span class="ln ln-wallet">disclaimer</span></div><div class="cs">'+$("footer").html()+'</div></div>');
        } else {
            $("#footer").remove();
            $("footer").find("a.copy").remove();
            $("footer").show();
        }
    }
    // breakpoint 2: screen less than 880px 
    // aka one column layout and automatic infinite scrolling
    function WidthChangeTwo(breakPoint2){
        if (breakPoint2.matches) {
            $("footer").removeClass("ln ln-wallet");
            $("footer").prepend($("a.copy").clone());
            $("#manual").hide();
            $('#postmargin').infinitescroll('bind');
        } else {
            $("footer").find("a.copy").remove();
            $("footer").addClass("ln ln-wallet");
            $(window).unbind('.infscr');
            $("#manual").show();
            $('#load').click(function(){
                $('#postmargin').infinitescroll('retrieve');
                return false;
            });
        }
    }
    // breakpoint 3: screen less than 780px aka mobile navigation can die
    // (this part of the script is a mess don't bother trying to read it)
    function WidthChangeThree(breakPoint3){
        if (breakPoint3.matches){
            $("#bar").find("#sub").prev("a.ln").attr("href","#");
            $("<div />").append(
                '<a href="/">index</a>', 
                $("#links").find('li:not(.current):not(.chewy) > a:not([href="#"])').clone(), 
                $("#links").find("li .drop:not(:first) a").clone(), 
                $("#links").find("li .drop:first").children("a:first").clone()
            ).appendTo("#bar").attr("id","mobile");
            $("#links li:not(.current)").hide();
            $("#bar").find("#sub").prev("a.ln").toggle(function(e){
                $("#mobile").slideDown();
                $(this).addClass("active");
                e.preventDefault();
            }, function(e){
                $("#mobile").slideUp();
                $(this).removeClass("active");
                e.preventDefault();
            });
        } else {
            $("#bar").find("#sub").prev("a.ln").removeAttr("href");
            $("#mobile").remove();
            $("#links li:not(.current)").show();
        }
    }
    // calling the functions upon load
    widthChangeOne(breakPoint1);
    widthChangeTwo(breakPoint2);
    widthChangeThree(breakPoint3);
});