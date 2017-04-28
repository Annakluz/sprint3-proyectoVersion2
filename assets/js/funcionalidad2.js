
function mostrarDatos () {
 var datos = document.getElementById("seccionDatos"); 
    
   datos.style.display = "block";  
   mostrarSeccionFormulario(); 
   
}



function mostrarSeccionFormulario () {
    var x = document.getElementById("numeroTelefono"); 
    
   x.style.display = "block"; // Aquí mostramos el formulario. 
}



addEventListener("click", mostrarDatos);
