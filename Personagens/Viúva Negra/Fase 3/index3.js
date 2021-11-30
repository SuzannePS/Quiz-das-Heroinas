function escolha(){
    while (responder!= 1|| responder!=2 || responder !=3){

        var responder = prompt ("Digite a opção correta")
 
        if (responder == "3"){
            window.location.href = "indexAcertou3.html"
            break
        }
        else if (responder == "1" || responder == "2") {
            window.location.href = "indexGameover3.html"
            break
        }
        else {
           alert ("Digite uma opção válida 1, 2 ou 3")
        }
    }
    
}

