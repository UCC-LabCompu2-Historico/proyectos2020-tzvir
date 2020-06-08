/**
 * Permite ocultar y mostrar la información de los temas adecuadamente
 * @method mostrarinfo_ocultarinfo
 * @var  valorInfo: es el valor "value" de la opción select
 * @return información correspondiente
 */

function mostrarinfo_ocultarinfo() {
    var valorInfo=document.getElementById("Elige_una_opción:")

    if (valorInfo == " "){
        document.getElementById("Info_Nebulosa").style.display = "none";
        document.getElementById("Info_Galaxia").style.display = "none";
        document.getElementById("Info_Cumulo").style.display = "none";
    }
    else if (valorInfo == "Nebulosa") {
        document.getElementById("Info_Nebulosa").style.display = "none";
        document.getElementById("Info_Galaxia").style.display = "block";
        document.getElementById("Info_Cumulo").style.display = "none";
    }
    else if (valorInfo =="Galaxia") {
        document.getElementById("Info_Nebulosa").style.display = "none";
        document.getElementById("Info_Galaxia").style.display = "block";
        document.getElementById("Info_Cumulo").style.display = "none";
    }
    else if (valorInfo =="Cúmulo") {
        document.getElementById("Info_Nebulosa").style.display = "none";
        document.getElementById("Info_Galaxia").style.display = "none";
        document.getElementById("Info_Cumulo").style.display = "block";
    }

}

/**
 * Permite ocultar y mostrar el catálogo adecuadamente.
 * Si se realiza por número, aparecerá contenido correspondiente a ese numero.
 * @method mostrarcatalogo_ocultarcatalogo_por_numero
 * @var valorInfo es el valor value de las opciones del catalogo desde opción numérica
 * @return información correspondiente
 */

function mostrarcatalogo_ocultarcatalogo_por_numero() {

    var valorInfo= document.getElementsByName("numero");

    if (valorInfo == 110) {
        document.getElementById("nM110").style.display = 'block';
        document.getElementById("gM31").style.display = 'none';
        document.getElementById("cM2").style.display = 'none';
    }
    else if (valorInfo == 31) {
        document.getElementById("nM11O").style.display = 'none';
        document.getElementById("gM31").style.display = 'block';
        document.getElementById("cM2").style.display = 'none';
    }
    else if (valorInfo == 2) {
        document.getElementById("nM110").style.display = 'none';
        document.getElementById("gM31").style.display = 'none';
        document.getElementById("cM2").style.display = 'block';
    }

}

/**
 * Permite ocultar y mostrar el catálogo adecuadamente.
 * Si se selecciona por tipo, aparecerá la información de los objetos celestes de esa categoria.
 * @method mostrarcatalogo_ocultarcatalogo_por_tipo
 * @var valorInfo es el valor value de las opciones del catalogo desde opción por tipo
 * @return información correspondiente
 */

function mostrarcatalogo_ocultarcatalogo_por_tipo () {

    var valorInfo=document.getElementById("Por_tipo");

    if (valorInfo == "Nebulosa") {

    }
    else if (valorInfo =="Galaxia") {

    }
    else if (valorInfo =="Cúmulo") {

    }


}

/**
 * Dibujo Canvas
 * @method dibujoCanvas
 * @param canvas
 * @return gráfica
 */

function dibujoCanvas() {
    var canvas = document.getElementById("myCanvasMessier");
    var ctx = canvas.getContext("2d");

}