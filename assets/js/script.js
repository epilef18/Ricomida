$(document).ready(function () {
  $("#botoncorreo").on("click", function () {
    alert("El correo fue enviado correctamente...");
  });
  $("#ingredientes").dblclick(function () {
    $("#ingredientes").toggleClass("negro rojo");
  });
  $("#preparacion").dblclick(function () {
    $("#preparacion").toggleClass("negro rojo");
  });
  $("#panqueque").on("click", function () {
    $("#panquequecont").toggle("fast", function () {});
  });
  $("#panqueque").on("click", function () {
    $("#panquequeimg").toggle("fast", function () {});
  });
  $("#tiramisu").on("click", function () {
    $("#tiramisuimg").toggle("fast", function () {});
  });
  $("#tiramisu").on("click", function () {
    $("#tiramisucont").toggle("fast", function () {});
  });
  $("#plateada").on("click", function () {
    $("#plateadaimg").toggle("fast", function () {});
  });
  $("#plateada").on("click", function () {
    $("#plateadacont").toggle("fast", function () {});
  });
  $('[data-toggle="tooltip"]').tooltip();
});
