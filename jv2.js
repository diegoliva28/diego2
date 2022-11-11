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

/* 
// Actividad de la clase 1

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
    // }

//actividad 1

/* let nombre1="homero";
var apellido="simpson";
const edad=40;
console.log(nombre1);
console.log(apellido);
console.log(edad); */

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
console.log(ciudad5);
 */
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
console.log(carnet);
 */
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

alert(familia); */

// ejercicio 5
/* const descuento20= 0.2;
const descuento30=0.3;
let valor= parseInt(prompt("ingrese un numero"));



let aplicardescuento=valor-(valor*descuento20);
let aplicardescuento2=valor-(valor*descuento30);

console.log("20% es "+aplicardescuento+ "\n y el de 30% es " +aplicardescuento2)
alert("20% es "+aplicardescuento+ "\n y el de 30% es " +aplicardescuento2)

  */









/*  // clases 1 

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

alert(" tu resultado fue "+concatenacion+". Fue un gusto "+dato) */

// clase 2M

// "=="(COMPARA
// "="sirve para asignar valores
/* CONDICIONAL
si cumple o no la condicion pasa al siguiente bloque de codigo
y el else no es siempre necesario
if(Parametro/true){
    console.log("resultado correcto");
} else(falso){
    console.log("resultado falso")
} */

/* PARA AGREGAR UNA NUEVA CONDICION
else if("parametro"){
    resultado
} */

/* let tiempo="soleado";
if(tiempo=="soleado"){
    console.log("sali en remera");
    alert("calor")
}else{
    console.log("sali con paraguas")
} */

// ejemplo de else if

/* if(tiempo=="lluvioso"){
    console.log("sali con paraguas");
}else if(tiempo=="soleado"){
    console.log("sali en bermudas ");
}else if(tiempo=="nevado"){
    console.log("abrigate");
}else{
    console.log("quedate en casa");
} */

/* let pass="pit28701";

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
 */
/* let edadObligatoria=18;
let edadOptativa=16
let edadUsuario=parseInt(prompt("Ingrese su edad"))

if(edadUsuario>=edadObligatoria){
    console.log("debes votar");
}else if(edadUsuario>=edadOptativa){
    console.log("podrias votar");
}
else{
    console.log("no podes votar");
}; */

/* let edadObligatoria=18;
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
}; */
// ejemplo con modulo y if
/* let numeroA= parseInt(prompt("ingresa un numero y te dire si es par o impar"));

if(numeroA%2==0){
    console.log("el numero es par");
}else{
console.log("el numero es impar");
}; */

// valores booleanas

// se le puede asignar el valor true o false a una variable de manera directa

// let booleano= false // le atribuyo el valor false a volutad
// let booleano= true //le atribuyo el valor true

/* let verdadero=true
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
} */


// de una manera indirecta

/* let numeroX=10; */
/* let esMayor5=numeroX>5; */ //deberia representar true
/* let stringFalso= "A"=="a"; */// deberia representar false por el case sensitive
/* let dudoso=34>20 */ //devuelve true por logica, se aplica logica porque de caso contrario da false, osea no se puede inventar leyes

// ejemplos
/* if(esMayor5){
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
} */

// OPERADORES
/* "!=" sirve para difereciar
"===" tiene que ser identica tanto contenido como dato
"&&" operador de Y
"||" operador de NO
 */

/* let variable1=false;
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
} */

/* let nombre=prompt("ingresar nombre");
if((nombre=="ANA")||(nombre=="ana")){
    alert("el nombre ingresado es ana");
}else{
    alert("no es ana")
} */

/* let nombre=prompt("ingresar nombre");

if((nombre=="ANA")&&(nombre!="")||
nombre=="ana"){
    alert("el nombre ingresado es ana");
}else{
    alert("no es ana")
}
 */
/* if(1<2){
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
} */

/* let edad=12;

let miEdad="37";
let edadLucas=parseInt(prompt("ingrese la edad"));
let numeroA=15;
let numeroB=320;

let variableBooleano=false;

let variableBooleano2=10>2; //true

let variableBooleano3=numeroA<numeroB;//true

let comparacion= miEdad===edadLucas;//probable de false
 */
/* let numero=parseInt(prompt("Ingrese un numero"));

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
} */

/* let nombre=prompt("ingrese un nombre");
let apellido=prompt("ingrese apellido");
 */
/* console.log("tu nombre completo es "+nombre+" "+apellido);

if(nombre!=""|| apellido!=""){
    alert("bienvenido "+nombre+" "+apellido);
}else{
    alert("faltan datos")
} */

/* if((nombre!="")&&(nombre=="Flor"|| nombre=="flor")){
    alert("Bienvenido "+nombre)
} */

let edadConductor=parseInt(prompt("ingrese tu edad"));

if(edadConductor>=18){
    alert("podes conducir");
}else if(edadConductor>=16 && edadConductor<18){
    alert("podes conducir con permiso especial")
}else{
    alert("no podes conducir")
};



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

} */