<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
 
<!--
Theme - Mercurial [Stay Close to Me]
code by aeroelastical/magnusthemes
ver. 1.1.2 (13012019)
-->
 
<head>
 
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i' rel='stylesheet'/>

<link href="https://static.tumblr.com/p0knose/GQToiq7ub/outicons.css" rel="stylesheet"/>
<link href="https://static.tumblr.com/p0knose/yKlp5mq5l/normalize.css" rel="stylesheet"/>
<link href="https://static.tumblr.com/qudkd6d/OcDnl99gb/style.css" rel="stylesheet"/>
<link href="https://static.tumblr.com/wupwnyt/qWVoc4phj/resizing.css" rel="stylesheet"/>
 
<title>{Title}{block:PostSummary} | {PostSummary}{/block:PostSummary}</title>
<link rel="shortcut icon" href="{Favicon}">
<link rel="alternate" type="application/rss+xml" href="{RSS}">

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
 
{block:Description}<meta name="description" content="{MetaDescription}" />{/block:Description}
 
<meta name="color:background" content="#f6f6f6"/>
<meta name="color:text" content="#999999"/>
<meta name="color:bold" content="#444444"/>
<meta name="color:italic" content="#666666"/>
<meta name="color:links" content="#cccccc"/>
<meta name="color:links hover" content="#999999"/>
 
<meta name="color:scrollbar" content="#bbbbbb"/>
<meta name="color:scrollbar background" content="#f6f6f6"/>
<meta name="color:tooltips" content="#fff"/>
<meta name="color:tooltips background" content="#444444"/>
<meta name="color:text selection" content="#666666"/>
<meta name="color:text selection background" content="#eeeeee"/>
 
<meta name="color:posts" content="#ffffff"/>
<meta name="color:post shadows" content="#cccccc"/>
<meta name="color:username highlight" content="#eeeeee"/>
<meta name="color:content backgrounds" content="#f6f6f6"/>
<meta name="color:chat even" content="#666666"/>
<meta name="color:chat odd" content="#444444"/>
<meta name="color:borders" content="#cccccc"/>
<meta name="color:post borders" content="#eeeeee"/>
<meta name="color:post title" content="#666666"/>

<meta name="color:accent" content="#cccccc"/>
<meta name="color:accent text" content="#fff"/>
<meta name="color:accent hover" content="#dddddd"/>
<meta name="color:bottom bar" content="#444444"/>
<meta name="color:bottom bar text" content="#aaaaaa"/>
<meta name="color:fish" content="#666666"/>
 
<meta name="image:background" content=""/>
<meta name="image:header" content=""/>
<meta name="image:sidebar" content=""/>
 
<meta name="if:custom text selection" content=""/>
<meta name="if:small cursor" content=""/>
<meta name="if:light theme" content="1"/>
<meta name="if:shorten captions" content=""/>
<meta name="if:hide captions" content=""/>
<meta name="if:hide tags" content=""/>
<meta name="if:fading images" content=""/>
<meta name="if:monochrome images" content=""/>
<meta name="if:visitor counters" content=""/>
<meta name="if:updates panel" content=""/>
<meta name="if:dropdown navigation" content=""/>
<meta name="if:fish widget" content=""/>
 
<meta name="text:billy code" content=""/>
<meta name="text:subtitle" content=""/>
<meta name="text:blog name" content=""/>
<meta name="text:online counter" content=""/>
<meta name="text:hit counter" content=""/>
<meta name="text:extra text" content=""/>

<meta name="text:update 1" content=""/>
<meta name="text:update 1 text" content=""/>
<meta name="text:update 2" content=""/>
<meta name="text:update 2 text" content=""/>
<meta name="text:update 3" content=""/>
<meta name="text:update 3 text" content=""/>
<meta name="text:update 4" content=""/>
<meta name="text:update 4 text" content=""/>
<meta name="text:update 5" content=""/>
<meta name="text:update 5 text" content=""/>

<meta name="text:link 1" content=""/>
<meta name="text:link 1 url" content=""/>
<meta name="text:link 2" content=""/>
<meta name="text:link 2 url" content=""/>
<meta name="text:link 3" content=""/>
<meta name="text:link 3 url" content=""/>
<meta name="text:link 4" content=""/>
<meta name="text:link 4 url" content=""/>
<meta name="text:link 5" content=""/>
<meta name="text:link 5 url" content=""/>
<meta name="text:link 6" content=""/>
<meta name="text:link 6 url" content=""/>
<meta name="text:link 7" content=""/>
<meta name="text:link 7 url" content=""/>
<meta name="text:link 8" content=""/>
<meta name="text:link 8 url" content=""/>
<meta name="text:link 9" content=""/>
<meta name="text:link 9 url" content=""/>
<meta name="text:link 10" content=""/>
<meta name="text:link 10 url" content=""/>
<meta name="text:link 11" content=""/>
<meta name="text:link 11 url" content=""/>
<meta name="text:link 12" content=""/>
<meta name="text:link 12 url" content=""/>

<meta name="select:post size" title="540px" content="540"/>
<meta name="select:post size" title="500px" content="500"/>
<meta name="select:post size" title="450px" content="450"/>
<meta name="select:post size" title="400px" content="400"/>
<meta name="select:post size" title="350px" content="350"/>
<meta name="select:post size" title="300px" content="300"/>
<meta name="select:post size" title="250px" content="250"/>

<meta name="select:pagination icons" title="arrows" content="arrow"/>
<meta name="select:pagination icons" title="chevrons" content="chevron"/>
 
<style type="text/css">
 
/* ------ custom styles ------ */

/* animation */

@-webkit-keyframes fadein {from {opacity:0;} to {opacity:1;}}
@keyframes fadein {from {opacity:0;} to {opacity:1;}}
 
/* scrollbar */ 
 
::-webkit-scrollbar {height:9px; width:9px;}
::-webkit-scrollbar-corner {background:{color:background};}

::-webkit-scrollbar-track-piece {
    background:{color:scrollbar background};
    border:4px solid {color:background};
}
 
::-webkit-scrollbar-thumb {
    width:9px; height:9px;
    background-color:{color:scrollbar};
    border:3px solid {color:background};
}

::-webkit-scrollbar-thumb:horizontal {border-width:3px 0px;}
::-webkit-scrollbar-thumb:vertical {border-width:0px 3px;}

/* text selection */
 
{block:ifcustomtextselection}
::selection {color:{color:text selection}; background:{color:text selection background};}
::-moz-selection {color:{color:text selection}; background:{color:text selection background};}
::-webkit-selection {color:{color:text selection}; background:{color:text selection background};}
{/block:ifcustomtextselection}

/* tooltips */
 
#s-m-t-tooltip {
    max-width:300px;
    padding:4px 8px;
    text-transform:uppercase;
    background:{color:tooltips background};
    border-radius:2px;
    letter-spacing:0.5px;
    margin:5px 20px;
    font:normal 8px/150% 'Open Sans', sans-serif;
    color:{color:tooltips};
    position:absolute;
    z-index:214748364789;
}

/* tumblr controls */
 
.iframe-controls--desktop {
    top:5px!important;
    right:5px!important;
    opacity:0.3!important;
    position:fixed!important;
    z-index:214748364789!important;
    {block:iflighttheme}
    -webkit-filter:invert(85%);
    filter:invert(85%);
    {/block:iflighttheme}
    transition:0.5s ease-in-out;
}
 
#bp:hover {border-color:{color:Accent};}
.iframe-controls--desktop:hover {opacity:0.6!important;}

