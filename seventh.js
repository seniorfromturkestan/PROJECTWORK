$("#tabs>a").click( function () {
        
    $("#tabs>a").removeClass("current");
    $(this).addClass("current");
    
    $(".tabs_content>div").hide();
    t_content=$(this).attr("href");
    $(t_content).show();

    return false
})
    $("#tabs>a:first").trigger("click");