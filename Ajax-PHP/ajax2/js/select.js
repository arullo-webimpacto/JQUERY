(function(){

	$(document).ready(function () {
        
        $.ajax({
			type: 'POST',
			url : 'php/servicios/get.alumnos.php',
			dataType: 'json',
		})
		.done(function( data ){
			
			console.log("Correcto!");
	
			console.log( data ); // Se imprime en consola la api
            
            if(data.error){
                alert("Algo hay mal");
                return;
            };

            data.alumnos.forEach(function(alumno,index){
                var content ="";
                    content += '<tr id="fila'+alumno.id+'">';
                    content += '    <td>'+alumno.id+'</td>';
                    content += '    <td>'+alumno.nombre+'</td>';
                    content += '    <td class="">';
                    content += '        <a href="actualizar.html?id='+alumno.id+'" class="btn btn-primay "> <i class="fa fa-edit"></i> Actualizar</a>';
                    content += '    </td>';
                    content += '    <td class="">';
                    content += '        <a href="" data-nombre="'+alumno.nombre+'" data-id="'+alumno.id+'" class="btn btn-danger botEliminar"><i class="far fa-trash-alt"></i>Eliminar</a>';
                    content += '    </td>';
                    content += '</tr>';

                    $('#tblResgistros').append(content);
            });



	
		})
		.fail(function(){
			console.log("Fallo!");
		})
		.always(function(){
			console.log("Completo!");
		});


    });

    $("body").on("click",".botEliminar",function (e) {

        e.preventDefault();

        var nombre = $(this).data("nombre");
        var id = $(this).data('id');
        console.log(id);

        Swal.fire({
            title: 'Estas Seguro?',
            text: "de querer borrar a: "+ nombre,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: 'Cancelar',
            confirmButtonText: 'Sí, borralo!'
          }).then((result) => {
            if (result.value) {
                borrar_registro(id);


            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            }
          });

    });


function borrar_registro(id) {
    //Cuando estamos seguros que lo queremos borrar
        
    // var id = $(this).data('id');
    // console.log(id);

    $.ajax({
        type: 'POST',
        url : 'php/servicios/post.eliminaalumno.php?id='+ id,
        dataType: 'json'
    })
    .done(function( data ){
        
        console.log("Correcto!");

        console.log( data ); // Se imprime en consola la api

        $("#fila"+id).remove();

        Swal.fire(
            'Borado!',
            'El registro ha sido borrado correctamente.',
            'success'
          )

    });
}
	

})();