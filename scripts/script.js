var newhtml = '<h2 class="textcolor">Hello!</h2>'



$(document).ready(function(){
    $("#biobutton").click(function(){
        $( "#contentbox" ).load( 'contentBoxHtmlFiles/biography.html' );
    });
    $("#contactbutton").click(function(){
        $( "#contentbox" ).load( 'contentBoxHtmlFiles/contact.html' );
    });
    $("#galleryButton").click(function(){
        $( "#contentbox" ).load( 'contentBoxHtmlFiles/gallery.html' );
    });
    
});

