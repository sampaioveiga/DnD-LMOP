$(document).ready(function(){
    $(document).mousemove(function(event){
        $("span#w").text("l: " + event.pageX + ", t: " + (event.pageY-55));
    });
});