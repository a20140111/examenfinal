var nombre = prompt("Ingresa tu nombre: ");
var c, i;
c = 0;
i = 0; 
alert("Bienvenido" + nombre)

var p1 = prompt("1. ¿Cuánta agua hay en la Tierra?\nA. Alrededor de un 41% de la superficie terrestre es agua.\nB. Alrededor de un 51% de la superficie terrestre es agua\nC. Alrededor de un 71% de la superficie terrestre es agua ")
if (p1 == "C"){
c = c+ 1;
}else{
    i = i +1;
}
var p2 = prompt("2-¿Qué océano es el más grande?\nA. El Pacífico\nB. El Atlántico\nC. El Índico")
if (p2 == "A"){
    c = c+ 1;
    }else{
        i = i +1;
    }
var p3 = prompt("3. ¿Cuánto mide la parte más profunda de los Océanos?\nA. 11 Km\nB. 23 Km\nC. 31 Km")
if (p3 == "A"){
    c = c+ 1;
    }else{
        i = i +1;
    }

if (c < i){
    document.write("Bien hecho")
}else{
        document.write("Podrias hacerlo mejor")
}