/* lightbox */
 
#tumblr_lightbox, .tmblr-lightbox {background:rgba({RGBcolor:background}, 0.9)!important; z-index:214748364789!important;}
#tumblr_lightbox img, .tmblr-lightbox img {opacity:0;}
#vignette, .vignette {opacity:0!important;}
 
#tumblr_lightbox_center_image, #tumblr_lightbox_left_image, #tumblr_lightbox_right_image, .lightbox-image {
    opacity:1!important;
    border:1px solid {color:post borders}!important;
    box-shadow:3px 3px 0px rgba({RGBcolor:Post Shadows},0.1)!important;
    border-radius:3px!important;
    padding:4px!important;
    background:{color:posts}!important;
}
 
#tumblr_lightbox_caption, .lightbox-caption {
    color:{color:text}!important;
    font:normal 12px 'Open Sans', sans-serif!important;
    text-shadow:0 0 0 transparent!important;
    margin-top:20px!important;
}

/* cursor */
 
{block:ifsmallcursor}
body {cursor:url('https://media.tumblr.com/28b53f437be2ef9f495c31d226b7f387/tumblr_inline_n0lc39S8lT1r1tugg.gif'), progress!important;}
 
a, a:hover {cursor:url(https://media.tumblr.com/14770974325c40b8aefe3ecd4e360253/tumblr_inline_n0lc3j3Jah1r1tugg.png), progress!important;}
{/block:ifsmallcursor}
 
/* ------ basic styles ------ */
 
body {
    {block:ifbackgroundimage}background-image:url('{image:background}');{/block:ifbackgroundimage}
    background-attachment:fixed;
    background-repeat:repeat;
    background-color:{color:background};
    word-wrap:break-word;
    overflow:auto;
    margin:0px;
    padding:0px;
    color:{color:text};
    letter-spacing:0.2px;
    font:normal 10px/170% 'Open Sans', sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
}
 
a {
    text-decoration:none;
    outline:none!important;
    color:{color:links};
    transition:0.3s ease-in-out;
}
 
a:hover {color:{color:links hover};}
i, italic, em {color:{color:italic}; font-style:italic;}
b, bold, strong {color:{color:bold}; font-weight:bold;}
img {border:none;}
 
blockquote img {max-width:100%!important; height:auto;}
 
pre, code {
    display:block;
    background:{color:content backgrounds};
    border:1px solid {color:post borders};
    font:normal 10px consolas, monospace;
    letter-spacing:0px;
    padding:10px;
}

hr {
    border:0px solid transparent;
    color:{color:borders};
    background-color:{color:borders};
    margin:1em -20px;
	padding:0 20px;
    height:1px;
    width:100%;
}

ul, ol:not(.notes) {margin:0px; padding-left:25px;}
ol:not(.notes) {counter-reset:order;}

ul li, ol:not(.notes) li {
    list-style:none;
    position:relative;
    display:block;
    margin:1px 0px 0px 0px;
}

ol:not(.notes) li::before {
    counter-increment:order;
    content:counter(order);
    font:italic bold 11px georgia, serif;
    letter-spacing:0px;
    color:{color:Accent};
    position:absolute;
    top:0px;
	left:0px;
    -webkit-transform:translate(-100%,0);
    transform:translate(-100%,0);
}

ul li::before {
    font:12px/170% Outicons;
    content:"\e884";
    position:absolute;
    left:-15px;
    color:{color:Accent};
}

h1, h2, h3 {
    margin:5px 0px;
    letter-spacing:0px;
    font:normal normal 12px/170% 'Open Sans', sans-serif;
    color:{color:Post Title};
}

small, sup, sub {line-height:170%; font-size:10px;}
big {font-size:12px;}

/* ------ general styling ------ */

.posts, header, aside, #links, #updt, ol.notes {
    background:{color:posts};
    border:1px solid {color:post borders};
    box-shadow:3px 3px 0px rgba({RGBcolor:Post Shadows},0.1);
    border-radius:3px;
}

/* --- timeline styling --- */

/* triangles */

.tri, .tri::before, .posts::after, #desc::after, aside::after, .ctags.act::after, #links::before, ol.notes::after {
    width:0px; height:0px;
    border-style:solid;
    display:inline-block;
    position:absolute;
    content:"";
}

.posts::after, #desc::after, ol.notes::after {
    content:"";
    left:-15px;
    top:10px;
    border-width:10px 15px 10px 0px;
    border-color:transparent {color:Post Borders} transparent transparent;
}

/* dots */

.posts::before, #desc::before, ol.notes::before {
    content:"";
    width:15px;
    height:15px;
    background:{color:Accent};
    border:3px double {color:Background};
    position:absolute;
    left:-50px;
    top:10px;
    border-radius:100%;
    transition:0.3s ease-in-out;
}

/* timeline */

#container::before {
    content:"";
    position:absolute;
    width:2px;
    background:{color:Post Borders};
	min-height:calc(100vh - 30px);
    left:240px;
    height:100%;
    top:30px;
}

#container::after {
    content:"";
    position:absolute;
    width:12px;
    height:12px;
    border-radius:100%;
    margin-top:-5px;
    background:{color:Post Borders};
    left:235px;
    top:30px;
}

/* ------ container ------ */

#container {position:relative; margin:0 auto; width:calc({select:post size}px + 280px);}

/* post container */
 
#postmargin {
    z-index:1;
    padding:50px 0px 10px 50px;
    position:relative;
    margin-left:200px;
    width:calc({select:post size}px + 30px);
}
 
/* ------ posts ------ */
 
.posts {
    padding:0px;
    width:{select:post size}px;
    margin:0px 0px 50px 30px;
    position:relative;
    -webkit-animation:fadein 1s;
    animation:fadein 1s;
}

.container {padding:0px 10px;}

/* --- captions --- */

.text {padding:10px; position:relative;}
.text p {margin:5px 0px;}
.text p:first-child {margin:0 0 5px 0;}
.text p:last-child {margin:5px 0 0 0;}
.text ul:last-child, .text ol:last-child {margin-bottom:3px;}

.text a, .sourcez a, #updt a, .block a {
    border-bottom:1px solid {color:post borders};
    box-shadow:inset 0px 0px 0px {color:username highlight};
}

.text a:hover, .sourcez a:hover, #updt a:hover, .block a:hover {box-shadow:inset 0px -20px 0px {color:username highlight}; border-bottom-color:{color:username highlight};}

blockquote:not(.tumblr_parent) {
    margin:5px 0 0 0;
    padding:0px 10px;
    display:block;
    border-left:2px solid {color:Borders};
}

blockquote.tumblr_parent {margin:0; padding:5px 0px; border:none; display:block;}

blockquote.tumblr_parent > a.tumblr_blog:first-of-type {
    color:{color:Post Title};
    display:inline;
    font-weight:600;
    margin-right:3px;
    padding:1px;
    background:{color:username highlight};
    border-bottom-color:{color:username highlight};
    box-shadow:-2px 0 0 {color:username highlight}, 2px 0 0 {color:username highlight};
}

blockquote.tumblr_parent > a.tumblr_blog:first-of-type:hover, p.tmblr-attribution a:hover {
    color:{color:Links Hover};
    background:{color:content backgrounds};
    border-bottom-color:{color:content backgrounds};
    box-shadow:-2px 0 0 {color:content backgrounds}, 2px 0 0 {color:content backgrounds};
}

