/* class producto {
    constructor(titulo,precio, codigo, id) {
        this.titulo = titulo;
        this.precio = parseInt(precio);
        this.codigo = parseInt(codigo);
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;
    }
}
const productos = [
    new producto("iphone 8plus", 80000, 100, 1),
    new producto("samsung galaxy 20",75000,101, 2),
    new producto("alcatel one pro",15000,102,3),
    new producto("TCL advance",50000,103,4)

]
console.log(productos);
function resultados(array){
    let info="";
    array.forEach(elemento => {
        info += 'Título: ' + elemento.titulo + '\nprecio: ' + elemento.precio + '\nCodigo: ' + elemento.codigo+'.\n\n'
    });
    return info;
}
let clave= "diego"
function login(){
    let ingresar= false;

    for (let i=0;i<3;i++){
        let nombreusuario= prompt("ingrese su nombre de usuario.");
        if(nombreusuario==clave){
            alert("bienvenido "+nombreusuario+"");
            ingresar= true;
            break;
         }else {
            alert(" Error.Este es el intento "+(i+1)+" de 3");
        }
    }
    return ingresar;
}
 if(login()){
let opcion= prompt("Elegí una opción: \n1- Agregar producto . \n2 - catalogo. \n3 - orden (por precio) \nPresioná X para finalizar.");
    while(opcion.toUpperCase()!="X"){
        let nuevoarray= productos.slice(0);
        switch(opcion){
            case "1":
                let continuar = true;
                 while (continuar) {
                    let ingreso = prompt('Ingresa los datos del producto: titulo, precio,codigo, separados por una barra diagonal (.) Ingresa X para finalizar');
                    if (ingreso.toUpperCase() == 'X') {
                        continuar = false;
                        break;
                    }
                    const datos = ingreso.split('.');
                    console.log(datos);
                    const nuevo = new producto(datos[0], datos[1], datos[2]);
                    productos.push(nuevo);
                    nuevo.asignarId(productos);
                    console.log(productos);
                }
                 break;
            case "2":
                alert(resultados(productos));
                break;
            case "3":
                let catalogo=nuevoarray.sort((a,b) =>a.precio-b.precio);
                alert(resultados(catalogo))
                break;
            default:
                alert("Opcion invalida");
                break;
        }

        opcion = prompt("Elegí una opción: \n1- Agregar producto. \n2 - catalogo. \n3 - orden (por precio). \nPresioná X para finalizar.");
    }
    }else{
    alert("entrada denegada. bloqueo de cuenta");
}
alert("fin") */

// --------------------------------------------------------------------------------------------------------------------------------------------------------------








/* // Actividad de la clase 1
// function jubilacion(){
    let apellido=prompt(" Ingrese su apellido");
    let nombre=prompt ("Ingrese su nombre");
    let edad= parseInt(prompt("ingrese su edad"));
    let hoy=2021;
    let jubilacion=65;
    let calculo= +jubilacion-+edad;
    let jubilo= +hoy+calculo
    alert("Hola "+nombre+" "+apellido);
    alert("Te vas a jubilar en el año "+jubilo);
    // } */

// Actividad de la clase 2

/* let dato=parseInt(prompt("Ingrese un numero"));

if(dato>1000){
    alert(dato+" es mayor a 1000")
}else{
    alert(dato+" es menor que 1000")
}

let palabra=prompt("adivina la palabra");
let identico="hola"
if(palabra==identico){
    alert(" adivinaste la palabra, que era "+identico)
}else{
    alert("no era la palabra, era "+identico)
}

let numero=parseInt(prompt("ingrese un numero"));

if(numero>=10 && numero<=50){
    alert(numero+" esta entre 10 y 50")
}else{
    alert(numero+" no me sirve")
}

 */



















// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// ACTIVIDAD N°1 DEL WORKBOOK

/* let numero1=parseInt(prompt("Eliga un numero fijo"))

for(let i=0;i<3;i++){
    let numero2=parseInt(prompt("ingrese un segundo numero a sumar"));
    let suma=numero1+numero2
    alert(suma)
}
 */
/*  let palabra=prompt("Ingrese una palabra, poner esc para salir");
let palabra2=" ";

while(palabra!="esc" ){
    palabra2= prompt("ingrese otra palabra");
    let sumar=palabra+" "+palabra2;
    alert(sumar)
}
 */
