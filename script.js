$(function() {

    var place;
    $("input").focus(function() {
        place = $(this).attr("placeholder");
        $(this).attr("placeholder", "")
    }).blur(function() {
        $(this).attr("placeholder", place);
    });


    $(".quantity input").on("input", function() {
        $(this).each(function(){
            if (isNaN($(this).val())){
                $(".number").text("Enter a valid Quantity");
                $(".dollar-sign").fadeOut();
                $("input").not($(this)).attr("disabled", "disabled");   
    
            } else {
                $("input").removeAttr("disabled");
                $(".dollar-sign").fadeIn();  
                var allInputs = document.getElementsByName('qty'),
                    total = 0;
                    
                for(var i = 0; i< allInputs.length; i++) {

                    if(parseInt(allInputs[i].value)) {
                            
                        total += parseInt(allInputs[i].value) * parseInt(allInputs[i].parentElement.nextElementSibling.firstElementChild.innerHTML);
                
                    }
                }          

                $(".number").text(total);
            }
        });
    });

    //control keydown and keyup
    $(".quantity input").on("keydown", function(e) {
        if (e.keyCode == 40 && !isNaN($(this).val())) {
            e.preventDefault();
            $(this).parent().parent().next().find("input").focus();
           
        } else if (e.keyCode == 38 && !isNaN($(this).val())) {
            e.preventDefault();
            $(this).parent().parent().prev().find("input").focus();
        };
    });
});