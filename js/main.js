var api = {
  url:'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var $tablitap = $("#tablita");

var cargarPagina = function () {
  cargarComentarios();
  $("#forma").submit(agregarComentario);
};

var cargarComentarios = function () {
  $.getJSON(api.url, function (topics) {
    topics.forEach(crearComentario);
  });
}

var crearComentario = function (comentario) {
  var post = comentario.content;
  var respuesta = comentario.author_name[0];
  // creamos la fila
  var $tr = $("<tr />");
  // creamos la celda del comentario
  var $posttd= $("<td />");
  $posttd.text(post);
  // creamos la celda de las respuestas
  var $respuestatd = $("<td />");
  $respuestatd.text(autor);
  // agregamos las celdas a la fila
  $tr.append($posttd);
  $tr.append($respuestatd);
  // agregamos filas a la tabla
  $tablitap.append($tr);
};

var agregarComentario = function (e) {
  e.preventDefault();
  var post = $("#contentcomen").val();
  $.post(api.url, {
    content: post
  }, function (comentario) {
    crearComentario(comentario);
    $("#myModal").modal("hide");
  });
};

$(document).ready(cargarPagina);
