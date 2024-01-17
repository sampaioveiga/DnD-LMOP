$(document).ready(function(){
    //get initial dimensions
    let mapWidth = $("#content").width();
    let mapHeight = $("#content").height();

    // Map Zoom In
    $("#Zoom_In").click(function(){
        let width = $("#map").width();
        let height = $("#map").height();
        $(".mapItem").width(width*1.1).height(height*1.1);
    });

    $("#Zoom_Out").click(function(){
        let width = $("#map").width();
        let height = $("#map").height();
        $(".mapItem").width(width*.9).height(height*0.9);
    });

    $("#Zoom_0").click(function(){
        $("#map").width(mapWidth).height(mapHeight);
    });

    $(document).mousemove(function(event){
        $("span#w").text(event.pageX + ", " + (event.pageY-56));
    });
});