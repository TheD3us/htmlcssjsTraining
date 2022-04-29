
function validerForm(event){
    var nom = document.forms['form']['nom'];
    var prenom = document.forms["form"]["prenom"];
    var numerocarte = document.forms["form"]["numerocarte"];
    var telephone = document.forms["form"]["telephone"];
    var mail = document.forms["form"]["mail"];
    
    if(nom.value == "")
    {
        event.preventDefault();
        document.getElementById('erreurnom').innerHTML="Veuillez entrer un nom valide";
        nom.focus();
        
        return false;
    }

    if(prenom.value == "")
    {
        event.preventDefault();
        document.getElementById('erreurprenom').innerHTML="Veuillez entrer un prenom valide";
        prenom.focus();
        return false;
    }

    if(numerocarte.value == "")
    {
        event.preventDefault();
        document.getElementById('erreurnumerocarte').innerHTML="Veuillez entrer un numéro de carte valide";
        numerocarte.focus();
        return false;
    }

    if(telephone.value == "" || telephone.value < 100000000)
    {
        event.preventDefault();
        document.getElementById('erreurtelephone').innerHTML="Veuillez entrer un numéro telephone valide";
        telephone.focus();
        return false;
    }

    if(mail.value == "" || mail.value.indexOf('.', 0) < 0)
    {
        event.preventDefault();
        document.getElementById('erreurmail').innerHTML="Veuillez entrer un mail valide";
        mail.focus();
        return false;
    }
    return true;
}