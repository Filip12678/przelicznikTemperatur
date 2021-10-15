function myFunction() {
	var wartosc = parseFloat(document.getElementById('wartosc').value);
    var oper1 = document.getElementById('operator1').value;
	var oper2 = document.getElementById('operator2').value;
	
	if (oper1 === 'celcjusz1' && oper2 == 'fahrenheit2') {
		var wynik = wartosc * 1.8 + 32;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'fahrenheit1' && oper2 === 'celcjusz2') {
		var wynik = (wartosc - 32) * (5/9);
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
	    document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'celcjusz1' && oper2 === 'kelwin2') {
		var wynik = wartosc + 273.15;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'kelwin1' && oper2 === 'celcjusz2') {
		var wynik = wartosc - 273.15;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'fahrenheit1' && oper2 === 'kelwin2') {
		var wynikTymczasowy = (wartosc - 32) * (5/9);
		var wynik = wynikTymczasowy + 273.15;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'kelwin1' && oper2 === 'fahrenheit2') {
		var wynikTymczasowy = wartosc - 273.15;
		var wynik = wynikTymczasowy * 1.8 + 32;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
}