/* let texto=prompt("ingrese un texto");
let resultado= texto;
let textoConcatenar=" ";

while(textoConcatenar!="esc" && texto!="esc"){
    textoConcatenar= prompt("ingrese un texto ");
    resultado=resultado+" "+textoConcatenar;
    alert(resultado);
} */

/* let repetir=parseInt(prompt("ingrese la cantidad de repeticiones"));

for(let i=0;i<repetir;i++){
    alert("hola");
}
 */




















//actividad 1
/* let nombre1="homero";
var apellido="simpson";
const edad=40;
console.log(nombre1);
console.log(apellido);
console.log(edad);  */

//actividad 2

 /* const ciudad1="springfield";
const ciudad2="Shelbyville"
const ciudad3="Capital City";
const ciudad4="Cypress Creek";
const ciudad5="Bronson";
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5); */

//actividad 3

 /* let nombre="Bart simpson";
let calle=" 742 evergreen terr"
let ciudad=" springfield"
let nacimiento= "02-11-70"
const codigo= "B47U89RE243"
let carnet= "codigo:"+codigo+
            "\nnombre:"+nombre+
            "\ncalle:"+calle+
            "\nciudad:"+ciudad+
            "\nnacimiento:"+nacimiento+
            "a la grande le puse cuca";
let concatenar=nombre+" "+calle+" "+ciudad+" "+nacimiento+" "+
codigo;
console.log(concatenar);
console.log(carnet); */

// \n nos permite saltar de parrafo

// ejercicio 4

/* let nombre= prompt("ingrese el nombre del padre de la familia de los simpson");
let nombre2=prompt("ingrese el nombre de la madre");
let nombre3= prompt("Ahora del primer hijo");
let nombre4=prompt("ahora de la hija");
let nombre5=prompt("nombre de la beba");
let familia= "La familia simpson esta integrada por \n"+nombre+"\n"
                                                     +nombre2+"\n"
                                                     +nombre3+"\n"
                                                     +nombre4+"\n"
                                                     +nombre5;
console.log(familia);
alert(familia);
 */
// ejercicio 5
/* const descuento20= 0.2;
const descuento30=0.3;
let valor= parseInt(prompt("ingrese un numero"));
let aplicardescuento=valor-(valor*descuento20);
let aplicardescuento2=valor-(valor*descuento30);
console.log("20% es "+aplicardescuento+ "\n y el de 30% es " +aplicardescuento2)
alert("20% es "+aplicardescuento+ "\n y el de 30% es " +aplicardescuento2)
 */

// Parte 2
// ejercicio 1

/* let nombre=prompt("Ingrese tu personaje favorito");

let gurren="kamina";

if(nombre==gurren){
    alert("yo fui")
}else{
    alert("yo no fui")
}; */

// Ejercicio 2

/* let tecla=prompt("ingrese una tecla");

if(tecla=="y" || tecla=="Y"){
    alert("correcto")
}else{
    alert("incorrecto")
}; */

// Elercicio 3

/* let number=parseInt(prompt("Ingrese un numero, del 1 al 4"));
 */
/* if(number==1){
    alert(" Elegiste a Homero")
}else if (number==2){
alert("Elegiste a Marge")
}else if(number==3){
    alert("Elegsite a Bart")
}else if(number==4){
    alert("Elegiste a Lisa")
}else{
    alert("te mamaste")
} */

// Ejercicio 4

/* let usuario=parseInt(prompt("Escriba un numero"));

if(usuario>=0 && usuario<=1000){
    alert("Presupuesto bajo")
}else if(usuario>=1001 && usuario<=3000){
    alert("presupuesto medio")
}else if(usuario>3000){
    alert("presupuesto alto")
}else{
    alert("error")
};
 */
// Ejercicio 5
/*
let producto1=prompt("ingrese un producto");
let producto2=prompt("ingrese otro producto");
let producto3=prompt("ingrese otro producto");
let producto4=prompt("ingrese otro producto");

if(producto1!="" && producto2!="" && producto3!="" && producto4!=""){
    alert("Tu listado de producto es "+producto1+"\n"
                                    +producto2+"\n"
                                    +producto3+"\n"
                                    +producto4)
}else{
    alert("Te falta cargar productos")
} */

// parte 3

// ejercicio 1
/* let palabra=prompt("ingrese un texto");
let intentos=parseInt(prompt("ingrese un numero"));

for(let i=0;i<intentos;i++){
    alert(palabra)
} */

// ejercicio 2

/* let numero=parseInt(prompt("cantidad de intentos"));

for(let i=0; i<numero;i++){
    if(i>3){
        break}
        alert(" lado")
    } */

