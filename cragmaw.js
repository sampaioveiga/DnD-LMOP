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
    $("#grick").click(function(){
        $('#modal-content').html("<img src='./enemies/Grick_Big.jpg' width='768' height='432' />");
        $('#myModal').modal('show');
    });
    $("#owlbear").click(function(){
        $('#modal-content').html("<img src='./enemies/owlbear_big.jpg' width='768' height='432' />");
        $('#myModal').modal('show');
    });

    $("#fog02").dblclick(function(){
        $(this).fadeOut("slow");
        $('#modal-content').html("<img src='./maps/02.jpg' width='768' height='432' />");
        $('#myModal').modal('show');
    });
    $("#fog03c").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog03b").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog04").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog05").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog06").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog07").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog08").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog09").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog10").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog11").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog12").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog13").dblclick(function(){
        $(this).fadeOut("slow");
    });
    $("#fog14").dblclick(function(){
        $(this).fadeOut("slow");
    });
});