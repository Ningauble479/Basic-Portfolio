var newhtml = '<h2 class="textcolor">Hello!</h2>'



$(document).ready(function(){
    $("#biobutton").click(function(){
        $( "#contentbox" ).load( 'biography.html' );
    });
    $("#testbutton").click(function(){
        $( "#contentbox" ).html( newhtml );
    });
    
});