// ejercicio 3 prestar atencion

/* let alumnos

for(let i=0;i<10;i++){
    alumnos+=prompt("ingrese nombres de los alumnos")+"\n"
}
alert(alumnos)

let alumnos=0;
let total

for(let i=0;i<10;i++){
    alumnos=prompt("ingrese nombres de los alumnos")
    total += alumnos+ "\n";
}
alert(total) */

// ejercicio 4 prestar atencion

/* let alumnos=prompt("nombres");
let ingresados

while(alumnos!="homero"){
    ingresados+=alumnos+"\n";
    alumnos=prompt("nombres")
}
alert(ingresados)
 */

// ejercicio 5

/* let opcion=prompt("elija del 1 al 4, y esc para salir")

while(opcion!="esc"){
    switch(opcion){
        case "1":
            alert("tomate");
            break;
        case "2":
            alert("papa");
            break;
        case "3":
            alert("pollo");
            break;
        case "4":
            alert("carne");
            break;
        default:
            alert("error");
            break;
    }
opcion=prompt("seleccione una opcion del 1 al 4")
}
 */

// parte 4 ejercicios

// ejercicio 1
/* function entrada(){
     return prompt("palabra");
 }
 */
// function procesamiento(valor){
//     return "la entrada es "+valor
// }

// function salida(valor) {
//     alert(valor)    
// }

// salida(procesamiento(entrada()))

// funcion flecha

/* const procesamiento= x => x+ " ese fue el mensaje";

const salida= valor => alert(valor);

salida(procesamiento(entrada())); */
// ejercicio 2


/* function redondeo(valor){
    return Math.round(valor)
};

for(let i=0;i<5;i++){
    let numero=parseFloat(prompt("ingrese un numero"));
    alert(redondeo(numero))
} */

/* const resumir= valor => Math.round(valor)

for(let i=0;i<5;i++){
    let numero=parseFloat(prompt("ingrese un numero"));
    alert(resumir(numero))
}

 */

// ejercicio 3

/* function impuesto(precio,porcentaje){
    return precio+((precio*porcentaje)/100)
}

for(let i=0;i<5;i++){
    let resultado= impuesto(parseInt(prompt("numero precio")),parseFloat(prompt("porcentaje")));
    alert(resultado)
} */

/* const impuesto= (a,b)=> a+((a*b)/100);

for(let i=0;i<5;i++){
   let numero=parseInt(prompt("precio"));
   let porcentaje= parseInt(prompt("porcentaje"));

   alert(impuesto(numero,porcentaje));


    } */

// ejercicio 4

/* function cotizarDolar(pesos){
    return pesos/300
}

function cotizarPesos(dolar){
    return dolar*300
}

let opcion= prompt("1 pesos, 2 dolar")
let valor=prompt("valor");

switch(opcion){
    case "1":
        alert(cotizarPesos(valor));
        break
    case "2":
        alert(cotizarDolar(valor));
        break
    default:
        alert("error");
} */

// ejercicio 5

const validacion= cadena=>cadena!="";

let entrada= prompt("cadena");

while(entrada!="esc"){
    alert(validacion(entrada));
    entrada= prompt("mensaje")
}



// ----------------------------------------------------------------------------------------------------------------------------------------

