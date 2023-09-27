const validar = (dados) => {
    let erros = 0

    if(dados.nome == null || dados.nome == ""){
        erros++
    } if(dados.preco == null || dados.preco == ""){  // || dados.preco <= 0
        erros++
    } if(dados.peso == null || dados.peso == ""){  // || dados.peso <= 0
        erros++  
    } if(dados.cor == null || dados.cor == ""){
        erros++
    } if(dados.marca == null || dados.marca == ""){
        erros++
    } if(dados.id == null || dados.id == ""){ // || dados.id < 0
        erros++
    }

    if(erros > 0){
        return false
    } else {
        return true
    } 
}