
  function Sumar() {
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var suma = parseInt(n1) + parseInt(n2);
    alert("La suma es: "+suma)
}
function Promedio(){
    var n1 = document.getElementById('nota1_ej2').value;
    var n2 = document.getElementById('nota2_ej2').value;
    var n3 = document.getElementById('nota3_ej2').value;
    var n4 = document.getElementById('nota4_ej2').value;
    var promedio = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n2)) /4; 
    alert("El promedio de las notas es: " +promedio)
}
function area_Rectangulo() {
    var n1 = document.getElementById('base_ej3').value;
    var n2 = document.getElementById('altura_ej3').value;
    var area = (parseInt(n1) * parseInt(n2));
    alert("El area del rectangulo es: "+area)
}
function area_Triangulo() {
  var n1 = document.getElementById('base_ej4').value;
  var n2 = document.getElementById('altura_ej4').value;
  var area = (parseInt(n1) * parseInt(n2))/2;
  alert("El area del triangulo es: "+area)
}
function area_Circulo() {
  var n1 = document.getElementById('radio_ej5').value;
  var area = (parseInt(n1) * parseInt(n1)) * 3.14;
  alert("El area del circulo es: "+area)
}
function suelo_pago(){
  var n1 = document.getElementById('horas_ej6').value;
  
  var n2 = document.getElementById('pago_ej6').value;
  
  var pago;
  if(parseInt(n1)>40){
    pago = 40*parseInt(n2)+(parseInt(n1)-40)*(parseInt(n2)*1.5);
  } else {
    pago = parseInt(n1)*parseInt(n2);
  }
  if (pago>500){
    pago=pago*0.9;
  }
  alert("El pago semanal es :"+pago)
}
function precio_tela(){
  var n1 = document.getElementById('metros_ej7').value;
  var tp = 39.37* parseInt(n1);
  var p = 0.25*tp;
  alert("Cantidad de tela en pulgadas :"+tp +" El precio a pagar por pulgada de tela es de : " +p) 

}
function cambio_moneda(){
  var n1 = document.getElementById('dinero_ej8').value;
  var cambio =  parseInt(n1) / 3.6;
  alert("El cambio de dinero es : $"  + cambio +" Dolares") 

}
function edad_nacimiento(){
  var n1 = document.getElementById('ano_ej9').value;
  var edad =  2021 - parseInt(n1) ;
  if (edad>18){
    alert("El usuario es mayor de edad tiene :" + edad) 
  } else {
    alert("El usuario es menor de edad tiene :" + edad) 
  } 

}
function menor_edad(){
  var nombre1 = document.getElementById('prim_nombre_ej10').value;
  var nombre2 = document.getElementById('sec_nombre_ej10').value;
  var nombre3 = document.getElementById('ter_nombre_ej10').value;

  var edad1 = document.getElementById('prim_edad_ej10').value;
  var edad2 = document.getElementById('sec_edad_ej10').value;
  var edad3 = document.getElementById('ter_edad_ej10').value;
if(edad1<=edad2 & edad1<=edad3){
  alert("El menor es :" +nombre1 +" con :" +edad1 +" anos")
}else if (edad2<edad3) {
  alert("El menor es :" +nombre2 +" con :" +edad2 +" anos")
}else {
  alert("El menor es :" +nombre3 +" con :" +edad3 +" anos")
}

}
function ano_antiguedad(){
  var ano = document.getElementById('ano_ej11').value;
  if(ano==1){
    alert("Recibe un bono de $100")
  }else if (ano==2){
    alert("Recibe un bono de $200")
  }else if(ano==3){
    alert("Recibe un bono de $300")
  }else if(ano==4){
    alert("Recibe un bono de $400")
  }else if(ano==5){
    alert("Recibe un bono de $500")
  }else if(ano>=5){
    alert("Recibe un bono de $1000")
  }
  
}