/* // clases 1
// comentario de una linea crtl+k+
// shift+alt+A ordena el codigo
let nombre1="diego";
console.log(nombre1);
// se puede modificar la variable en cualquier parte
nombre1="gato";
console.log(nombre1);
const iva= 0.21;
// no se modiica la variable
// no usar caracteres especiales como ñ, hacentos, etc, ni espacios en blanco ni numeros al principio de una variable
// con dos palabras usar camelcase(ejemplo: diegoOliva), o guion bajo_
let gato;
gato="maroco";
console.log(nombre1+gato);
// operaciones numericas
let numero1=1;
let numero2=2;
let suma= 5+5;
let sumaVariables=numero1+numero2;
let resta=numero2-numero1;
let resultadoIva= numero2*iva;
let modulo=numero2%numero1;
console.log(suma);
console.log(sumaVariables);
console.log(resta);
console.log(resultadoIva);
console.log(modulo);
// operaciones con texto
let palabra1="gurren";
let palabra2="laggan";
let remate="boquita";
let numeroString="3";
let numero=4;
let concatenar=palabra1+palabra2;
console.log(concatenar)
let concatenarConEspacio=palabra1+ " "+palabra2;
console.log(concatenarConEspacio);
console.log(remate+numero);
console.log(numeroString);
let concatenartotal
concatenartotal=palabra1+palabra2+remate+numeroString+numero;
const concatenerTotal2=palabra1+" "+palabra2+" "+remate+" "+numeroString+
" "+numero;
console.log(concatenartotal);
console.log(concatenerTotal2);
// hardcodear establecer codigo
alert("hola baboso")
alert(palabra1+" "+palabra2)
let nameUsuario= prompt("cual es tu nombre")
console.log(nameUsuario);
let anime= prompt(" Cual es tu anime favorito?. El mio es " +concatenarConEspacio)
console.log(anime);
let age= parseInt(prompt("cual es tu edad"));
let altura= parseFloat(prompt("Cual es tu altura. Separe un con ."))
alert("actualmente tenes "+age)
alert("tu altura es "+altura)
console.log(age+" "+altura);
// parseInt sirve para parsear a numero entero
// parseFloat sirve para parsear a numero decimal
// va atras del prompt
parseint/float(promp("texto"));
let edadActual= parseInt(prompt("Ingrese tu edad"))
let edadEn10
edadEn10= edadActual+10;
console.log("hoy "+edadActual+ "Despues "+edadEn10)
alert(" hoy tenes "+edadActual+ ".Pero luego vas a tener "+edadEn10)
let nombredeUsuario= prompt("ingresa tu id")
console.log(nombredeUsuario);
alert("Bienvenido "+nombredeUsuario);
let dato= prompt("Ingrese tu nombre");
console.log(dato);
alert("Bienvenido "+dato);
alert("Realicemos una suma "+dato);
let dato2= parseInt(prompt("Ingrese un numero"));
let dato3= parseInt(prompt("ingrese un segundo numero"));
let concatenacion= dato2+dato3
console.log("El primer numero fue "+dato2+ ",el segundo es "+dato3+
" y el resultado fue "+concatenacion);
alert("El resultado de tu operacion es "+concatenacion);
alert(" tu resultado fue "+concatenacion+". Fue un gusto "+dato)
 */
// --------------------------------------------------------------------------------------------------------------------------------------------

