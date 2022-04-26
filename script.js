function palis ()
{   var nombre="";
    var resultado="";
    nombre=prompt("Dime un texto: ");
    i=nombre.length-1;
    let arreglo=nombre.split("");
    while(i>=0)
        {
            resultado=resultado+arreglo[i];
            i--;
         }
    alert("Tu texto al reves es "+resultado);
}