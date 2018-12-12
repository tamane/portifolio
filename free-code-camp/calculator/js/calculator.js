// JavaScript Caculator
// freeCodeCamp Challenge
// March 2018
// Code by André Tamane

$( document ).ready(function() {
  
	var valor1;
	var valor2;
	var valor3;
	var op;
	var total;
	
	
	//Math operations functions
	function operation(){
		
		valor2 = $('#display').val();
		
		switch (op){
				
			case 'sum':
				
				total = Number(valor1) + Number(valor2);
				$('#display').val( total );
				break;
				
			   
			case 'subt':
				
				total = Number(valor1) - Number(valor2);
				$('#display').val( total );
				break;
				
			
			case 'multi':
				
				total = Number(valor1) * Number(valor2);
				$('#display').val( total );
				break;
				
					  
			case 'divi':
				
				total = Number(valor1) / Number(valor2);
				$('#display').val( total );
				break;
				
		}
		
	}
	
	//PRINT THE CLICKED BUTTON IN DISPLAY
	$('button.number').click(function(){
		
		$('#display').val($('#display').val() + ($(this).attr('value')));
		
	});
	
	//RECORDING valor1
	function guard(){
		valor1 = $('#display').val();
		keepValue();		
	}
	
	//Keep last value in display
	function keepValue(){
		$('#display').val( '' );		
		$('#display').attr( 'placeholder', valor1 );
	}
	
	//Sum
	$('#PLUS').click(function(){
		
		//1st time hit plus button
		if(valor1 === undefined && valor3 === undefined){
			guard();
			op = 'sum';
		}
		
		//Continue after hit equal button
		else if(valor3 !== undefined){
			valor1 = valor3;
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'sum';
		}
		
		//Continue account
		else{
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'sum';
		}
		
	});
	
	//Subtraction
	$('#MINUS').click(function(){
		
		//1st time hit plus button
		if(valor1 === undefined && valor3 === undefined){
			guard();
			op = 'subt';
		}
		
		//Continue after hit equal button
		else if(valor3 !== undefined){
			valor1 = valor3;
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'subt';
		}
		
		//Continue account
		else{
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'subt';
		}
		
	});
	
	//Multiplication
	$('#MULTIPLY').click(function(){
		
		//1st time hit plus button
		if(valor1 === undefined && valor3 === undefined){
			guard();
			op = 'multi';
		}
		
		//Continue after hit equal button
		else if(valor3 !== undefined){
			valor1 = valor3;
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'multi';
		}
		
		//Continue account
		else{
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'multi';
		}
		
	});
	
	//Division
	$('#DIVIDE').click(function(){
		
		//1st time hit plus button
		if(valor1 === undefined && valor3 === undefined){
			guard();
			op = 'divi';
		}
		
		//Continue after hit equal button
		else if(valor3 !== undefined){
			valor1 = valor3;
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'divi';
		}
		
		//Continue account
		else{
			operation();
			valor1 = total;
			keepValue();
			valor2 = undefined;
			op = 'divi';
		}
		
	});
	
	
	//Equal
	$('#EQUAL').click(function(){
		
		if(valor1 !== undefined){
			operation();
			$('#display').val( '' );		
			$('#display').attr( 'placeholder', total );
			valor3 = total;
			valor1 = undefined;
			valor2 = undefined;
			total = undefined;
		}
		
	});
	
	
	//Clear entry (CE)
	$('#CE').click(function(){
		
		$('#display').val('0');
		
	});
	
	
	
	//All Clear (AC)
	$('#AC').click(function(){
		
		$('#display').val('').attr( 'placeholder', '0' );
		valor1 = undefined;
		valor2 = undefined;
		valor3 = undefined;
		total = undefined;
		
	});
	
});