/* // clase 2

// "=="(COMPARA
// "="sirve para asignar valores
 CONDICIONAL
si cumple o no la condicion pasa al siguiente bloque de codigo
y el else no es siempre necesario
if(Parametro/true){
    console.log("resultado correcto");
} else(falso){
    console.log("resultado falso")
}

// PARA AGREGAR UNA NUEVA CONDICION
else if("parametro"){
    resultado
}

 let tiempo="soleado";
if(tiempo=="soleado"){
    console.log("sali en remera");
    alert("calor")
}else{
    console.log("sali con paraguas")
}

// ejemplo de else if

 if(tiempo=="lluvioso"){
    console.log("sali con paraguas");
}else if(tiempo=="soleado"){
    console.log("sali en bermudas ");
}else if(tiempo=="nevado"){
    console.log("abrigate");
}else{
    console.log("quedate en casa");
}

let pass="pit28701";
let userpass=prompt("Ingrese la contraseña");
if(userpass==pass){
    alert("acceso permito")
}else{
    alert("acceso denegado")
};
let precio=parseInt(prompt(" ingrese un precio del 1 al 100"))
let mayor="tu precio es menor que "
if(precio<20){
    alert(" el precio es menor a 20")
}else if(precio<50){
    alert(mayor+"50");
}else if(precio<100){
    alert(mayor+"100")
}else{
    alert("tu nivel de pelea es de mas de 90000!!")
}

let edadObligatoria=18;
let edadOptativa=16
let edadUsuario=parseInt(prompt("Ingrese su edad"))
if(edadUsuario>=edadObligatoria){
    console.log("debes votar");
}else if(edadUsuario>=edadOptativa){
    console.log("podrias votar");
}
else{
    console.log("no podes votar");
};

let edadObligatoria=18;
let edadOptativa=16
let edadOptativaMax=70;
let edadUsuario=parseInt(prompt("Ingrese su edad"))
let dni=true
if(edadUsuario>=edadObligatoria && edadUsuario<edadOptativaMax){
    console.log("debes votar");
}else if((edadUsuario>=edadOptativa || edadUsuario>=edadOptativaMax)&&dni){
    console.log("podrias votar");
}
else{
    console.log("no podes votar");
};
// ejemplo con modulo y if
let numeroA= parseInt(prompt("ingresa un numero y te dire si es par o impar"));
if(numeroA%2==0){
    console.log("el numero es par");
}else{
console.log("el numero es impar");
};

// valores booleanas

// se le puede asignar el valor true o false a una variable de manera directa

// let booleano= false // le atribuyo el valor false a volutad
// let booleano= true //le atribuyo el valor true

let verdadero=true
let falso=false;
if(verdadero){
    console.log("true");
}else{
    console.log("false");
};
if(falso){
    console.log("true");
}else{
    console.log("false");
}


// de una manera indirecta

let numeroX=10;
let esMayor5=numeroX>5; //deberia representar true
let stringFalso= "A"=="a";// deberia representar false por el case sensitive
 let dudoso=34>20 //devuelve true por logica, se aplica logica porque de caso contrario da false, osea no se puede inventar leyes

// ejemplos
if(esMayor5){
    console.log("true");
}else{
    console.log("false");
}
if(stringFalso){
    console.log("true");
}else{
    console.log("false");
}
if(dudoso){
    console.log("true");
}else{
    console.log("false");
}

// OPERADORES
"!=" sirve para difereciar
"===" tiene que ser identica tanto contenido como dato
"&&" operador de Y
"||" operador de NO


 let variable1=false;
//"!" invierte el valor
if(!variable1){
    console.log("vale true");
}else{
    console.log("vale falso");
}
let nombreIngresado=prompt("Ingresar nombre");
let apellidoIngresado=prompt("Ingresar apellido");
if((nombreIngresado!="")&&(apellidoIngresado!="")){
    alert("Nombre:"+nombreIngresado+ " "+apellidoIngresado)
}else{
    alert("error")
}
let numero=1;
let caracter="1";
console.log(numero==caracter);
console.log(numero===caracter);
if((numero<2)&&(caracter=="1")){
    alert("ambas condiciones son ciertas")
}
if((numero<2)||(caracter=="1")){
    alert("Algunas de las condiciones son ciertas")
}

let nombre=prompt("ingresar nombre");
if((nombre=="ANA")||(nombre=="ana")){
    alert("el nombre ingresado es ana");
}else{
    alert("no es ana")
}

let nombre=prompt("ingresar nombre");
if((nombre=="ANA")&&(nombre!="")||
nombre=="ana"){
    alert("el nombre ingresado es ana");
}else{
    alert("no es ana")
}

if(1<2){
    console.log("1 es menor que 2");
}
if(1>3){
console.log("1 es menor que 3");
}else{
    console.log("1 no es menor que 3");
}
let edad=parseInt(prompt("Ingrese la edad"));
if(edad>=18){
    console.log("Pruebas abrir una cuenta de youtube");
}else if(edad>=13){
    console.log("podes tener una cuenta pero con limitaciones");
}else{
    console.log("llama a tus padres");
}

let edad=12;
let miEdad="37";
let edadLucas=parseInt(prompt("ingrese la edad"));
let numeroA=15;
let numeroB=320;
let variableBooleano=false;
let variableBooleano2=10>2; //true
let variableBooleano3=numeroA<numeroB;//true
let comparacion= miEdad===edadLucas;//probable de false

let numero=parseInt(prompt("Ingrese un numero"));
if(numero<5){
    console.log(numero+" es menor que 5");
}else if(numero>5 && numero<10){
    console.log(numero+" es mayor que 5");
}else{
    console.log(numero+" es mayor que 10");
}
let palabra=parseInt("7");
let otraPalabra="7";
let comparacion= palabra===otraPalabra;
console.log(comparacion);
if(comparacion){
    alert("true")
}else{
    alert("false")
}

let nombre=prompt("ingrese un nombre");
let apellido=prompt("ingrese apellido");

console.log("tu nombre completo es "+nombre+" "+apellido);
if(nombre!=""|| apellido!=""){
    alert("bienvenido "+nombre+" "+apellido);
}else{
    alert("faltan datos")
}

 if((nombre!="")&&(nombre=="Flor"|| nombre=="flor")){
    alert("Bienvenido "+nombre)
}

let edadConductor=parseInt(prompt("ingrese tu edad"));

if(edadConductor>=18){
    alert("podes conducir");
}else if(edadConductor>=16 && edadConductor<18){
    alert("podes conducir con permiso especial")
}else{
    alert("no podes conducir")
}; */

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// Clase 3

// ciclos por Conteo "for"

// ciclos condicionales: repiten un bloque de codigo mientras la condicion evaluada sea cierta "while","Do ... WHILE"

// for(desde(imicializacio), hasta,actualizacion){
    // consecuencia en cada repeticion}

