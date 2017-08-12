$(document).ready(function($){
	var ventana_alto = $(window).height();
	$(".content-principal").attr("style","height:"+ventana_alto+"px;");
	
	$(".ver_navegacion").click(function(){
		if ($("#header-principal").is(":hidden")){
			$("#header-principal").slideDown("slow");
			$(".ver_navegacion").addClass("ocultar_navegacion");
			$(".ver_navegacion").html("Ocultar navegación");
		}else{
			$("#header-principal").hide();
			$(".ver_navegacion").removeClass("ocultar_navegacion");
			$(".ver_navegacion").html("Ver navegación");
		}
	});

    $(".enlace").mouseenter(function (e) {             
        var posMouse = e.pageX - this.offsetLeft; 
        var textoTooltip = $(this).attr("data-rel"); 
        
        if (textoTooltip.length > 0) {
            $(this).append('<div class="tooltip">' + textoTooltip + '</div>');
            $(".enlace > div.tooltip").fadeIn(300);
        }
    });

    $(".enlace").mouseleave(function () {             
        $(".enlace > div.tooltip").fadeOut(300).delay(300).queue(function () {
            $(this).remove();
            $(this).dequeue();
        });
    });

    /*
    $('.icon-vermas').click(function() {
        $('#DetalleProduct').animate({marginLeft:0,opacity:"show"},1000,"linear");
    });

*/
});

function pasarPage(section){
    $(".content-page").hide();
    $('.'+section).toggle(100);
    $(".menu .nav li").removeClass("active");
    $(".menu-"+section).addClass("active");
    $("body").removeClass();
    $("body").addClass("section-"+section);
}