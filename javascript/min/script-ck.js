function adjustnav(e){var t=window.innerHeight,i=document.documentElement.clientHeight,n=i,o=t/i;console.log("zoom: "+o),console.log("root viewport height: "+i),console.log("zoomed viewport height: "+t),console.log("windowheight: "+n),elementHeight=i/12*o,fontSize=elementHeight/2,console.log("elementHeight: "+elementHeight),$(".mobile_nav_item").css({height:0,"font-size":0,"line-height":0}),$(".mobile_nav_item").css({height:elementHeight+"px","font-size":fontSize+"px","line-height":elementHeight+"px"}),$(".mobile_nav_item2x").css({height:2*elementHeight+"px","font-size":fontSize+"px","line-height":elementHeight+"px"}),$(".mobile_nav_item3x").css({height:3*elementHeight+"px","font-size":fontSize+"px","line-height":elementHeight+"px"}),$(".accountfunctions").css({"font-size":fontSize/1.5+"px","line-height":fontSize+"px"})}var checkbox,search,scrollPos,elementHeight,fontSize;$(document).ready(function(){checkbox=$(".transitional_nav"),checkbox=$(".search"),adjustnav(checkbox),window.addEventListener("resize",adjustnav,!1),window.addEventListener("load",adjustnav,!1),window.addEventListener("scale",adjustnav,!1),window.addEventListener("zoomed",adjustnav,!1)}),$(".top_level_nav_item").change(function(){var e=$(this).attr("id");e="."+e,console.log(e);var t=$(this).siblings(e);if($(this).is(":checked")){var i=t.children("div").length;console.log("numChildren: "+i),console.log("height: "+elementHeight*i+"px"),t.css({height:elementHeight*i+"px"})}else t.css({height:elementHeight+"px"})});