// la variable i solo sirve para el bucle
// se le suele iniciar en el cero porque las posiciones de la arrays

/* for(let i=1; i<=3;i++){
    alert("Usted es el jefe de los minisuper. y es su intento numero "+i)
}

alert("gracias, vuelvas prontos")
 */
/* for(let i=0;i<3;i++){
    alert("usted es el jefe de los mini supers?");
    console.log(" repeticion "+(i+1));
}
 */
/*  let oportunidades=parseInt(prompt("Ingrese el numero de oportunidades"));

for(let i=1;i<=oportunidades;i++){
    console.log("es tu oportunidad n° "+i);
} */

/* let numero=parseInt(prompt("ingrese un num"));

for(let i=1;i<=10; i++){
    let resultado= numero*i;
    console.log(resultado);
    alert(numero+"*"+i+"="+resultado)
} */


/* for(let i=1;i<=5;i++){
    let nombre=prompt("Ingresar nombre");
    alert("Turno n° "+i+ "nombre:"+nombre);
    console.log(nombre);
} */

// i++ operador de incremento
// i-- operador de descremento

/* for(let i=10;i>0; i--){
    alert("Faltan "+i+ " segundos para que termine el año")
} */

/* let nombre;

for(let i=0;i<3;i++){
    nombre=prompt("ingrese tu nombre");
    alert("Buenos noches "+nombre)
}

 */
/* let pass="goku";

// "break" hace que termine el ciclo cuando se cumpla la condicion
for(let i=0;i<3;i++){
    let contra=prompt("ingrese la contraseña")
    if(pass==contra){
        alert("loggin existoso");
        break
    }else{
        alert("repeti")
    }
}
alert("fin")

for(let i=0;i<=10;i++){
    if(i==5){
        console.log(i);
        break;
    }
    alert(i)
}
 */

// "continue" que najo cierta condicion el ciclo saltee esa repeticion y siga con la proxima

/* for(let i=1;i<=10;i++){
    if(i==4){
        alert("sapo muerto");
        continue;
    }
    alert(i)
} */

/* for(let i=1;i<=10;i++){
    if(i==5){
        continue
    }
    alert(i)
} */

// continue hace que se saltee segun el valor que le demos o ejecuta una orden en dicho valor
// repasar el continue

/* for(let i=1;i<=10;i++){
    if(i==5){
        alert("se salteo");
        continue
    }
    alert(i)
} */


// break y while se usan dentro del for

// while crean bucles ilimitados dependiendo de la condicion indicada
// mientras se cumple la condicion indicada, repite las instrucciones incluidas dentro del bucle

// NO HACER BUCLES INFINITOS
 /* let repetir=
 repetir=true

 whilw(repetir){
    console.log("al infinito y mas alla");
 }
 */
// eso es un bucle infinito

/* let repetir=true;

while(repetir){
    console.log("Soy un bucle while");
    repetir=false
};

let contador=0;

while(contador<5){
    alert("soy un bucle while");
    contador++
}
 */

// los bucles while tambien puede dar bucles infinitos
/* let edad=parseInt(prompt(" Ingrese tu edad"));

while(edad<16){
    console.log("no podes pasar");
    edad=parseInt(prompt("edad"))
}

let clave="kamina";
let palabra=prompt("ingrese la palabra correcta");

while(clave!=palabra){
    alert("error");
    palabra=prompt("intente nuevamente")
}
 */
/*
let entrada=prompt("Ingrese un dato")

while(entrada!="esc"){
    alert("El usuario ingreso "+entrada);
    entrada=prompt("ingresar otro dato")

}

 */

/* let clave="simon";
let continuar= true;
let passUsuario=prompt("Ingrese un dato");

while(continuar){
    if(passUsuario==clave){
        alert("bienvenido");
        continuar=false
        break;
    }
    alert("contraseña incorrecta");
    passUsuario=prompt("ingresa la contraseña")
}

alert(("loggin")) */

/* while(continuar){
    if(passUsuario==clave){
        alert("bienvenido");
        continuar=false
        break;
    }else{
    alert("contraseña incorrecta");}

    passUsuario=prompt("ingresa la contraseña")
} */

/* while(passUsuario!=clave){
    alert("error");
    passUsuario=prompt("ingrese nuevamente")
}

alert("bienvenido "+clave)
  */

// do... while