blockquote.tumblr_parent > p:first-of-type {display:inline;}
.text img {display:block; margin:10px 0px; max-width:100%;}
.text p.tmblr-attribution {margin:0 0 10px 0;}
 
.text p.tmblr-attribution a {
    box-shadow:-2px 0 0 {color:username highlight}, 2px 0 0 {color:username highlight};
    background:{color:username highlight};
    color:{color:post title};
	font-weight:600;
    padding:3px;
    border:none;
}
 
.text p.tmblr-attribution a::after {font-size:12px; content:"›"; margin-left:3px;}

/* truncating */

.text p.overflow, .text p.rm {
    position:absolute;
    bottom:0px;
    left:0px;
    width:100%;
    text-align:center;
    margin:0px;
    padding:100px 0px 0px 0px;
    background-image:linear-gradient(to bottom, rgba({RGBcolor:Posts},0), {color:Posts});
    border-bottom:15px solid {color:Posts};
}
 
.text a.contin, .text a.read_more {
    font:normal 10px 'Open Sans', sans-serif;
    text-transform:uppercase;
    padding:5px 7px;
    border-radius:1px;
    display:inline-block;
    color:{color:Post Title};
    border:0px solid transparent;
    transition:0.5s ease-in-out;
}
 
.text a.contin:hover, .text a.read_more:hover {color:{color:Accent Text}; box-shadow:inset 0px 30px 0px {color:Accent};}

/* photo & video posts */
 
.posts img, .posts iframe {max-width:100%; transition:0.5s ease-in-out;}
 
{block:iffadingimages}{block:indexpage}
.photo img {opacity:0.85;}
.posts:hover .photo img {opacity:1;}
{/block:indexpage}{/block:iffadingimages}

{block:ifmonochromeimages}
.photo img {-webkit-filter:grayscale(100%); filter:grayscale(100%);}
.posts:hover .photo img {-webkit-filter:grayscale(0%); filter:grayscale(0%);}
{/block:ifmonochromeimages}

.posts img, .photo img {display:block;}
.set {margin-bottom:-10px;}
.caption {margin:0px;}
.tumblr_video_container {width:auto!important; height:auto!important;}
.photo a {padding-bottom:0px; border-bottom:0px solid transparent;}
.photo, .video {margin:0px -10px; border-bottom:1px solid {color:Post Borders};}

/* text, link, quote posts */
 
.quote {
    padding:15px;
    margin:0px -10px;
    text-align:center;
    font:italic normal 14px/150% 'Open Sans', sans-serif;
    background:{color:Content Backgrounds};
    color:{color:Post Title};
    letter-spacing:0px;
}

.quote .mark {font-size:15px; margin:0px; font-style:normal;}
 
.sourcez {
    margin:0px -10px;
    padding:10px;
    text-align:center;
    border-top:1px solid {color:Post Borders};
}
 
.headt, .llp {
    padding:10px;
    margin:0px -10px;
    background:{color:content backgrounds};
    border-top:1px solid {color:post borders};
    border-bottom:1px solid {color:post borders};
    color:{color:post title};
    text-align:center;
    font:normal 14px/150% 'Open Sans', sans-serif;
}

.jrc, .llp {position:relative; transition:0.7s ease-in-out;}
.jrc {display:inline-block; padding:0px; overflow:hidden;}

.jrc::after {
    content:"";
    position:absolute;
    height:2px;
    margin-top:0px;
    width:100%;
    top:50%; left:0;
    background:{color:Accent};
    -webkit-transform:translate3d(-100%, 0, 0);
    -ms-transform:translate3d(-100%, 0, 0);
    transform:translate3d(-100%, 0, 0);
    transition:0.3s ease-in-out;
}
 
.llp:hover .jrc::after {
    -webkit-transform:translate3d(100%, 0, 0);
    -ms-transform:translate3d(100%, 0, 0);
    transform:translate3d(100%, 0, 0);
}
 
.jrc::before {
    content:attr(data-hover);
    position:absolute;
    z-index:2;
    width:0;
    overflow:hidden;
    color:{color:Accent};
    white-space:nowrap;
    transition:0.3s ease-in-out 0.3s;
}
 
.llp:hover .jrc::before {width:100%;}
.llp:hover .jrc {color:{color:Accent};}

/* ask posts */
 
div.asker {
    padding:0px;
    text-transform:lowercase;
    display:inline-block;
    vertical-align:middle;
    font:normal 10px/25px 'Open Sans', sans-serif;
    transition:0.3s ease-in-out;
    color:{color:Bold};
}
 
div.asker a {color:{color:Bold};}
div.asker:hover {border-color:{color:Borders};}
div.asker:hover a, div.asker:hover a:hover {color:{color:Links};}
 
.askerp, .askerp:hover {
    width:14px;
    height:14px;
    line-height:0;
    font-size:15px;
    vertical-align:middle;
    border-radius:100%;
    margin:0px 5px 0px 34px;
    display:inline-block;
    border:1px solid {color:post borders};
    background:{color:content backgrounds};
    color:{color:Accent};
    padding:5px;
}
 
hr.askdivide {
    margin:6px -10px 0px -10px; 
    color:{color:post borders}; 
    background:{color:post borders}; 
    padding:0px 10px;
} 
 
.tri {
    width:0px;
    height:0px;
    border-style:solid;
    border-width:12px 12px 0 12px;
    border-color:{color:post borders} transparent transparent transparent;
    display:inline-block;
    position:absolute;
    margin:-16px 0px 0px 35px;
    z-index:1;
}
 
.tri::before {
    content:"";
    width:0px;
    height:0px;
    border-style:solid;
    border-width:10px 10px 0 10px;
    border-color:{color:content backgrounds} transparent transparent transparent;
    margin:-12px 0px 0px -10px;
    display:inline-block;
    position:absolute;
}
 
.question {
    display:block;
    padding:10px 15px;
    margin:0px -10px 15px -10px;
    background:{color:content backgrounds};
    border-bottom:1px solid {color:post borders};
}

/* audio posts */
 
.apbase {height:60px; position:relative;}

.spotify_audio_player {
    height:80px!important;
    width:100%!important;
}

.bandcamp_audio_player {
    height:120px!important;
    width:100%!important;
}
 
.musicinfo {
    position:relative;
    z-index:2;
    height:50px;
    padding:5px 15px;
    overflow:hidden;
    margin:0px -10px;
    padding-left:50px;
    text-transform:uppercase;
    font:normal 8px/150% 'Open Sans', sans-serif;
    width:calc({select:post size}px - 65px);
    background:{color:content backgrounds};
    border-top:1px solid {color:post borders};
    border-bottom:1px solid {color:post borders};
    align-items:center;
    display:flex;
}

.musicinfo div {padding-left:5px;}
.musicinfo i {font-style:normal; color:{color:Text};}

.musicinfo span.oi {
    font-size:12px;
    display:inline-block;
    vertical-align:middle; 
    color:{color:Accent};
    line-height:0px;
    width:16px;
    text-align:center;
}

.musicinfo span.oi-disc {margin-left:2px;}

.musicinfo b {
    display:block;
    text-transform:capitalize;
    font:normal 10px/150% 'Open Sans', sans-serif;
    color:{color:Post Title};
}

.musicinfo b span.oi {font-size:15px;}
 
.tplayer {
    width:30px;
    height:26px;
    overflow:hidden;
    position:absolute;
    margin:17px 5px;
    z-index:99999;
}

.tumblr_audio_player {
    max-width:500px!important;
    margin-left:-5px!important;
    margin-top:-10px!important;
    transform:scale(0.5,0.5);
    transform-origin:0 0;
    -webkit-transform-origin:0 0;
    -webkit-transform:scale(0.5,0.5);
}

