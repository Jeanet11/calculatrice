var nombre1 = Number(prompt("Entrez le nombre 1"));

var nombre2 = Number(prompt("Entrez le nombre 2")) ;

/*var somme = nombre1 + nombre2;
var multiplication = nombre1 * nombre2;
alert ("Le résultat de la somme est : " + somme  + "\nLe résultat de la multiplication est : " + multiplication);
*/

function somme (nombre1, nombre2) {
	return nombre1 + nombre2;
}

function produit (nombre1, nombre2) {
	return nombre1 * nombre2;
}



var monTitre = document.querySelector("p");
monTitre.textContent = "La somme est " + somme(nombre1, nombre2) + " et le produit est " + produit(nombre1, nombre2);
/*alert ("La somme est : " + somme(nombre1, nombre2) + "\nLe produit est : " + produit(nombre1, nombre2));*/