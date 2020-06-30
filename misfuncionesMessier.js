/**
 * Permite ocultar y mostrar la información de los temas nebulosa, galaxia y cúmulo adecuadamente
 * @method mostrarinfo_ocultarinfo
 * @var valorInfo: es el valor "value" de la opción select (Dentro de la función)
 * @return información e imagen correspondiente a la palabra
 */

function mostrarinfo_ocultarinfo() {
    var valorInfo=document.getElementById("Elige_una_opción:").value;

    if (valorInfo == "Nada"){
        document.getElementById("imagen0").style.display = "block";
        document.getElementById("imagen1").style.display = "none";
        document.getElementById("imagen2").style.display = "none";
        document.getElementById("imagen3").style.display = "none";

        document.getElementById("Ingresar").style.display = "block";
        document.getElementById("Info_Nebulosa").style.display = "none";
        document.getElementById("Info_Galaxia").style.display = "none";
        document.getElementById("Info_Cumulo").style.display = "none";
    }
    else if (valorInfo == "Nebulosa") {
        document.getElementById("imagen0").style.display = "none";
        document.getElementById("imagen1").style.display = "block";
        document.getElementById("imagen2").style.display = "none";
        document.getElementById("imagen3").style.display = "none";

        document.getElementById("Ingresar").style.display = "none";
        document.getElementById("Info_Nebulosa").style.display = "block";
        document.getElementById("Info_Galaxia").style.display = "none";
        document.getElementById("Info_Cumulo").style.display = "none";
    }
    else if (valorInfo =="Galaxia") {
        document.getElementById("imagen0").style.display = "none";
        document.getElementById("imagen1").style.display = "none";
        document.getElementById("imagen2").style.display = "block";
        document.getElementById("imagen3").style.display = "none";

        document.getElementById("Ingresar").style.display = "none";
        document.getElementById("Info_Nebulosa").style.display = "none";
        document.getElementById("Info_Galaxia").style.display = "block";
        document.getElementById("Info_Cumulo").style.display = "none";
    }
    else if (valorInfo =="Cúmulo") {
        document.getElementById("imagen0").style.display = "none";
        document.getElementById("imagen1").style.display = "none";
        document.getElementById("imagen2").style.display = "none";
        document.getElementById("imagen3").style.display = "block";

        document.getElementById("Ingresar").style.display = "none";
        document.getElementById("Info_Nebulosa").style.display = "none";
        document.getElementById("Info_Galaxia").style.display = "none";
        document.getElementById("Info_Cumulo").style.display = "block";
    }

}

/**
 * Permite ocultar y mostrar el catálogo adecuadamente.
 Seleccionando el número deseado, aparecerá contenido correspondiente a ese valor.
 * @method mostrarcatalogo_ocultarcatalogo_por_numero
 * @var valorNum: es el valor value de las opciones del catalogo desde una opción numérica (Dentro de la función)
 * @return información e imagen correspondientes
 */