{block:ifnotlighttheme}
.tplayer {-webkit-filter:invert(100%); filter:invert(100%);}
{/block:ifnotlighttheme}

/* chat posts */
 
.label {
    line-height:180%;
    padding:5px 15px 10px 15px;
    margin:5px -10px 0px -10px;
    border-bottom:1px solid {color:Post Borders};
}
 
.label span {padding:2px 5px 2px 0px; background:{color:Content Backgrounds}; box-shadow:-5px 0px 0px {color:Content Backgrounds};}
.label:nth-of-type(odd) span{color:{color:Chat Odd};font-weight:700;}
.label:nth-of-type(even) span{color:{color:Chat Even};font-weight:700;}
.label:last-of-type {border-bottom:none;}

/* ------ permalinks ------ */

/* top permalinks */

.permatop {
    padding:10px;
    text-transform:lowercase;
    letter-spacing:0.2px;
    font:600 10px/150% 'Open Sans', sans-serif;
    border-bottom:1px solid {color:Post Borders};
    margin-bottom:-1px;
    position:relative;
}

.permatop a.src {color:{color:Post Title}; display:inline-block; vertical-align:middle; line-height:16px; margin-top:-1px;}

.permatop img.sci {
    border-radius:100%;
    width:16px; 
    height:16px;
    display:inline-block;
    vertical-align:middle;
    margin-right:5px;
}

.permatop a.insta, .permatop a.rbg, .permatop span.sl {
    float:right; 
    margin-left:5px;
    color:{color:Text};
    font:normal 9px/16px 'Open Sans', sans-serif;
}

.permatop a:hover {color:{color:Links Hover};}

/* bottom permalinks */

.permalink, .permatags {
    padding:10px;
    border-top:1px solid {color:post borders};
    border-radius:0px 0px 3px 3px;
    background:{color:Posts};
    position:relative;
    z-index:9;
}

.permalink {height:16px; line-height:16px; padding:10px 15px;}
.permatags {height:auto; line-height:150%; padding-left:30px;}
.permatags span.oi-tags {position:absolute; left:10px; font-size:15px;}

.permatags a {
    display:inline;
    color:{color:Text}; 
    font:9.5px 'Open Sans', sans-serif;
    margin-right:5px;
}

.permalink .like {
    width:16px;
    height:16px;
    line-height:0px;
    position:relative;
    display:inline-block;
    vertical-align:top;
}

.permalink .like span.oi {
    width:16px;
    height:16px;
    margin-top:0px;
    position:relative;
    display:block;
    font-size:16px;
    text-align:center;
    color:{color:Text};
    transition:0.3s ease-in-out;
}

.permalink .like:hover span.oi-heart {color:{color:Link};}
.permalink .like_button.liked + span.oi-heart::before {content:"\e892"}
.permalink .like_button.liked + span.oi-heart {color:{color:Accent};}

.permalink .like_button {
    position:absolute;
    top:-1px; bottom:0;
    left:0; right:0;
    z-index:9999999;
    margin:0px;
    opacity:0;
}

.permalink a.reblog {
    position:relative;
    display:inline-block;
    vertical-align:top;
    margin-left:7px;
    height:16px;
    padding:0px;
    margin-top:-1px;
    font:normal 9px/16px 'Open Sans', sans-serif;
    color:{color:Text};
}

.permalink a.reblog:hover {color:{color:Links Hover};}

/* tags */

.ctags {float:right; position:relative; margin-top:-1px; height:15px;}

.ctags div {
    width:3px;
    height:3px;
    border:1px solid {color:Text};
    margin:5px 1px;
    border-radius:100%;
    display:block;
    float:left;
    transition:0.5s ease-in-out;
}

.ctags:hover div {border-color:{color:Links Hover};}

.ctags.act::after {
    right:-20px;
    top:0px;
    border-width:8px 12px 8px 0px;
    border-color:transparent {color:Post Borders} transparent transparent;
}

.indextags {
    max-width:125px;
    right:-5px;
    top:18px;
    position:absolute;
    background:{color:Posts};
    border:1px solid {color:Post Borders};
    border-radius:3px;
    -webkit-transform:translate(100%,-50%);
    -ms-transform:translate(100%,-50%);
    transform:translate(100%,-50%);
    box-shadow:2px 2px rgba({RGBcolor:Post Shadows},0.1);
    max-height:100px;
    overflow:auto;
}

.indextags a {
    display:block;
    padding:2px 5px;
    border-bottom:1px solid {color:Post Borders};
    font:normal 8px/150% 'Open Sans', sans-serif;
    color:{color:Text};
    text-transform:uppercase;
}

.indextags a:hover {background:{color:Content Backgrounds};}
.indextags a:last-of-type {border-bottom-width:0px;}
 
/* post notes */
 
ol.notes {
    font:normal 8px/20px 'Open Sans', sans-serif;
    width:{select:Post Size}px;
    padding:0px 0px 0px 0px;
    list-style-type:none;
    text-transform:uppercase;
    position:relative;
    display:block;
    margin:0px 0px 0px 30px;
}

ol.notes::before, ol.notes::after {top:4px;}
 
ol.notes li.note {
    padding:2px 5px;
    letter-spacing:0.5px;
    margin-top:3px;
    display:block;
    border-bottom:1px solid {color:Post Borders};
}
 
ol.notes li.note img, ol.notes li.note img.avatar {
    width:16px; height:16px;
    margin:0px 4px 1px 0px;
    display:inline-block;
    vertical-align:middle;
    border-radius:100%;
}
 
ol.notes li.note.answer_content {font-weight:400;}

ol.notes li.note blockquote {
    padding:3px 5px; 
    margin:5px 0px 3px 7px;
    background:transparent; 
    border:0px solid transparent;
    border-left:1px solid {color:borders};
}

ol.notes li.note blockquote a {text-decoration:none;}

/* ------ pagination ------ */

footer {
    position:fixed;
    z-index:100;
    background:{color:Bottom Bar};
    border-top:5px solid {color:Accent};
    box-shadow:0px -3px 5px rgba(0,0,0,0.1);
    text-align:center;
    padding:10px 0px;
    height:20px;
    width:100%;
    bottom:0px;
    left:0px;
}

.fish {z-index:-1; position:absolute; width:100%; height:40px; top:0;}
#pagination {text-align:center; display:inline; font:600 12px/20px 'Open Sans', sans-serif;}

#pagination a, #pagination span {
    width:12px;
    font-size:12px;
    padding:3px;
    margin:0px 1px;
    border-radius:100%;
    display:inline-block;
    vertical-align:top;
    line-height:12px;
    color:{color:Bottom Bar Text};
    border:1px solid transparent;
}

#pagination span.current_page {
    background:{color:Accent};
    color:{color:Accent Text};
}

#pagination a i {color:{color:Bottom Bar Text}; transition:0.3s;}
#pagination a:hover i {color:{color:Accent Text};}

#pagination a.next, #pagination a.prev {
    width:14px;
    font-size:14px;
    line-height:14px;
    padding:2px;
}

/* ------ header ------ */

header {
    position:relative;
    margin:50px 0px 0px 280px;
    width:{select:Post Size}px;
    -webkit-animation:fadein 1s;
    animation:fadein 1s;
}

header img.top {display:block; width:{select:post size}px;}
#desc {padding:15px; font-size:10px; position:relative;}

