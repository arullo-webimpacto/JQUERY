(function(){

    $.ajax({
        type: 'GET',
        // url: 'json/registro.json',
        url: 'http://www.json-generator.com/api/json/get/clPTUEjhea?indent=2',
        dataType: 'json',
    })
    .done(function (data) {
        console.log("Hecho correcto");

        var persona =data;
        console.log(data);

        $("#txtFoto").attr("src",data.picture);
        $("#txtNombre").val(data.name);
        $("#txtDireccion").val(data.address);
        $("#txtTelefono").val(data.phone);
        $("#txtGenero").val(data.gender);
        
    })
    .fail(function () {
        console.log("Fallo");
    })
    .always(function () {
       console.log("Completo"); 
    });







})();