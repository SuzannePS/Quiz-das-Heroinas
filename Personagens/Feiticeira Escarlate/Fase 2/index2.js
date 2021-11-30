function escolha(){

    var responder = prompt ("Digite a opção correta")
 
    if (responder == "1"){
        return location = "indexAcertou2.html"
    }
    else if (responder == "2" || responder == "3") {
        return location = "indexGameover2.html"
    }
    else {
        escolha() 
    }
}