
var x=true;
var total=0;
var aux;
var arreglo=[];

function cargarCarrito(){

    $(".card").on("click",function(){
        var elId = $(this).attr('id');
       console.log(elId);
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
    });
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

// INICIO

// CARGAR PRODUCTOS DINAMICAMENTE-------------------------------------------------------
$(document).ready(function(){
    
        url='http://www.json-generator.com/api/json/get/bTOsDsiHqW?indent=2';
        $.get(url,function(datos){
            console.log(datos);
          
            $.each(datos,function(index,obj){
                $(".flex-container").append(`
                <div class="card" id="${obj.id}">
                        
                        <img src="${obj.imagen}">
                        <div class="container">
                            <h4 id="jeje">
                                ${obj.precio}

                            </h4>
                            <p class="descripcionCard" >
                                ${obj.descripcion}
                            </p>
                        </div>
                    </div>`);

                    
                    
                    
                    
                   
                });

                // CARGAR CARRITO--------------------------------------------------

                cargarCarrito();

                // MOSTRAR RESULTADO EN CARRITO ---------------------------------------
                $("#carrito").on("click",function(){
                mostrarTotal();});
                // --------------------------------------------------
        });





     });
