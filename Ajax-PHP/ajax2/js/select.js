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
                    content += '<tr>';
                    content += '    <td>'+alumno.id+'</td>';
                    content += '    <td>'+alumno.nombre+'</td>';
                    content += '    <td class="">';
                    content += '        <a href="actualizar.html?id='+alumno.id+'" class="btn btn-primay "> <i class="fa fa-edit"></i> Actualizar</a>';
                    content += '    </td>';
                    content += '    <td class="">';
                    content += '        <a href="" data-id="'+alumno.id+'" class="btn btn-danger"><i class="far fa-trash-alt"></i>Eliminar</a>';
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



	

})();