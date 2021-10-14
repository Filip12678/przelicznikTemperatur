function myFunction() {
	var wartosc = parseFloat(document.getElementById('wartosc').value);
    var oper1 = document.getElementById('operators1').value;
	var oper2 = document.getElementById('operators2').value;
	
	if (oper1 === 'celcjusz1' && oper2 == 'fahrenheit2') {
		var wynik = wartosc * 1.8 + 32;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 == 'fahrenheit1' && oper2 == 'celcjusz2') {
		var wynik = (wartosc - 32) * (5/9);
	    document.getElementById('result').value = wynik;
	}
}