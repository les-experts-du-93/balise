// s'éxecute lors du clic du bouton
function chercher() {
    let numero_balise = document.getElementById("balise").value
    var boite = document.getElementById("resultat")
    document.getElementById("carte").src=`./map/${numero_balise}.jpg`;
    if (numero_balise === '172'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 168 et 130`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '173'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 57`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '175'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 163`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '178'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 63`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '180'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 60`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '199'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 52, 160, 135 et 39`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '155'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 121`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '156'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} n'a pas d'équivalent`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '159'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 151 et 60`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '160'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 39, 52 et 199`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '163'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 175`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '166'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 139, 100, 40 et 124`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '168'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 130 et 172`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '170'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 125 et 59`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '145'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 150`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '147'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 47 et 102`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '149'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 50`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '150'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 145`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '151'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balise 159 et 60`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '152'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} n'a pas d'équivalent`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '154'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 95 et 56`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '131'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 141 et 101`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '135'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 199, 160, 52 et 39`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '137'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 170, 125 et 59`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '138'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} n'a pas d'équivalent`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '139'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 166, 124, 100 et 40`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '140'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 96`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '141'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 131 et 101`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '102'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 47 et 147`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '121'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 155 et 48`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '123'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 149 et 50`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '124'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 166, 100, 40 et 139`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '125'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 170, 59 et 137`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '126'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 173 et 57`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '128'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} n'a pas d'équivalent`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '130'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 172 et 168`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '59'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 125, 170 et 137`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '60'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 180, 159 et 151`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '77'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} n'a pas d'équivalent`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '95'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 154 et 56`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '96'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 140`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '100'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 166, 124, 40 et 139`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '101'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 131 et 141`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '39'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 199, 135, 52 et 160`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '40'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 166, 124, 100 et 139`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '47'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 147 et 102`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '48'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 121 et 155`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '50'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 149 et 123`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '52'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 199, 135, 39 et 160`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '56'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 154 et 95`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '57'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent les balises 173 et 126`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }
    else if (numero_balise === '63'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `La balise ${numero_balise} a comme équivalent la balise 178`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }

    // EASTER EGG
    else if (numero_balise === '666'){
        document.getElementById("titre-resultat").innerHTML = `Résultat de la recherche pour la balise ${numero_balise} :`
        document.getElementById("ligne1").innerHTML = `SATHAN SORT DE LA !`
        document.getElementById("schema").src=`./balise/${numero_balise}.png`;
        boite.style.display = "block";
    }

    else{
        alert("Nous sommes désolés, aucune balise n'a été enregistrée avec ce numéro !")
    }
}
