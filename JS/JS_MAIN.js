$(document).ready(function(){
    

    $("[data-trigger='dropdown']").on("mouseenter",function(){
        var submenu = $(this).parent().find(".submenu");
        submenu.fadeIn(500);

        $(".profile-menu").on("mouseleave",function(){
            submenu.fadeOut(500);
        })
    })













})