#title {
    font:bold 12px/15px 'Open Sans', sans-serif;
    text-transform:uppercase;
    color:{color:Post Title};
}

#title span.oi {
    font-size:15px;
    line-height:0px; 
    display:inline-block; 
    vertical-align:middle;
    margin-right:3px;
    color:{color:Accent};
}

#title span.oi::before {line-height:0px;}
.oi-none, .oi-none::before {display:none!important;}

.subt {
    text-transform:lowercase;
    font:italic normal 10px/15px 'Open Sans', sans-serif;
    margin:3px 0px 0px 0px;
    letter-spacing:0.3px;
    color:{color:Text};
}

#desc p {margin:5px 0px;}
#desc p:first-of-type {margin-top:0px;}

/* ------ sidebar ------ */

aside {
    position:fixed;
    margin-left:0px;
    z-index:999;
    width:200px;
    top:20%;
    border-radius:3px;
    -webkit-animation:fadein 1s;
    animation:fadein 1s;
}

aside img.side {display:block; margin:0; width:200px; border-radius:3px 3px 0px 0px;}

/* navigation popup link */

#sctm {
    position:absolute;
    font-size:25px;
    right:-60px;
    padding:5px;
    width:24px;
    height:24px;
    margin-top:20px;
    background:{color:Accent};
    border:3px double {color:Posts};
    border-radius:100%;
    color:{color:Accent Text};
    z-index:214748364789;
    transition:0.3s ease-in-out;
}

#sctm .oi {margin:-0.5px;}

aside::after {
    border-width:10px 0px 10px 15px;
    border-color:transparent transparent transparent {color:Post Borders};
    right:-15px;
    top:31px;
}

aside:hover #sctm:hover, #sctm.open {border-color:{color:Accent Hover};}

/* music player */

#music {
    position:absolute;
    width:20px;
    height:25px;
    left:-15px;
    margin-top:5px;
    white-space:nowrap;
    overflow:hidden;
    transition:0.5s ease-in-out;
}

#music img.play {
    display:block;
    width:20px; 
    height:20px; 
    transition:0.5s ease-in-out; 
    position:absolute;
}

.billy {
    width:50px;
    height:20px;
    overflow:hidden; 
    transition:0.5s ease-in-out;
    opacity:0;
    margin-top:5px;
}

#music:hover {width:50px; margin-left:-40px;}
#music:hover .play {margin-left:50px;}
#music:hover .billy {opacity:1;}

/* description */

.block {
    padding:0px 10px; 
    border-top:35px solid {color:Posts};
    border-bottom:10px solid {color:Posts};
    outline:1px solid {color:Post Borders}; 
    margin-bottom:1px;
    font-size:9.5px; 
    line-height:160%;
    max-height:130px;
    overflow:auto;
    font-weight:normal;
}

/* search bar */

.search {
    padding:5px; 
    height:25px; 
    display:block; 
    overflow:auto; 
    background:{color:content backgrounds}; 
    border-radius:0px 0px 3px 3px;
}

.search form input[type="text"] {
    outline:none;
    width:135px;
    height:15px;
    line-height:15px;
    float:left;
    margin:0px;
    padding:4px 10px;
	background:{color:Posts};
    border:1px solid {color:Post Borders};
    border-right-width:0px;
    font-size:8px;
    letter-spacing:0.5px;
    font-weight:normal;
    text-transform:uppercase;
    display:inline-block;
    vertical-align:top;
	-webkit-appearance:none;
}

.search form button[type="submit"] {
    outline:none;
    float:left;
    padding:0px;
    margin:0px;
    width:33px;
    height:25px;
    line-height:0px;
    text-align:center;
    display:inline-block;
    vertical-align:top;
    background:{color:username highlight};
    border:1px solid {color:Post Borders};
    color:{color:Accent};
    font-size:15px;
}

/* user name */

.user {position:absolute; margin:10px;}

.user img {
    border-radius:100%;
    width:16px;
    height:16px;
    display:inline-block;
    vertical-align:middle;
    margin-right:5px;
}

.user a {
    font:600 10px/16px 'Open Sans', sans-serif;
    text-transform:lowercase;
    letter-spacing:0px;
    color:{color:Post Title};
    display:inline-block;
    vertical-align:middle;
}

.user a:hover {color:{color:Accent};}

/* ------ popup navigation ------ */

/* fade layer */

#fade {
    width:100%;
    height:100%;
    position:fixed;
    top:0; bottom:0;
    left:0; right:0;
    background:rgba({RGBcolor:Background},0.9);
    display:none;
    z-index:999;
}

/* panel */

#links {
    display:none;
    z-index:10000;
    position:absolute;
    padding:10px 15px;
    right:calc(-{select:post size}px - 80px);
    width:calc({select:post size}px - 30px);
    font-size:10px;
    top:20px;
}

#links::before {
    left:-14px;
    top:10px;
    border-width:10px 14px 10px 0px;
    border-color:transparent {color:Post Borders} transparent transparent;
}

body.menu {overflow:hidden;}

/* main icon navigation links */

#links nav {margin:-5px; margin-top:0px;}

#links nav a {
    text-transform:uppercase;
    margin-right:5px;
    margin-bottom:5px;
    padding:0px 5px;
    display:inline-block;
    color:{color:text};
    transition:0.3s ease-in-out;
    font:600 9px 'Open Sans', sans-serif;
}

#links nav a i {
    transition:0.3s ease-in-out; 
    margin-right:3px;
    font-size:16px; 
    line-height:0px;
    display:inline-block;
    vertical-align:middle;
    background:{color:Content Backgrounds};
    padding:2px;
    border-radius:100%;
}

#links nav a:hover i {
    background:transparent;
    -webkit-transform:scale(1.5,1.5);
    -ms-transform:scale(1.5,1.5);
    transform:scale(1.5,1.5);
}

#links nav a:hover {border-radius:3px;color:{color:Links Hover};}
#links nav a span {line-height:12px; vertical-align:middle; display:inline-block;}

/* stats counter */

#links .ext, #links .drop {
    margin:10px -15px 0px -15px;
    padding:10px 15px 0px 15px;
    border-top:1px solid {color:Post Borders};
}

#links .ext span.count {
    display:inline-block;
    margin-right:10px;
    font:normal 8px 'Open Sans';
    text-transform:uppercase;
    letter-spacing:0.5px;
}

#links .ext a {border-bottom:1px solid {color:Post Borders};}
#links .ext a:hover {border-color:{color:Links};} 
#links .ext span.count b, #updt .stat b.st {background:{color:Content Backgrounds}; padding:1px 3px;}

/* dropdown links */

#links .drop a::before, #links .drop a::after {
	opacity:0;
	display:inline-block;
	color:{color:Accent};
	transition:all 0.3s ease-in-out;
}

#links .drop a::before {
	margin-right:5px;
	content:"[";
	-webkit-transform:translateX(20px);
	-ms-transform:translateX(20px);
	transform:translateX(20px);
}

#links .drop a::after {
	margin-left:5px;
	content:"]";
	-webkit-transform:translateX(-20px);
	-ms-transform:translateX(-20px);
	transform:translateX(-20px);
}

#links .drop a:hover::before, #links .drop a:hover::after,
#links .drop a:focus::before, #links .drop a:focus::after {
	opacity:1;
	-webkit-transform:translateX(0px);
	-ms-transform:translateX(0px);
	transform:translateX(0px);
}

#links .drop {text-transform:uppercase;}

#links .drop a {
    font:normal 9px/200% 'Open Sans', sans-serif;
    text-transform:uppercase; 
    color:{color:Links};
    display:inline-block;
}