/* let condicion=false;

do{
    console.log(("soy un bucle do... while"));
} while(condicion);

let condition2=true;
let clave="diego"

do{
    let passUsuario=prompt("imgresar contraseña");
    if(clave==passUsuario){
        alert("bienvenido");
        condition2=false;
    }
}while(condition2)
 */
/* let numero=0;

do{
    numero=prompt("ingresar numero");
    console.log(numero);
}while(parseInt(numero))
 */

// let opcion=prompt(" elegi una  \n1-te \n2-cafe \n3-jugo. \nX para cancelar")

/* while(opcion!="x"){
if(opcion=="1"){
    alert("elegiste la opcion te")
}else if(opcion=="2"){
    alert("elegiste cafe")
}else if(opcion=="3"){
    alert("elegiste jugo")
}else if(opcion=="x"){
    break
}
else{
    alert("elegiste una opcion incorrecta")
};

opcion=prompt(" elegi una opcion \n1-te \n2-cafe \n3-jugo. \nX para cancelar")
}
 */
/* switch(opcion){
    case "1":
        alert("te");
        break;
    case "2":
        alert("cafe");
        break;
    case "3":
        alert("jugo");
        break;
    default:
        alert("error");
        break;
} */
/* while(opcion!="x"){
switch(opcion){
    case "1":
        alert("te");
        break;
    case "2":
        alert("cafe");
        break;
    case "3":
        alert("jugo");
        break;
    default:
        alert("error");
        break;
}
opcion=prompt(" elegi una opcion \n1-te \n2-cafe \n3-jugo. \nX para cancelar")

} */
/* let entrada= prompt("ingresar un nombre");

while(entrada!="esc"){
    switch(entrada){
        case "ana":
            alert("hola ana");
            break;
        case "juan":
            alert("hola juan");
            break;
        default:
            alert("error");
            break;
    }
    entrada= prompt("ingresar un nombre");
    }
 */

// ----------------------------------------------------------------------------------------------------

// clase 5 funciones

// se pueden llamar en diferentes momentos
// funciones que se pueden repetir

// se puede evitar instrucciones duplicadas, soluciona problemas complejps, da orden y versatilidad
// la funcion tiene que tener el verbo de la accion
// si pongo parametros de mas, no los tomo, toma exactamente la cantidad de parametros que le pasaste


/* function saludar(){
    console.log("saludar");
}

saludar();


for(let i=0;i<3;i++){
    saludar();
} */

/* let nombreNuevo=prompt("ingrese nombre");
alert(" tu nombre es "+nombreNuevo)

function nombrar(){
    let nombreNuevo=prompt("ingrese nombre");
    alert(" tu nombre es "+nombreNuevo)
}

nombrar();

nombrar()
nombrar() */

// parametro() pueden haber varios valores

/* function saludarConNombre(nameUsuario){
    alert("hola "+nameUsuario)
}
 */
// saludarConNombre("diego")

/* for(let i=0;i<3;i++){
    let name=prompt("nombre")
    saludarConNombre(name)
} */

/* let name=prompt("nombre")
for(let i=0;i<3;i++){

    saludarConNombre(name)
}

function saludarConNombre(nameUsuario){
    alert("hola "+nameUsuario)
} */

/* function saludarConNombre(nameUsuario,otroNombre,otroMas){
    alert("hola "+nameUsuario+" "+otroNombre+" "+otroMas)
}

saludarConNombre("diego","brian","zamir")

 */
/* function saludarConTiempo(nombre,momento){
    alert("buenas "+momento+ " "+nombre)
}

let momentoDia=prompt("mañana,tarde o noche");
let nombreA=prompt("nombre");

saludarConTiempo(nombreA,momentoDia)
 */
/*  function sumarNum(numero1,numero2){
    alert(numero1+numero2)
} */

// sumarNum(2,3)

// las funcione, nos tiene que devolver algo, y para eso esta el return. sino no nos deuvelve nada
// return expone hacia afuera el producto de la funcion, obtiene el valor de la funcion cuando se las llama

/* function sumar(primerNumero,segundNumero){
    let resultado=primerNumero+segundNumero;
    return resultado
}

function mostrar(mensaje){
    console.log(mensaje);
}


alert(sumar(1,2))
mostrar(sumar(3,4)); */

/* function directo(primerNumero,segundoNumero){
    return primerNumero+segundoNumero
}

alert(directo(2,3))
 */
/* function dividir(numeroA,numeroB){
    return numeroA/numeroB;
}

console.log(dividir(4,2));
console.log(dividir(2,4));


function dividir(numeroA,numeroB){
    let resultado= numeroA/numeroB;
    return resultadoS
}

console.log(dividir(4,2));
console.log(dividir(2,4)); */

