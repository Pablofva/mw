var x=true;
var total=0;
$(document).ready(function(){
    $(".card").on("click",function(){
        
        if (x){
            var juan=$(this).find('h4').text();
             console.log(juan);
            $(this).addClass( "conti" );
          total +=parseInt(juan);
          console.log(total);
            // $(this).toggleClass("conti");
            
            x=false;
        }else{
            $(this).removeClass( "conti" );
            x=true  ;
        }
        var elId = $(this).attr('id');
       
    elId = elId.replace('show_', '#card_');
        console.log("hola");
        $(this).fadeTo("fast", 0.75);
        // $(this).toggleClass("conti");
        
    // console.log(juan);
        
        
      });
})