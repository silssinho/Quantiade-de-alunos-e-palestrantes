
let dataEvento = new Date (2022,11,20)
let dataInscricao = new Date ( )
let idadeEvento = 18
let idadeInscrito = 20
let quantLimite = 100
let quantInscrito = 101

//data do evento
if (dataEvento >= dataInscricao) {
    console.log ("A data está validado, continue o seu cadastro.")
} else {
    console.log ("O evento já ocorreu, seu cadastro não pode ser efetuado.")
}

//idade limete para ser inscreve no evento
if (idadeEvento <= idadeInscrito) {
    console.log ("A idade do inscrito validade, continue o seu cadastro.")
} else {
    console.log ("O cadastro náo pode ter continuidade, idade abaixo do permitido")
}

//quantidade limite para a realização do evento
if (quantLimite >= quantInscrito) {
    console.log("Seu cadastro foi realizado com sucesso. BOAS PALESTRAS.")
} else {
    console.log("Quantidade de inscritos e palestrantes foi alcançado, seu cadastro ficara em uma lista de espera. Grato")
}

