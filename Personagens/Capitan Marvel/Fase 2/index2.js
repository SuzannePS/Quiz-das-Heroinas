function escolha(){
    while (responder!= 1|| responder!=2 || responder !=3){

        var responder = prompt ("Digite a opção correta")
 
        if (responder == "1"){
            window.location.href = "indexAcertou2.html"
            break
        }
        else if (responder == "2" || responder == "3") {
            window.location.href = "indexGameover2.html"
            break
        }
        else {
           alert ("Digite uma opção válida 1, 2 ou 3")
        }
    }
    
}