#links .drop a:hover {color:{color:Links Hover};}

/* updates panel */

#updt {
    margin:20px -15px;
    position:absolute;
    padding:5px 15px;
    width:calc({select:post size}px - 30px);
    font:normal 9.5px/160% 'Open Sans', sans-serif;
}

#updt .panel {
    margin:0px -15px;
    padding:10px 15px;
    border-bottom:1px solid {color:Post Borders};
}

#updt .panel:last-of-type {border-bottom:none;}
#updt .stat {display:block; margin:1px 0px;}
#updt .stat b.st {font-size:8px; text-transform:uppercase;}

#pagination a {
    background-image:url('https://static.tumblr.com/p0knose/48yogizmd/000000-0.png'); 
    background-size:400px 400px; 
    background-attachment:fixed;
}

#pagination a:hover {
    background-image:url('https://static.tumblr.com/p0knose/lpbogkmvq/tumblr_inline_nhjevixli11rj4inb.gif');
    transition-duration:0.3s;
    color:#fff;
}

#pagination a:hover {border-color:{color:Accent};}

.posts:hover::before, header:hover #desc::before, aside:hover #sctm, ol.notes:hover::before, #sctm.open {
    background:{color:Accent Hover};
    color:{color:Accent Text};
}
 
{CustomCSS}
 
</style>

<!---------------------- JQUERY - DO NOT TOUCH ----------------------->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/fitvids/1.2.0/jquery.fitvids.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.6/SmoothScroll.min.js"></script>

<script src="https://static.tumblr.com/2b2izpj/cB7ogqs8l/jquery.initialize.js"></script>
<script src="https://static.tumblr.com/iuw14ew/VSQma1786/jquery.style-my-tooltips.js"></script>
<script src="https://static.tumblr.com/qudkd6d/Az6nkemqr/pxuphotoset.min.js"></script>
<script src="https://static.tumblr.com/p0knose/yCUog5yeo/unnest.min.js"></script>
<script src="https://static.tumblr.com/i5s2zks/9Acok8oo2/bct-timeago.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/orbitalnight/magnusthemes@master/assets/themes/mercurial.js"></script>

<script>
$(document).ready(function(){
    $(".posts").find("a.src.ori").html("{Name}"); 
    $(".posts").find(".soundcloud_audio_player").soundCloud({
        accentColour:"{color:Accent}"
    });
    $('iframe.tumblr_audio_player').load(function(){
        $(this).contents().find("head").append("<style type='text/css'> .audio-player {background:transparent !important;} .icon {color:{color:Accent}!important;} </style>");
    });
	$(".text").find("a.read_more").parent("p").addClass("rm");
    {block:IndexPage}
    $("a.insta").timeAgo();
    // index page tags script
    $(".indextags").hide();
    $(".ctags").phantomTags();
    var container = new Array();
    var parents = new Array();
    container.push($('.indextags'));
    parents.push($('.ctags'));
    $(document).mouseup(function(e){
        $.each(parents, function(key, value){
            var $this = $(value);
            if (!$this.is(e.target) && $this.has(e.target).length == 0){
                $.each(container, function(key,value){
                    if(!$(value).is(e.target) && $(value).has(e.target).length == 0)
                    $this.removeClass("act");
                    $(value).fadeOut();
                });
            }
        });
    });
    {block:ifshortencaptions}
    // truncate text posts script
    $(".tumblr_parent").initialize(function(){
        $(".text").not(":has(p.rm)").each(function(){
            var postLength = $.trim($(this).text()).split(" ").length;
            var postHeight = $(this).innerHeight();
            var overflowClass = "overflow",
                buttonClass = "contin",
                text = "Continue reading...";
            if (postLength >= 800 || postHeight >= 600){
                var $src = $(this).find("a.tumblr_blog").first();
                var slicePara = $(this).find(".tumblr_parent").first().children().not($src).slice(0,3);
                $(this).find(".tumblr_parent").slice(1).remove();
                $(this).find(".tumblr_parent").children().not($src).remove();
                $(this).find(".tumblr_parent").append(slicePara);
                $(this).css({"overflow":"hidden"});
                $(this).append('<p class="'+overflowClass+'"><a href="#" class="'+buttonClass+'">'+ text +'</a></p>');
                var permaLink = $(this).parents(".posts").find("a.insta").attr("href");
                $(this).find(".contin").attr("href", permaLink);
            };
        });
    });
    {/block:ifshortencaptions}
    {/block:IndexPage}
    {block:ifdropdownnavigation}
    $("#links .drop").hide();
    $("#menu").viktorN();
    {/block:ifdropdownnavigation}
});
</script>

<!-- end jquery -->
 
</head>
<body>

<div id="fade"></div>

{block:Pagination}
<footer>
    {block:iffishwidget}
    <div class="fish">
        <object type="application/x-shockwave-flash" style="outline:none;" data="https://cdn.abowman.com/widgets/fish/fish.swf?up_fishColor1=F45540&up_backgroundImage=https://&up_fishColor3=F45540&up_fishColor9=F45540&up_fishColor10=F45540&up_fishName=Fish&up_fishColor5=F45540&up_numFish=6&up_fishColor4=F45540&up_fishColor2=F45540&up_fishColor8=F45540&up_foodColor=9A9A9A&up_fishColor6=F45540&up_fishColor7=F45540&up_backgroundColor=000000&" width="100%" height="40"><param name="movie" value="https://cdn.abowman.com/widgets/fish/fish.swf?up_fishColor1=F45540&up_backgroundImage=https://&up_fishColor3=F45540&up_fishColor9=F45540&up_fishColor10=F45540&up_fishName=Fish&up_fishColor5=F45540&up_numFish=6&up_fishColor4=F45540&up_fishColor2=F45540&up_fishColor8=F45540&up_foodColor=9A9A9A&up_fishColor6=F45540&up_fishColor7=F45540&up_backgroundColor=000000&"></param><param name="AllowScriptAccess" value="always"></param><param name="wmode" value="opaque"></param><param name="scale" value="noscale"/><param name="salign" value="tl"/></object>
    </div>
    {/block:iffishwidget}
    <div id="pagination">
        {block:PreviousPage}<a href="{PreviousPage}" class="prev"><i class="oi oi-{select:pagination icons}-left"></i></a>{/block:PreviousPage}
        {block:JumpPagination length="5"}
        {block:CurrentPage}<span class="current_page">{PageNumber}</span>{/block:CurrentPage}
        {block:JumpPage}<a class="jump_page" href="{URL}">{PageNumber}</a>{/block:JumpPage}
        {/block:JumpPagination}
        {block:NextPage}<a href="{NextPage}" class="next"><i class="oi oi-{select:pagination icons}-right"></i></a>{/block:NextPage}
    </div>
</footer>
{/block:Pagination}

<!------ main container ------>
<div id="container">

{block:IndexPage}
<!------ header ------>
<header>
    {block:ifheaderimage}<img src="{image:header}" class="top"/>{/block:ifheaderimage}
    
    <!-- title/subt -->
    <div id="desc">
        <div id="title">{Title}</div>
        {block:ifsubtitle}<div class="subt">{text:subtitle}</div>{/block:ifsubtitle}
    </div><!--desc-->
    
</header>
{/block:IndexPage}