function mostrarcatalogo_ocultarcatalogo() {

    var valorNum=document.getElementById("Catálogo:").value;

    if (valorNum == " "){
        document.getElementById("icat").style.display = "block";
        document.getElementById("iM1").style.display = "none";
        document.getElementById("iM27").style.display = "none";
        document.getElementById("iM30").style.display = "none";
        document.getElementById("iM45").style.display = "none";
        document.getElementById("iM51").style.display = "none";
        document.getElementById("iM110").style.display = "none";

        document.getElementById("Ingreso").style.display = "block";
        document.getElementById("nM1").style.display = "none";
        document.getElementById("nM27").style.display = "none";
        document.getElementById("cM30").style.display = "none";
        document.getElementById("cM45").style.display = "none";
        document.getElementById("gM51").style.display = "none";
        document.getElementById("gM110").style.display = "none";
    }
    else if (valorNum == 1){
        document.getElementById("icat").style.display = "none";
        document.getElementById("iM1").style.display = "block";
        document.getElementById("iM27").style.display = "none";
        document.getElementById("iM30").style.display = "none";
        document.getElementById("iM45").style.display = "none";
        document.getElementById("iM51").style.display = "none";
        document.getElementById("iM110").style.display = "none";

        document.getElementById("Ingreso").style.display = "none";
        document.getElementById("nM1").style.display = "block";
        document.getElementById("nM27").style.display = "none";
        document.getElementById("cM30").style.display = "none";
        document.getElementById("cM45").style.display = "none";
        document.getElementById("gM51").style.display = "none";
        document.getElementById("gM110").style.display = "none";
    }
    else if (valorNum == 27){
        document.getElementById("icat").style.display = "none";
        document.getElementById("iM1").style.display = "none";
        document.getElementById("iM27").style.display = "block";
        document.getElementById("iM30").style.display = "none";
        document.getElementById("iM45").style.display = "none";
        document.getElementById("iM51").style.display = "none";
        document.getElementById("iM110").style.display = "none";

        document.getElementById("Ingreso").style.display = "none";
        document.getElementById("nM1").style.display = "none";
        document.getElementById("nM27").style.display = "block";
        document.getElementById("cM30").style.display = "none";
        document.getElementById("cM45").style.display = "none";
        document.getElementById("gM51").style.display = "none";
        document.getElementById("gM110").style.display = "none";
    }
    else if (valorNum == 30){
        document.getElementById("icat").style.display = "none";
        document.getElementById("iM1").style.display = "none";
        document.getElementById("iM27").style.display = "none";
        document.getElementById("iM30").style.display = "block";
        document.getElementById("iM45").style.display = "none";
        document.getElementById("iM51").style.display = "none";
        document.getElementById("iM110").style.display = "none";

        document.getElementById("Ingreso").style.display = "none";
        document.getElementById("nM1").style.display = "none";
        document.getElementById("nM27").style.display = "none";
        document.getElementById("cM30").style.display = "block";
        document.getElementById("cM45").style.display = "none";
        document.getElementById("gM51").style.display = "none";
        document.getElementById("gM110").style.display = "none";
    }
    else if (valorNum == 45){
        document.getElementById("icat").style.display = "none";
        document.getElementById("iM1").style.display = "none";
        document.getElementById("iM27").style.display = "none";
        document.getElementById("iM30").style.display = "none";
        document.getElementById("iM45").style.display = "block";
        document.getElementById("iM51").style.display = "none";
        document.getElementById("iM110").style.display = "none";

        document.getElementById("Ingreso").style.display = "none";
        document.getElementById("nM1").style.display = "none";
        document.getElementById("nM27").style.display = "none";
        document.getElementById("cM30").style.display = "none";
        document.getElementById("cM45").style.display = "block";
        document.getElementById("gM51").style.display = "none";
        document.getElementById("gM110").style.display = "none";
    }
    else if (valorNum == 51){
        document.getElementById("icat").style.display = "none";
        document.getElementById("iM1").style.display = "none";
        document.getElementById("iM27").style.display = "none";
        document.getElementById("iM30").style.display = "none";
        document.getElementById("iM45").style.display = "none";
        document.getElementById("iM51").style.display = "block";
        document.getElementById("iM110").style.display = "none";

        document.getElementById("Ingreso").style.display = "none";
        document.getElementById("nM1").style.display = "none";
        document.getElementById("nM27").style.display = "none";
        document.getElementById("cM30").style.display = "none";
        document.getElementById("cM45").style.display = "none";
        document.getElementById("gM51").style.display = "block";
        document.getElementById("gM110").style.display = "none";
    }
    else if (valorNum == 110){
        document.getElementById("icat").style.display = "none";
        document.getElementById("iM1").style.display = "none";
        document.getElementById("iM27").style.display = "none";
        document.getElementById("iM30").style.display = "none";
        document.getElementById("iM45").style.display = "none";
        document.getElementById("iM51").style.display = "none";
        document.getElementById("iM110").style.display = "block";

        document.getElementById("Ingreso").style.display = "none";
        document.getElementById("nM1").style.display = "none";
        document.getElementById("nM27").style.display = "none";
        document.getElementById("cM30").style.display = "none";
        document.getElementById("cM45").style.display = "none";
        document.getElementById("gM51").style.display = "none";
        document.getElementById("gM110").style.display = "block";
    }
}

/**
 * Al momento de cargarse la página, aparece en el canvas las imágenes correspondientes
 * @dibujoCanvas
 * @param  canvas: valor donde se colocarán las imágenes y se definirá estructura (Dentro de la función)
 * @return gráfico más imágenes
 */

function dibujoCanvas() {
    var canvas = document.getElementById("myCanvasMessier");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "imagenes_pagina/M24.jpg";

    var img2 = new Image();
    img2.src = "imagenes_pagina/M42.jpg";

    var img3 = new Image();
    img3.src = "imagenes_pagina/M97.jpg";

    var img4 = new Image();
    img4.src = "imagenes_pagina/M104.jpg";

    img.onload = function() {
        ctx.drawImage(img,20, 20);
    }

    img2.onload = function() {
        ctx.drawImage(img2,300, 20);
    }

    img3.onload = function() {
        ctx.drawImage(img3,592, 20);
    }

    img4.onload = function() {
        ctx.drawImage(img4,905, 20);
    }


}
/**
 * Se muestran los nombres de los objetos a través de una opción (texto_mostrar).
 Con otra opción se vuelve al formato original del canvas (texto_ocultar)
 * @mostrar_ocultar_texto
 * @param  valor: value el cual la función utiliza para definir comandos ("Si se muestra u oculta el texto")
 * @return nombre de los cuerpos celestes o canvas sin cambios
 */

function mostrar_ocultar_texto(valor){
    var canvas = document.getElementById("myCanvasMessier");
    var ctx = canvas.getContext("2d");

    if (valor=="texto_mostrar"){
        ctx.font = "13px Georgia";
        ctx.fillStyle ="#c09853";
        ctx.fillText("NUBE ESTELAR EN SAGITARIO (M24)", 22, 285);
        ctx.fillText("GRAN NEBULOSA DE ORIÓN (M42)", 320, 285);
        ctx.fillText("NEBULOSA DE LA LECHUZA, OSA MAYOR (M97)", 580, 285);
        ctx.fillText("GALAXIA DEL SOMBRERO EN VIRGO (M104)", 1000, 225);

    } else if (valor=="texto_ocultar"){
        canvas.width = canvas.width;

        var img = new Image();
        img.src = "imagenes_pagina/M24.jpg";

        var img2 = new Image();
        img2.src = "imagenes_pagina/M42.jpg";

        var img3 = new Image();
        img3.src = "imagenes_pagina/M97.jpg";

        var img4 = new Image();
        img4.src = "imagenes_pagina/M104.jpg";

        img.onload = function() {
            ctx.drawImage(img,20, 20);
        }

        img2.onload = function() {
            ctx.drawImage(img2,300, 20);
        }

        img3.onload = function() {
            ctx.drawImage(img3,592, 20);
        }

        img4.onload = function() {
            ctx.drawImage(img4,905, 20);
        }

    }
}