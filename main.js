let manifestoSpanishDisplay = false;
let manifestoEnglishDisplay = false;



$( "#manifestoButton" ).click(function() {
    if (manifestoEnglishDisplay == true || manifestoSpanishDisplay == true) {
        $( "#manifestoTextSpanish" ).hide(function() {
            manifestoSpanishDisplay = false;
        });
        $( "#manifestoTextEnglish" ).hide(function() {
            manifestoEnglishDisplay = false;
        });
        $( "#manifestoTranslate" ).hide(function() {
        });
        

    } else {
        $( "#manifestoTextSpanish" ).show(function() {
            manifestoSpanishDisplay = true;
        });
        $( "#manifestoTranslate" ).toggle(function() {
        });
    }
  });


$( "#mapButton" ).click(function() {
    $( "#mapVisual" ).toggle(function() {
    });
});


$( "#manifestoTranslate" ).click(function() {
    $( "#manifestoTranslate" ).toggle(function() {
    });
    $( "#manifestoTextSpanish" ).hide(function() {
        manifestoSpanishDisplay = false;
    });
    $( "#manifestoTextEnglish" ).show(function() {
        manifestoEnglishDisplay = true;
    });
});