<!------ SIDEBAR ------>
<aside>
    <!-- navigation link -->
    <a href="#" id="sctm" title="navigate..."><span class="oi oi-menu"></span></a>
    
    <!------ popup ------>
    <section id="links">
    
        <!-- main navigation -->
        <nav>
            <a href="/"><i class="oi oi-home"></i> <span>home</span></a>
            {block:AskEnabled}<a href="/ask"><i class="oi oi-mail"></i> <span>inbox</span></a>{/block:AskEnabled}
            {block:SubmissionsEnabled}<a href="/submit"><i class="oi oi-pencil"></i> <span>submit</span></a>{/block:SubmissionsEnabled}
            <a href="/archive"><i class="oi oi-calendar"></i> <span>archives</span></a>
            {block:ifdropdownnavigation}<a href="#" id="menu"><i class="oi oi-gear"></i> <span>navigation</span></a>{/block:ifdropdownnavigation}
        </nav>
        
        <!-- dropdown links -->
        <div class="drop">
            {block:iflink1}<a href="{text:link 1 url}">{text:link 1}</a>{/block:iflink1}
            {block:iflink2}<a href="{text:link 2 url}">{text:link 2}</a>{/block:iflink2}
            {block:iflink3}<a href="{text:link 3 url}">{text:link 3}</a>{/block:iflink3}
            {block:iflink4}<a href="{text:link 4 url}">{text:link 4}</a>{/block:iflink4}
            {block:iflink5}<a href="{text:link 5 url}">{text:link 5}</a>{/block:iflink5}
            {block:iflink6}<a href="{text:link 6 url}">{text:link 6}</a>{/block:iflink6}
            {block:iflink7}<a href="{text:link 7 url}">{text:link 7}</a>{/block:iflink7}
            {block:iflink8}<a href="{text:link 8 url}">{text:link 8}</a>{/block:iflink8}
            {block:iflink9}<a href="{text:link 9 url}">{text:link 9}</a>{/block:iflink9}
            {block:iflink10}<a href="{text:link 10 url}">{text:link 10}</a>{/block:iflink10}
            {block:iflink11}<a href="{text:link 11 url}">{text:link 11}</a>{/block:iflink11}
            {block:iflink12}<a href="{text:link 12 url}">{text:link 12}</a>{/block:iflink12}
        </div>
        
        {block:ifvisitorcounters}
        <!-- stats/extra -->
        <div class="ext">
            {block:ifonlinecounter}<span class="count"><b>online</b> {text:Online counter}</span>{/block:ifonlinecounter}
            {block:ifhitcounter}<span class="count"><b>hits</b> {text:Hit counter}</span>{/block:ifhitcounter}
            <span class="count"><b>theme</b> <a href="https://magnusthemes.tumblr.com">magnusthemes</a></span>
        </div>
        {/block:ifvisitorcounters}
        
        <!-- updates popup -->
        {block:ifupdatespanel}
        <div id="updt">
            <div class="panel">
                {block:ifupdate1}<span class="stat"><b class="st">{text:update 1}</b> {text:update 1 text}</span>{/block:ifupdate1}
                {block:ifupdate2}<span class="stat"><b class="st">{text:update 2}</b> {text:update 2 text}</span>{/block:ifupdate2}
                {block:ifupdate3}<span class="stat"><b class="st">{text:update 3}</b> {text:update 3 text}</span>{/block:ifupdate3}
                {block:ifupdate4}<span class="stat"><b class="st">{text:update 4}</b> {text:update 4 text}</span>{/block:ifupdate4}
                {block:ifupdate5}<span class="stat"><b class="st">{text:update 5}</b> {text:update 5 text}</span>{/block:ifupdate5}
            </div>
            {block:ifextratext}
            <div class="panel">
                {text:extra text}
            </div>
            {/block:ifextratext}
        </div>
        {/block:ifupdatespanel}
        
    </section><!--links-->
    
    {block:ifsidebarimage}
    <!-- sidebar image -->
    <img src="{image:sidebar}" class="side"/>
    {/block:ifsidebarimage}
    
    <!-- username -->
    <div class="user">
        <img src="{PortraitURL-64}"/>
        {block:ifnotblogname}<a href="/">{Name}</a>{/block:ifnotblogname}{block:ifblogname}<a href="/">{text:blog name}</a>{/block:ifblogname}
    </div>
    
    {block:ifbillycode}
    <!-- music player -->
    <div id="music">
        <img class="play" src="https://31.media.tumblr.com/3defe783cb9a0f3f2b7f78cbe474654a/tumblr_inline_og47ugNvMv1rj4inb_500.gif"/>
        <div class="billy">
            {text:billy code}
        </div>
    </div>
    {/block:ifbillycode}
    
    <!-- description -->
    <div class="block">
        {Description}
    </div>
    
    <!-- search bar -->
    <div class="search">
        <form action="/search" method="get" class="sb">
            <input type="text" name="q" value="" placeholder="search..." class="field"/>
            <button type="submit" class="press"><i class="oi oi-search"></i></button>
        </form>
    </div><!--search-->
</aside><!--sidebar-->
 
<!------ posts ------>
<section id="postmargin">

