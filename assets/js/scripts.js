"use strict";

var swiper = new Swiper(".maps", {
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
        delay: 4500,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

$( function(){

    const spinner = $( '#form_submit .fa-spinner' );
    const form = $( '.form-contato' );
    $( '#form_submit' ).on( 'click', function(e){

        e.preventDefault();
        spinner.toggleClass( 'hide' );
    
        $.ajax({
            type: "POST",
            url: form.attr( 'action' ),
            data: form.serialize(),
            dataType: 'application/x-www-form-urlencoded'
        }).
        done( function( data ){
            
            console.log(data);
        });
    });
  
});