export const LiberarSubmit = (erro) => {
    let liberar = true
    Object.keys(erro).forEach((valor) => { 
        if(erro[valor].erro && valor !== "conexao"){
            liberar = false
        }
    })
    return liberar;
}

export const ValidarNome = (nome) => {
    if(nome === undefined || nome.length < 3){
        return {erro: true,
            menssagem: "Nome não pode ter menos que três caracteres"}
    }
    
    return {erro: false,
            menssagem: ''}
}

export const ValidarEmail = (email) => {
    const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
    return {erro: !regex.test(email),
            menssagem: !regex.test(email) ? "Preencha o e-mail corretamente" : ''}
}

export const ValidarSenha = (senha) => {
    
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/g
    
    if(!regex.test(senha)){
        return {erro: true,
            menssagem: "Mínimo de seis caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"}
    }
    
    return {erro: false,
            menssagem: ''}
}

export const ValidarConfSenha = (senha, confSenha) => {
    if(confSenha === undefined || senha !== confSenha){
        return {erro: true,
            menssagem: "Confirmação de senha diferente da senha."}
    }
    
    return {erro: false,
            menssagem: ''}
}

export const ValidarCelular = (celular) => {   
    if(celular === undefined || celular === ""){
        return {erro: false,
                menssagem: ""}
    } 
    const celularFormatado = celular.replace(/[^\d]/gi, '')
    const regex = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\?(\d{4}))$/

    return {erro: !regex.test(celularFormatado),
            menssagem: !regex.test(celularFormatado) ? "Número inválido!" : ''}
}
