function comprar(){
    ingressos_pista = document.getElementById("qtd-pista")
    quantidade_pista = parseInt(ingressos_pista.innerText)

    ingressos_superior = document.getElementById("qtd-superior")
    quantidade_superior = parseInt(ingressos_superior.innerText)

    ingressos_inferior = document.getElementById("qtd-inferior")
    quantidade_inferior = parseInt(ingressos_inferior.innerText)

    tipo_ingresso = document.getElementById("tipo-ingresso").value
    quantidade_ingressos = parseInt(document.getElementById("qtd").value)
    
    if(quantidade_ingressos > 0){
        if (tipo_ingresso == "inferior"){
            if (quantidade_ingressos > quantidade_inferior){
                alerta(tipo_ingresso)
            }else{
                ingressos_inferior.innerHTML -= quantidade_ingressos
            }
        }else if(tipo_ingresso == "superior"){
            if (quantidade_ingressos > quantidade_superior){
                alerta(tipo_ingresso)
            }else{
                ingressos_superior.innerHTML -= quantidade_ingressos
            }
        }else{
            if (quantidade_ingressos > quantidade_pista){
                alerta(tipo_ingresso)
            }else{
                ingressos_pista.innerHTML -= quantidade_ingressos
            }
        }
    }else{
        alert("Insira a quantidade que deseja comprar!")
    }
    
}

function alerta(msg){
    alert(`Os ingressos na ${msg} já estão esgotado`)
}