$(document).ready(function(){
    const pageWidth = $("#map").width();
    const pageHeight = $("#map").height();
    const fog02Width = $("#fog02").width();
    const fog02Height = $("#fog02").height();
    const fog03bWidth = $("#fog03b").width();
    const fog03bHeight = $("#fog03b").height();
    let zoomFactor = 1;
    let c1 = 190;
    let c2 = 360;
    let l3 = 413;
    let l4 = 767;

    $("#fog02").offset({top:l3*zoomFactor,left:(c2*zoomFactor)});
    $("#fog03b").offset({top:l4*zoomFactor,left:(c1*zoomFactor)});
    
    $("#Zoom_In").click(function(){
        zoomFactor = zoomFactor + .1;
        $("#map").width(pageWidth*zoomFactor).height(pageHeight*zoomFactor);
        $("#fog02").offset({top:l3*zoomFactor,left:(c2*zoomFactor)});
        $("#fog02").width(fog02Width*zoomFactor).height(fog2Height*zoomFactor);
    });

    $("#Zoom_Out").click(function(){
        zoomFactor = zoomFactor - .1;
        $("#map").width(pageWidth*zoomFactor).height(pageHeight*zoomFactor);
        $("#fog02").offset({top:l3*zoomFactor,left:(c2*zoomFactor)});
        $("#fog02").width(fog02Width*zoomFactor).height(fog02Height*zoomFactor);
    });

    $("#Zoom_0").click(function(){
        zoomFactor = 1;
        $("#map").width(pageWidth).height(pageHeight);
        $("#fog02").offset({top:l3*zoomFactor,left:(c2*zoomFactor)});
        $("#fog02").width(fog02Width*zoomFactor).height(fog02Height*zoomFactor);
    });

    $(document).mousemove(function(event){
        $("span#w").text(event.pageX + ", " + (event.pageY));
    });

    

});