{block:Posts}
<article class="posts" id="{PostID}">

    <div class="permatop">
        {block:RebloggedFrom}
        <img class="sci" src="{ReblogRootPortraitURL-64}"/>
        <a class="src reb" href="{ReblogRootURL}">{ReblogRootName}</a>
        {block:PermalinkPage}
        <a class="rbg" href="{ReblogParentURL}">{ReblogParentName}</a>
        <span class="sl">/</span>
        {/block:PermalinkPage}
        {/block:RebloggedFrom}
        {block:NotReblog}
        <img class="sci" src="{PortraitURL-64}"/>
        <a class="src ori" href="{Permalink}">{Name}</a>
        {/block:NotReblog}
        {block:IndexPage}
        <a href="{Permalink}" class="insta"{block:NoteCount} title="+ {NoteCountWithLabel}"{/block:NoteCount}>{TimeStamp}</a>
        {/block:IndexPage}
        {block:PermalinkPage}
        {block:NoteCount}
        <a class="rbg">{NoteCountWithLabel}</a>
        <span class="sl">/</span>
        {/block:NoteCount}
        <a href="{Permalink}" class="insta">{TimeAgo}</a>
        {/block:PermalinkPage}
    </div>
 
    <div class="container">
    {block:Text}
    {block:Title}<div class="headt">{Title}</div>{/block:Title}
    <div class="text body">
        {Body}
    </div>
    {/block:Text}
     
    {block:Photo}
    {block:IndexPage}
    <div class="photo">
        <meta name="{PhotoAlt}" content="{PhotoAlt}"/>
        <a href="{PhotoURL-HighRes}" class="photolight" data-width="{PhotoWidth-HighRes}" data-height="{PhotoHeight-HighRes}" data-lowres="{PhotoURL-500}" data-highres="{PhotoURL-HighRes}"><center><img src="{PhotoURL-HighRes}"></center></a>
    </div>
    {/block:IndexPage}
    {block:PermalinkPage}
    <div class="photo">
        <meta name="{PhotoAlt}" content="{PhotoAlt}"/>
		{LinkOpenTag}<img src="{PhotoURL-HighRes}">{LinkCloseTag}
	</div>
    {/block:PermalinkPage}
    {block:ifnothidecaptions}{block:Caption}<div class="text caption">
        {Caption}
    </div>{/block:Caption}{/block:ifnothidecaptions}
    {block:ifhidecaptions}{block:permalinkpage}
    {block:Caption}<div class="text caption">
		{Caption}
	</div>{/block:Caption}
    {/block:permalinkpage}{/block:ifhidecaptions}
    {/block:Photo}
     
    {block:Panorama}
    <div class="photo">
        <a href="{PhotoURL-Panorama}" class="photolight" data-width="{PhotoWidth-Panorama}" data-height="{PhotoHeight-Panorama}" data-lowres="{PhotoURL-500}" data-highres="{PhotoURL-Panorama}"><img src="{PhotoURL-1280}" width="{select:post size}"></a>
    </div>
    {block:ifnothidecaptions}{block:Caption}<div class="text caption">
        {Caption}
    </div>{/block:Caption}{/block:ifnothidecaptions}
    {block:ifhidecaptions}{block:permalinkpage}
    {block:Caption}<div class="text caption">
		{Caption}
	</div>{/block:Caption}
    {/block:permalinkpage}{/block:ifhidecaptions}
    {/block:Panorama}
     
    {block:Photoset}
    <div class="photo"><div class="set">
    <div class="photo-slideshow" id="photoset_{PostID}" data-layout="{PhotosetLayout}">
        {block:Photos}
        <div class="photo-data">
            <div class="pxu-photo">
                <img src="{PhotoURL-500}" width="{PhotoWidth-500}" height="{PhotoHeight-500}" data-highres="{PhotoURL-HighRes}" data-width="{PhotoWidth-HighRes}" data-height="{PhotoHeight-HighRes}">
            </div>
            <a class="tumblr-box" rel="post-{PostID}" href="{PhotoURL-HighRes}"></a>
        </div>
        {/block:Photos}
    </div><!--slideshow-->
	</div></div><!--photoset-->
    {block:ifnothidecaptions}{block:Caption}<div class="text caption">
        {Caption}
    </div>{/block:Caption}{/block:ifnothidecaptions}
    {block:ifhidecaptions}{block:permalinkpage}
    {block:Caption}<div class="text caption">
		{Caption}
	</div>{/block:Caption}
    {/block:permalinkpage}{/block:ifhidecaptions}
    {/block:Photoset}
 
    {block:Quote}
    <div class="quote">
        <span class="mark">❝</span>
        {Quote}
        <span class="mark">❞</span>
    </div>
    {block:Source}<div class="sourcez">{Source}</div>{/block:Source}
    {/block:Quote}
 
    {block:Link}
    <a href="{URL}" {Target}><div class="llp"><div class="jrc" data-hover="{Name} &rsaquo;">{Name} &rsaquo;</div></div></a>
    {block:Description}<div class="text body">
        {Description}
    </div>{/block:Description}
    {/block:Link}
 
    {block:Chat}
    {block:Title}<div class="headt">{Title}</div>{/block:Title}
    {block:Lines}<div class="label">
    {block:Label}<span>{Label}</span>{/block:Label} {Line}</div>
    {/block:Lines}
    {/block:Chat}
 
    {block:Audio}
    <div class="apbase">
    <div class="tplayer">
        {block:AudioEmbed}
        {AudioEmbed}
		{/block:AudioEmbed}
    </div>
    <div class="musicinfo"><div>
        {block:TrackName}<b><span class="oi oi-music"></span> {TrackName}</b>{/block:TrackName}
        {block:Artist}<span class="oi oi-user"></span> {Artist}{/block:Artist}
        {block:Album}<span class="oi oi-disc"></span> <i>{Album}</i>{/block:Album}
    </div></div>
    </div>
    <div class="audiocaption">
    {block:ifnothidecaptions}{block:Caption}<div class="text caption">
        {Caption}
    </div>{/block:Caption}{/block:ifnothidecaptions}
    {block:ifhidecaptions}{block:permalinkpage}
    {block:Caption}<div class="text caption">
		{Caption}
	</div>{/block:Caption}
    {/block:permalinkpage}{/block:ifhidecaptions}
    </div>
    {/block:Audio}
 
    {block:Video}
    <div class="video">{Video-500}</div>
    {block:ifnothidecaptions}{block:Caption}<div class="text caption">
        {Caption}
    </div>{/block:Caption}{/block:ifnothidecaptions}
    {block:ifhidecaptions}{block:permalinkpage}
    {block:Caption}<div class="text caption">
		{Caption}
	</div>{/block:Caption}
    {/block:permalinkpage}{/block:ifhidecaptions}
    {/block:Video}
 
    {block:Answer}
    <div class="question">{Question}</div>
    <div class="tri"></div>
    <div class="askerp"><span class="oi oi-help"></span></div>
    <div class="asker">{Asker}</div>
    <hr class="askdivide">
    <div class="text">
		{Answer}
	</div>
    {/block:Answer}
</div><!-- CONTAINER -->

{block:IndexPage}
<div class="permalink">
    <div class="like">
        {LikeButton size="15" color="grey"}
        <span class="oi oi-heart"></span>
    </div>
    <a href="{ReblogURL}" class="reblog">reblog this post...</a>
    {block:ifnothidetags}{block:HasTags}
    <a href="#" class="ctags" title="tags...">
        <div></div>
        <div></div>
        <div></div>
    </a>
    <div class="indextags">
        {block:Tags}<a href="{TagURL}">{Tag}</a>{/block:Tags}
    </div>
    {/block:HasTags}{/block:ifnothidetags}
</div>
{/block:IndexPage}
{block:PermalinkPage}
{block:HasTags}
<div class="permatags">
    <span class="oi oi-tags"></span>
    {block:Tags}<a href="{TagURL}">#{Tag}</a> {/block:Tags}
</div>
{/block:HasTags}
{/block:PermalinkPage}

</article><!--posts-->

{block:ContentSource}
<!-- {SourceURL}
{block:SourceLogo}<img src="{BlackLogoURL}"width="{LogoWidth}" height="{LogoHeight}" alt="{SourceTitle}" />{/block:SourceLogo}
{block:NoSourceLogo}{SourceLink}{/block:NoSourceLogo} -->
{/block:ContentSource}
<!--{block:NoRebloggedFrom}{block:RebloggedFrom}{ReblogParentName}{/block:RebloggedFrom}{/block:NoRebloggedFrom} -->
 
{block:PostNotes}
<div class="notes">
    <a name="notes">{PostNotes}</a>
</div>
{/block:PostNotes}
 
{/block:Posts}
</section><!--postmargin-->

</div>

{block:iffishwidget}
<script>
/* easycustomfish.min.js by magnusthemes@tumblr */
$(document).ready(function(){var a=$(".fish").find("object"),b=a.attr("data").split("&"),c=b[0].split("=")[0],d=b[2].split("=")[0],e=b[3].split("=")[0],f=b[4].split("=")[0],g=b[6].split("=")[0],h=b[8].split("=")[0],i=b[9].split("=")[0],j=b[10].split("=")[0],k=b[11].split("=")[0],l=b[12].split("=")[0],m=b[13].split("=")[0],n=b[14].split("=")[0],o="{color:Bottom Bar}",p=o.slice(1,7),q="{color:Fish}",r=q.slice(1,7),s="{color:Accent}",t=s.slice(1,7),u=c+"="+r+"&"+b[1]+"&"+d+"="+r+"&"+e+"="+r+"&"+f+"="+r+"&"+b[5]+"&"+g+"="+r+"&"+b[7]+"&"+h+"="+r+"&"+i+"="+r+"&"+j+"="+r+"&"+k+"="+t+"&"+l+"="+r+"&"+m+"="+r+"&"+n+"="+p+"&";a.attr("data",u),a.find('param[name="movie"]').attr("value",u)});
</script>
{/block:iffishwidget}
 
</body>
</html>
