$(document).ready(function () {
  calcularCantidad();
});

function calcularCantidad()
{
  $('.contar-caracteres').submit(function (e) {
    e.preventDefault();
    var texto = $('#texto').val();
    contar(texto);
  });
}

function contar(text)
{
  var all = 0;
  var letra = 0;
  var texto = text.split("");
  console.log(texto);
  for (var i = 0; i < texto.length; i++)
  {
    if (texto[i].charCodeAt(0) != 32)
    {
      console.log(texto[i]);
      if (
        (texto[i].charCodeAt(0)>64 && texto[i].charCodeAt(0)<91) ||
        (texto[i].charCodeAt(0)>96 && texto[i].charCodeAt(0)<123) ||
        (texto[i].charCodeAt(0)>127 && texto[i].charCodeAt(0)<166) ||
        (texto[i].charCodeAt(0)>223 && texto[i].charCodeAt(0)<238)
      )
      {
        letra = letra + 1;
      }
      else
      {
        all = all + 1;
      }
    }
  }

  $('.solo-letra').html(letra);
  $('.solo-all').html(all+letra);
  $('.solo-separados').html(all+ " caracteres y "+ letra +" letras.");
}