/* function calcular(numeroA,numeroB,operador){
switch(operador){
    case "+":
        return numeroA+numeroB;
    case "-":
        return numeroA-numeroB;
    case "*":
        return numeroA*numeroB;
    case "/":
        return numeroA/numeroB;
    default:
        return "opcion invalida";
}
}

console.log(calcular(1,2,"+"));
 */
// scope: es la zona del programa en el cual se define, que restringe su uso y su alcance
// tiene de ambitos: global y local
// global es una variable declarada afuera de cualquier funcion o bloque
// local es una variable que definimos dentro de una funcion o bloque, y se accede dentro de ese bloque
/* let nombre= "diego oliva" //variable global

function saludar(){
    let nombre= "kamina";//variable local
    console.log(nombre);
}

console.log(nombre);//acceso a nombre global
saludar()//accede a nombre local
 */
/* let variableGlobal="soy una variable global"
console.log(variableGlobal);

function cambiar(){
    variableGlobal="me cambiaron desde una función"
    console.log(variableGlobal);
}

cambiar();
console.log(variableGlobal);

if(true){
    variableGlobal="ahora me cambiaron desde un if";
    console.log(variableGlobal);
}

function cambiarLocal(){
    let variableGlobal="soy una nueva variable. pero solo vivo dentro de la funcion";
    console.log(variableGlobal);
}
cambiarLocal()
console.log(variableGlobal);
 */
// funciones anonimas

// las variables se tiene que declarar antes de poder usarlas
// en cambio las funciones se pueden acceder desde cualquier lugar

/* const suma= function(a,b){
    return a+b;
}

console.log(suma(2,3))

const rest= function(a,b){return a-b};
console.log(rest(5,3)); */

/* const suma= (a,b) =>{return a+b} */
    
// si es una funcion de una solo linea con retorno, osea una funcion, podemos evitar escribir el cuerpo

/* const resta= (a,b)=> a-b;

console.log(suma(2,3));
console.log(resta(5,2));

const division=(a,b)=> {return a/b} */

// si hay un solo parametro, se puede sacar los parentesis

/* const mensaje=x=>" el mensaje es "+x

const multiplicar=(a,b)=>a*b;

console.log(division(6,2));
console.log(mensaje("kamina"));
console.log(multiplicar(2,2));
 */

/* const sumar=(a,b)=> a+b;
const resta=(a,b)=> a-b;

const iva=x=>x*0.21;

let precio=150000;
let descuento=40000;


let precioNuevo=resta(sumar(precio,iva(precio)),descuento); */

// primero se calcula el iva
// se le suma el producto al precio del iva
// a ese resultado se le aplica el descuento

// console.log("el precio normal es "+precio+ " luego de tramites el precio es "+precioNuevo);



















// --------------------------------------------------------------------------------------------------------------------------------------------------------------


/* // clase 11 workshop
// se puede usar 2 script de javas, se hace mediante linkearlo en el HTML, en el body o en el Head
class PF{
    constructor(capital,dias,moneda,numeroCuenta){
        this.capital=parseFloat(capital);
        this.fecha= new Date();
        this.dias= parseInt(dias);
        this.moneda= moneda;
        this.numeroCuenta= numeroCuenta;
        this.interes=0;// es la plata que voy a ganar
        this.acreditacion= new Date(); // dia de pago, en que dia me van a devolver la plata
        this.gananciatotal=0;
    }
    //lo que esta adentro de aca son funciones, y no tengo porque nombrar con "function"
    //el this marca la propiedad de esos objetos, por el constructor, usar THIS. si trabajo por afuera uso objeto.atributo
    //tofixed convierte un numero a string
    //tolocaledatestring te convierte la fecha en una forma de visualizacion mas sencilla
    calcularIntereses(tasaPesos,TasaDolares){
        if(this.moneda=="pesos"){
            this.interes=(this.capital*(tasaPesos/365*this.dias));
            this.interes= parseFloat(this.interes.toFixed(2))
        }
        this.interes=(this.capital*(TasaDolares/365*this.dias));
            this.interes= parseFloat(this.interes.toFixed(2))
    }
    calcularGananciaTotal(){
        this.gananciatotal=this.interes+this.capital;
    }
    calcularFechaAcreditacion(){
        this.acreditacion.setDate(this.fecha.getDate()+this.dias);
        this.acreditacion=this.acreditacion.toLocaleDateString();
    }
}
 */