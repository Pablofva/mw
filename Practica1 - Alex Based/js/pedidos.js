var x=true;
var total=0;
var aux;
var arreglo=[];
function muestro(){
    $(this).fadeIn("fast", 0.75);
    var juan=$(this).find('h4').text();
    console.log(juan);
   $(this).addClass( "conti" );
    total +=parseInt(juan);
    console.log(total);
};
function noMuestro(){
    $(this).fadeOut("fast", 0.75);
    $(this).removeClass( "conti" );
    var juan=$(this).find('h4').text();
    total -=parseInt(juan);
};
function meme(){
  
    console.log(aux);
    if(arreglo.includes(aux)){
        $(this).fadeOut("fast",1);
       
        var juan=$(this).find('h4').text();
        total -=parseInt(juan);
        var index = arreglo.indexOf(aux);
        console.log(total);
    }
    else{
        arreglo.push(aux);
        var juan=$(this).find('h4').text();
        $(this).fadeIn("fast", 0.75);
        $(this).addClass( "conti" );
        total +=parseInt(juan);
        console.log(arreglo);
        console.log(total);
        
    }
};
function mostrarTotal(){
    var modal = document.getElementById("myModal");
   
    $(".modal-body").html(`
    <li>TOTAL: ${total}</li>
    
    </ul>  `);
     $("#myModal").css("display", "block");
    
    
    $(".close").on("click",function(){
        $("#myModal").css("display", "none");
    });
    
    $(window).on("click",function(event){
        if(event.target == modal){
            $("#myModal").css("display","none");
        }
    
    });
    
};
$(document).ready(function(){
    $(".card").on("click",function(){
        var elId = $(this).attr('id');
       
        elId = elId.replace('show_', '#card_');
        aux=elId;
        if(arreglo.includes(aux)){
            $(this).fadeTo("fast", 1);
             $(this).removeClass( "conti" );
            var juan=$(this).find('h4').text();
            total -=parseInt(juan);
            console.log("voy a borrar");
            var index = arreglo.indexOf(aux);
            if (index > -1) {
                arreglo.splice(index, 1);
            }
            console.log(arreglo);
            console.log(total);
        }
        else{
            arreglo.push(aux);
            var juan=$(this).find('h4').text();
            $(this).fadeTo("fast", 0.75);
            $(this).addClass( "conti" );
            total +=parseInt(juan);
            console.log(arreglo);
            console.log(total);
            
        }
    // if (x){
    //   muestro();
    // }else{
    //   noMuestro();
    // }
});
$("#carrito").on("click",function(){
    mostrarTotal();
})
});