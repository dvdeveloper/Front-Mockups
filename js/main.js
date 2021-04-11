$(function(){
	$("#btn_especialidad").on('click',function(){
		$("#form_especialidad").show();
		$("#form_profesional").hide();
		$("#btn_continuar").show();
	});

	$("#btn_profesional").on('click',function(){
		$("#form_especialidad").hide();
		$("#form_profesional").show();
		$("#btn_continuar").show();
	});

	$( "#datepicker" ).datepicker();
	$("#datepicker").on('change',function(){
		$("#select_oculto").show();
		$("#btn_oculto").show();
	})
});