$(document).ready(function(){
    $(document).mousemove(function(event){
        $("span#w").text("l: " + event.pageX + ", t: " + (event.pageY-55));
    });

    $("#front").click(function(){
        $('#modal-content').html("<img src='./maps/CragmawFront.jpg' width='768' height='432' /><p>Na fachada h&aacute; flecheiras visiveis. Pode haver guardas de vigila DC11 Furtividade</p>");
        $('#myModal').modal('show');
    });
    $("#bottom").click(function(){
        $('#modal-content').html("<img src='./maps/CragmawBottom.jpg' width='768' height='432' /><p>A porta est&aacute; trancada. DC15 Destreza abrir/DC25 Força </p>");
        $('#myModal').modal('show');
    });
    $("#top").click(function(){
        $('#modal-content').html("<img src='./maps/CragmawTop.webp' width='768' height='432' /><p>Abertura entre as ruínas DC10 Sabedoria</p>");
        $('#myModal').modal('show');
    });

    $("#fog02").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog03c").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog03b").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog04").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog05").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog06").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog07").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog08").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog09").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog10").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog11").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog12").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog13").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
    $("#fog14").dblclick(function(){
        $(this).fadeOut("slow");
        //add content
        $('#myModal').modal('show');
    });
});